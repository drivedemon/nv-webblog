// code for html language
<template>
<div>
    <h1>Get User by ID</h1>
    <p>User ID: {{user.id}}</p>
    <p>{{user.name}} - {{user.lastname}}</p>
</div>
</template>
// code for javascript vue
<script>
import UsersService from '@/services/UsersService'

export default {
    data () {
        return {
            user: null
        }
    },
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

