<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-sheet height="80">
          <v-toolbar text dark color="primary">
            <v-toolbar-title >{{ title}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu bottom right class="mr-3">
              <template v-slot:activator="{ on }">
                <v-btn v-on="on" outlined>
                  <span>{{ typeToLabel[type] }}</span>
                  <v-icon right>mdi-menu-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="type = 'day'">
                  <v-list-item-title>Day</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = 'week'">
                  <v-list-item-title>Week</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = 'month'">
                  <v-list-item-title>Month</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-spacer></v-spacer>
            <v-btn @click="setHoje" color="primary" class="mr-3">Hoje</v-btn>
            <v-spacer></v-spacer>
            <v-btn fab small color="primary" class="mr-3" @click="voltar"><v-icon>mdi-chevron-left</v-icon></v-btn>
            <v-btn fab small color="primary" class="mr-3" @click="avancar"><v-icon>mdi-chevron-right</v-icon></v-btn>
          </v-toolbar>
        </v-sheet>
        <v-sheet heigth="600">
          <v-calendar ref="calendar" v-model="focus" :type="type" @click:date="viewDay" @change="updateRange" :event-color="getEventColor" :events="events">
          </v-calendar>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import moment from 'moment';
moment.locale('pt-BR');

export default {
  name: 'Calendar',
  data: () => ({
    focus: '',
    type: 'week',
    typeToLabel: {
      month: 'Month',
      week: 'Week',
      day: 'Day'
    },
    color: 'primary',
    start: null,
    end: null,
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
    names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
  }),

  computed: {

    title(){

      const { start, end } = this;
      if(!start || !end){
        return '';
      }

      const startMonth = this.monthFormatter(start);
      const endMonth = this.monthFormatter(end);
      const suffixMonth = startMonth === endMonth ? '' : endMonth;
      const startYear = start.year;
      const endYear = end.year;
      const suffixYear = startYear === endYear ? '' : endYear;
      const startDay = start.day;
      const endDay = end.day;
      switch (this.type) {
        case 'month':
          return `${startMonth} ${startYear}`;
        case 'week':
          return `${startDay} - ${endDay} de ${startMonth} ${startYear}`;
        case 'day':
          return `${startDay} de ${startMonth} ${startYear}`;
      }
      return '';
    },
    
    
  },

  methods: {

    monthFormatter(data) {
      return moment(data).format('MMMM');
    },

    viewDay ({ date }) {
      this.focus = date;
      this.type = 'day';
    },
    setHoje(){
      this.focus = this.today;
    },
    getEventColor (event) {
      return event.color
    },
    voltar(){
      this.$refs.calendar.prev();
    },
    avancar(){
      this.$refs.calendar.next();
    },

    updateRange ({ start, end }) {
      const events = [];
      const min = new Date(`${start.date}T00:00:00`);
      const max = new Date(`${end.date}T23:59:59`);
      const days = (max.getTime() - min.getTime()) / 86400000;
      const eventCount = this.rnd(days, days + 20);
      for (let i = 0; i < eventCount; i++) {
        const allDay = this.rnd(0, 3) === 0;
        const firstTimestamp = this.rnd(min.getTime(), max.getTime());
        const first = new Date(firstTimestamp - (firstTimestamp % 900000));
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000;
        const second = new Date(first.getTime() + secondTimestamp);
        events.push({
          name: this.names[this.rnd(0, this.names.length - 1)],
          start: this.formatDate(first, !allDay),
          end: this.formatDate(second, !allDay),
          color: this.colors[this.rnd(0, this.colors.length - 1)],
        });
      }
      this.start = start;
      this.end = end;
      this.events = events;
    },

    rnd (a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a
    },

    formatDate (a, withTime) {
      return withTime
        ? `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()} ${a.getHours()}:${a.getMinutes()}`
        : `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()}`
    },
  },

  mounted () {
    this.$refs.calendar.checkChange()
  },
}
</script>