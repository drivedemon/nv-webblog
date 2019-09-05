<template>
    <div>
        <h1>Blog Create</h1>
        <form v-on:submit.prevent="createBlog">
            <p>title: <input type="text" v-model="blog.title"></p>
            <p>content: <input type="text" v-model="blog.content"></p>
            <p>category: <input type="text" v-model="blog.category"></p>
            <p>status: <input type="text" v-model="blog.status"></p>
            <p><input type="text" v-model="user.userId" style="display:"></p>
            <p><button type="submit">create blog</button></p>
        </form>
    </div>
</template>
<script>
import BlogsService from '@/services/BlogsService'
import UsersService from '@/services/UsersService'

                localStorage.setItem('key', 'value')
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
            },
            user: ''
        }
    },
    methods: {
        async createBlog() {
            try {
                await BlogsService.post(this.blog)
                this.$router.push({
                    name: 'blogs'
                })
            } catch (err) {
                console.log(err)
            }
        },
        async created() {
            try {
                // user = localStorage.getItem('id')
                // console.log(user+'ss')
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>
<style scoped>

</style>