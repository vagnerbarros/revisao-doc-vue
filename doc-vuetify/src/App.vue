<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-menu v-model="valueMenuComponentes" open-on-hover close-on-content-click offset-y>
        <template v-slot:activator="{ on }">
          <v-btn dark color="primary" v-on="on">Componentes</v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in menuComponentes" :key="index" @click="mudarRota(item)">
            <v-list-item-title >{{item.titulo}}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>



export default {
  name: 'App',

  components: {
  },

  data: () => ({
    valueMenuComponentes: false,
    menuComponentes: [
      { titulo: 'Calendar', rota: '/calendar'},
    ],
  }),

  methods: {
    mudarRota(item){
      this.$router.push({ path: item.rota });
    }
  }
};
</script>
