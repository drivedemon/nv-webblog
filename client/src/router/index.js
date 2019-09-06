import Vue from 'vue'
import Router from 'vue-router'

// All Users
import UserIndex from '@/components/User/Index'
import UserCreate from '@/components/User/CreateUser'
import UserEdit from '@/components/User/EditUser' 
import UserShow from '@/components/User/ShowUser'

// Authen
import Login from '@/components/Login'

// Comment
import CommentIndex from '@/components/Comments/Index'

// Blog
import MyBlogs from '@/components/Blogs/myblogs'
import BlogIndex from '@/components/Blogs/Index'
import BlogCreate from '@/components/Blogs/CreateBlog'
import BlogEdit from '@/components/Blogs/EditBlog'
import BlogShow from '@/components/Blogs/ShowBlog'

Vue.use(Router)

export default new Router({
  mode: 'history', // mode for hide '#' in URL
  routes: [
    // blogs
    {
      path: '/myblogs', // path url
      name: 'myblogs', // call by name
      component: MyBlogs // sync to file
    },
    {
      path: '/blogs', // path url
      name: 'blogs', // call by name
      component: BlogIndex // sync to file
    },
    {
      path: '/blog/create',
      name: 'blogs-create',
      component: BlogCreate
    },
    {
      path: '/blog/edit/:blogId',
      name: 'blogs-edit',
      component: BlogEdit
    },
    {
      path: '/blog/:blogId',
      name: 'blog',
      component: BlogShow
    },
    // comment
    {
      path: '/comments',
      name: 'comments',
      component: CommentIndex
    },
    // user
    {
      path: '/users', // path url
      name: 'users', // call by name
      component: UserIndex // sync to file
    },
    {
      path: '/user/create',
      name: 'user-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },
    // authen
    {
      path: '/login', // path url
      name: 'login', // call by name
      component: Login // sync to file
    },
  ]
})
