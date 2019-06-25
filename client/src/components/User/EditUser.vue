// code for html language
<template>
<div>
    <h1>Edit Users</h1>
    <form v-on:submit.prevent="editUser">
        name: <input type="text" v-model="user.name">
        <br><br>
        lastname: <input type="text" v-model="user.lastname">
        <br><br>
        email: <input type="text" v-model="user.email">
        <br><br>
        password: <input type="text" v-model="user.password">
        <br><br>
        <button type="submit">edit user</button>
    </form>
    <hr>
    <!-- read data from textbox to display text zone -->
    <div>
        name: {{user.name}}
        <br>
        lastname: {{user.lastname}}
        <br>
        email: {{user.email}}
        <br>
        password: {{user.password}}
    </div>
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
                status: 'active '
            }
        }
    },
    methods: {
        async editUser () {
            try {
                await UsersService.put(this.user)
                this.$router.push({
                    name: 'users'
                })
            } catch (err) {
                console.log(err)
            }
        }
    },
    // view data in real-time from textbox
    async created () {
        try {
            let userId = this.$route.params.userId
            this.user = (await UsersService.show(userId)).data
        } catch (error) {
            console.log(error)
        }
    }
}
</script>
// css style
<style scoped>

</style>

