<template>
  
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: "redirect-login",
    methods: {
      ...mapActions(['actLogout']),
    },
    created () {
      this.actLogout();
      this.$router.replace({path: '/login'});
    }
  }
</script>