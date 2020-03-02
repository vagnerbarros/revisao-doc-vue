<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-sheet height="80">
          <v-toolbar text dark color="primary">
            <v-toolbar-title >Calendário {{ title}}</v-toolbar-title>
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
          <v-calendar ref="calendar" v-model="focus">
          </v-calendar>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'Calendar',
  data: () => ({
    focus: '',
    type: 'Week',
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

  }),

  computed: {

    title(){

      const { start, end } = this;
      if(!start || !end){
        return '';
      }

      const startMonth = this.monthFormatter(start)
      const endMonth = this.monthFormatter(end)
      const suffixMonth = startMonth === endMonth ? '' : endMonth
      const startYear = start.year
      const endYear = end.year
      const suffixYear = startYear === endYear ? '' : endYear
      const startDay = start.day + this.nth(start.day)
      const endDay = end.day + this.nth(end.day)
      switch (this.type) {
        case 'month':
          return `${startMonth} ${startYear}`
        case 'week':
        case 'day':
          return `${startMonth} ${startDay} ${startYear}`
      }
      return ''
    },
    
    monthFormatter () {
      return this.$refs.calendar.getFormatter({
        timeZone: 'UTC', month: 'long',
      })
    },
  },

  methods: {

    setHoje(){

    },
    voltar(){

    },
    avancar(){

    }
  },

  mounted () {
    this.$refs.calendar.checkChange()
  },
}
</script>