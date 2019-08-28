// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { sync } from 'vuex-router-sync'
import store from './store'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(VueResource)

// sync store กับ router เพื่อให้มองเห็น store จากทุกที่
sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app', // ให้มองหา id=”app” ใน index.html แล้ว render
  router, //  เชื่อมโยงกับ router ที่โหลดมาเพื่อให้รู้จัก this.$router
  store, //  เชื่อมโยงกับ store ที่โหลดมาเพื่อให้รู้จัก this.$store
  components: { App }, // ใช้ component นี้ไป render
  template: '<App/>' //  บอกว่า App คือ component
})
