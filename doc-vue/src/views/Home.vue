<template>
  <div class="home">
    <!-- <post v-for="post in posts" :key="post.id" :post="post">
      <span>content of slot</span>
    </post> -->
    <!-- <current-user>
      <template #default="{ user }">
        {{user.firstName}}
      </template>
    </current-user> -->
    <router-view></router-view>
  </div>
</template>

<script>

import Post from '@/components/Post';
import CurrentUser from '@/components/CurrentUser';

export default {
  name: 'Home',
  components: {
    Post,
    CurrentUser
  },
  data: function(){
    return {
      
      posts: [
        { id: 1, title: 'My first Post', comment: 'My first comment'},
        { id: 2, title: 'My second Post', comment: 'My second comment'},
        { id: 3, title: 'My third Post', comment: 'My third comment'},
      ],

    }
  }
}
</script>
