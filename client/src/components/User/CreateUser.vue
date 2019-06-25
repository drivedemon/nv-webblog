// code for html language
<template>
<div>
    <h1>Create Users</h1>
    <form v-on:submit.prevent = "createUser">
        name: <input type="text" v-model="user.name">
        <br>
        lastname: <input type="text" v-model="user.lastname">
        <br>
        email: <input type="text" v-model="user.email">
        <br>
        password: <input type="text" v-model="user.password">
        <br>
        <button type="submit">Submit</button>
    </form>
</div>
</template>
// code for javascript vue
<script>
import UsersService from '@/services/UsersService'

export default {
    data () {
        return {
            user: {
                name: '',
                lastname: '',
                email: '',
                password: '',
                status: 'active'
            }
        }
    },
    methods: {
        async createUser () {
            try {
                await UsersService.post(this.user)
                this.$router.push({
                    name: 'users'
                })
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>
// css style
<style scoped>

</style>

