// code for html language
<template>
<div>
    <h1>Get All Users</h1>
    <h4>จำนวนผู้ใช้งาน {{ users.length }}</h4>
    <button @click="navigateTo('/user/create')">button create user</button>
    <!-- <div v-if="users.length"> -->
    <div v-for="fuserr in users" v-bind:key="fuserr.id">
        <p>ID: {{fuserr.id}}</p>
        <p>{{fuserr.name}} - {{fuserr.lastname}}</p>
        <button @click="navigateTo('/user/'+fuserr.id)">button view user</button>
        <button @click="navigateTo('/user/edit/'+fuserr.id)">button edit user</button>
        <hr>
    </div>
</div>
</template>
// code for javascript vue
<script>
import UsersService from '@/services/UsersService'

export default {
    data () {
        return {
            users: []
        }
    },
    async created () {
        try {
            this.users = (await UsersService.index()).data
        } catch (error) {
        console.log(error)
        }
    },
    // send path to route for open new file by 'navigateTo'
    methods: {
        navigateTo (route) {
            this.$router.push(route)
        },       
    }
}
</script>
// css style
<style scoped>

</style>

