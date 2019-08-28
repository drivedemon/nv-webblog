// code for html language
<template>
<div>    
    <div v-for="index in 10" :key="index" >
        <p v-if="index >= 5">ID : {{index}}</p>
    </div>
    <h1>Get All Users</h1>
    <h4>จำนวนผู้ใช้งาน {{ users.length }}</h4>
    <button @click="navigateTo('/user/create')">button create user</button>    
    <button @click="logout">Logout</button>
    <!-- <div v-if="users.length"> -->
    <div v-for="fuserr in users" v-bind:key="fuserr.id">
        <p>ID : {{fuserr.id}}</p>
        <p>Name - Lastname : {{fuserr.name}} - {{fuserr.lastname}}</p>
        <p>Email : {{fuserr.email}}</p>
        <p>Password : {{fuserr.password}}</p>
        <button @click="navigateTo('/user/'+fuserr.id)">button view user</button>
        <button @click="navigateTo('/user/edit/'+fuserr.id)">button edit user</button>
        <button @click="deleteUser(fuserr)">button delete user</button>
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
        async deleteUser (user) {
            let result = confirm("Yes or No?")
            if(result) {
                try {
                    await UsersService.delete(user)
                    this.refreshData()
                } catch (err) {
                    console.log(err)
                }
            }
        },
        async refreshData () {
            this.users = (await UsersService.index()).data
        },
        logout () {
            this.$store.dispatch('setToken', null)
            this.$store.dispatch('setUser', null)
            this.$router.push({
                name: 'login'
            })
        },
    }
}
</script>
// css style
<style scoped>

</style>

