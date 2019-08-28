// code for html language
<template>
  <div>
    <h1>User Login</h1>
    <form v-on:submit.prevent="onLogin">
      Username:
      <input type="text" v-model="email">
      <br>
      <br>Password:
      <input type="text" v-model="password">
      <br>
      <br>
      <button type="submit">Login</button>
      <br>
      <br>
      <div class='error' v-if="error">{{error}}</div>
    </form>
    <hr>
  </div>
</template>
// code for javascript vue
<script>
import AuthenService from "@/services/AuthenService";

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async onLogin() {
      try {
        const response = await AuthenService.login({
            email: this.email,
            password: this.password
        })

        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)

        this.$router.push({
          name: 'users'
        })
        // console.log(response)

      } catch (error) {
        console.log(error)
        this.error = error.response.data.error
        this.email = ''
        this.password = ''
      }
    }
  },
  // view data in real-time from textbox
  async created() {
    try {
      let userId = this.$route.params.userId
      this.user = (await UsersService.show(userId)).data
    } catch (error) {
      console.log(error)
    }
  }
};
</script>
// css style
<style scoped>
  .error {
    color: red
  }
</style>

