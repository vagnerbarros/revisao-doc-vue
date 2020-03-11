<template>
  <div>
    <ul>
      <li v-for="user in users" :key="user.id" @click="detail(user)">
        {{ user.name }}
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

import api from '@/API/api';

export default {

  data: function(){
    return {
      users: [],
    }
  },

  methods: {

    detail(user){
      this.$router.push({ path: `users/${user.id}`});
    }
  },

  async created(){
    this.users = await api.getUsers();
  }
}
</script>