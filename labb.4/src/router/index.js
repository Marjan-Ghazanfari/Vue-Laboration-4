import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Users from '../views/Users.vue'
import SignIn from '../views/SignIn.vue'
import User from '../views/User.vue'
import NewUser from '../views/AddUser.vue'
import EditUser from '../views/EditUser.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/users/userDetails/:userId',
    name: 'User',
    component: User,
    props: true
  },
  {
    path: '/users/new',
    name: 'NewUser',
    component: NewUser,
  },
  {
    path: '/users/edit',
    name: 'EditUser',
    component: EditUser,
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
