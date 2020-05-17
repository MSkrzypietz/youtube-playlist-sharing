import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/playlists/new',
    name: 'NewPlaylist',
    component: () => import('../views/NewPlaylist.vue')
  },
  {
    path: '/playlists/:id',
    name: 'Playlist',
    component: () => import('../views/Playlist.vue')
  },
  {
    path: '/playlists',
    name: 'UserPlaylists',
    component: () => import('../views/UserPlaylists.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
