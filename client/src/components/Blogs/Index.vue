<template>
    <div>
        <h1>GET All Blogs</h1>
        <h4>จำนวน blog {{blogs.length}}</h4>
        <p><button v-on:click="navigateTo('/blog/create')">create blog</button></p>
        <div v-for="blog in blogs" v-bind:key="blog.id">
            <p>ID: {{blog.id}}</p>
            <p>title: {{blog.title}}</p>
            <p>content: {{blog.content}}</p>
            <p>category: {{blog.category}}</p>
            <p>status: {{blog.status}}</p>
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

export default {
data () {
    return {
        blogs: []
    }
},
async created() {
    this.blogs = (await BlogsService.index()).data
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
}
}
</script>
<style scoped>

</style>