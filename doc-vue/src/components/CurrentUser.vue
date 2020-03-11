<template>
  <span>
    <slot :user="user">
      {{ user.lastName }}
    </slot>
  </span>
</template>

<script>

export default {
  name: 'current-user',
  data: function(){
    return {
      user: {
        firstName: 'Vagner',
        lastName: 'Pereira'
      },
    }
  }
}
</script>