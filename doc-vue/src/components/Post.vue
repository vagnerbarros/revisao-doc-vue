<template>
  <div>
    <div>
      <h3>{{ post.title }}</h3>
    </div>
    <div>
      <span>{{ post.comment }}</span>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {

  props: {
    post: Object,
    required: true
  },
  
  data: function(){
    return {

    }
  },


}

</script>