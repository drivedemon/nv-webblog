<template>
    <div>
        <h1>Blog Create</h1>
        <form v-on:submit.prevent="createBlog">
            <p>title: <input type="text" v-model="blog.title"></p>
            <p>content: <input type="text" v-model="blog.content"></p>
            <p>category: <input type="text" v-model="blog.category"></p>
            <p>status: <input type="text" v-model="blog.status"></p>
            <p><button type="submit">create blog</button></p>
        </form>
    </div>
</template>
<script>
import BlogsService from '@/services/BlogsService'
import {mapState} from 'vuex'

export default {
    data() {
        return {
            blog: {
                title: '',
                thumbnail: 'null',
                pictures: 'null',
                content: '',
                category: '',
                status: 'saved',
                userId: ''
            }
        }
    },
    methods: {
        async createBlog() {
            try {
                this.blog.userId = this.user.id
                await BlogsService.post(this.blog)
                this.$router.push({
                    name: 'blogs'
                })            
            } catch (err) {
                console.log(err)
            }
        }
    },
    computed: {
        ...mapState([
        'isUserLoggedIn',
        'user'
        ])
    },
}
</script>
<style scoped>

</style>