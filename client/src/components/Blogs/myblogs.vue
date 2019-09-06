<template>
    <div>
        <h1>Show MyBlog</h1>
        <h4>จำนวน blog {{blogs.length}}</h4>
        <p><button v-on:click="navigateTo('/blog/create')">create blog</button></p>
        <div v-for="blog in blogs" v-bind:key="blog.id">
            <p>ID: {{blog.id}}</p>
            <p>title: {{blog.title}}</p>
            <p>content: {{blog.content}}</p>
            <p>category: {{blog.category}}</p>
            <p>status: {{blog.status}}</p>
            <p>byuser: {{blog.userId}}</p>
            <p>
                <button v-on:click="navigateTo('/blog/'+blog.id)">view blog</button>
                <button v-on:click="navigateTo('/blog/edit/'+blog.id)">edit blog</button>
                <button v-on:click="deleteBlog(blog)">delete blog</button>
            </p>
            <hr>
        </div>
    </div>
</template>
<script>
import BlogsService from '@/services/BlogsService'
import {mapState} from 'vuex'

export default {
    data () {
        return {
            blogs: []
        }
    },
    async created() {
        this.blogs = (await BlogsService.myblog(this.user.id)).data        
   },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        },
        async deleteBlog(blog) {
            let result = confirm('are u sure?')
            if(result) {
                try {
                    await BlogsService.delete(blog)
                    this.refreshData()
                } catch (err) {
                    console.log(err)
                }
            }
        },
        async refreshData() {
            this.blogs = (await BlogsService.index()).data
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