<template>
  <div>
    <h3>Id: {{ user.id }}</h3>
    <h3>Name: {{ user.name }}</h3>
    <h3>Age: {{ user.age }}</h3>
    <div>

    </div>
  </div>
</template>

<script>

import api from '../API/api';

export default {
  
  name: 'User',
  props: ['id'],
  data: function(){
    return {
      user: {}
    }
  },

  async created(){
    // let id = this.$route.params.id;
    this.user = await api.getUserId(this.id);
  }
}

</script>