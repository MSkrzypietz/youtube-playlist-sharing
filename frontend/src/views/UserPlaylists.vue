<template>
  <div>    
    <h1 class="text-left font-bold text-2xl mb-5 ">Your playlists</h1>      
    <loading-bar class="mx-auto" v-if="isLoading" />
    <div class="flex flex-wrap -mx-2 -mb-4">
      <div v-for="item in items" :key="item.playlistId" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 mb-4">
        <router-link :to="`/playlists/${item.playlistId}`">
          <playlist-card :playlist="item" />
        </router-link>    
      </div>      
    </div>
    <button @click="moveToPlaylistCreation" class="flex shadow bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold mt-5 py-2 px-4 rounded" type="button">
      Create a new Playlist
    </button>
  </div>
</template>

<script>
  import PlaylistCard from '@/components/Home/PlaylistCard'
  import LoadingBar from '@/components/LoadingBar'
  import { getUserPlaylists } from '@/api/playlists-api'

  export default {
    name: 'UserPlaylists',
    components: {
      PlaylistCard,
      LoadingBar
    },
    created() {
      this.fetchData()
    },
    data() {
      return {
        items: [],
        isLoading: false
      }
    }, 
    methods: {
      async fetchData() {
        this.isLoading = true
        
        const claims = await this.$auth.getIdTokenClaims()
        const idToken = claims.__raw

        const playlists = await getUserPlaylists(idToken)
        this.items = playlists

        this.isLoading = false
      },
      moveToPlaylistCreation() {
        this.$router.push('/playlists/new')
      }
    }
  }
</script>