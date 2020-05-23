<template>
  <div>
    <video-list :playlist="playlist" />
    <loading-bar class="mx-auto" v-if="isLoading" />
  </div>
</template>

<script>
  import VideoList from '@/components/Playlist/VideoList'
  import LoadingBar from '@/components/LoadingBar'
  import { getPlaylist } from '../api/playlists-api'

  export default {
    name: 'Playlist',
    components: {
      VideoList,
      LoadingBar
    },
    data() {
      return {
        playlist: null,
        isLoading: true
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      async fetchData() {     
        this.isLoading = true
        
        const playlistId = this.$route.params.id
        const playlist = await getPlaylist(playlistId)
        this.playlist = playlist
        
        this.isLoading = false
      },
    }
  }
</script>