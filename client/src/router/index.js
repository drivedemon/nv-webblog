import Vue from 'vue'
import Router from 'vue-router'

// All Users
import UserIndex from '@/components/User/Index'
import UserCreate from '@/components/User/CreateUser'
import UserEdit from '@/components/User/EditUser' 
import UserShow from '@/components/User/ShowUser'

// Authen
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
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
    {
      path: '/login',
      name: 'login',
      component: Login
    },

  ]
})
