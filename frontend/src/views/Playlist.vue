<template>
  <div>
    <video-list :playlist="playlist" />
  </div>
</template>

<script>
  import VideoList from '@/components/Playlist/VideoList'
  import { getPlaylist } from '../api/playlists-api'

  export default {
    name: 'Playlist',
    components: {
      VideoList
    },
    data() {
      return {
        playlist: null
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      async fetchData() {        
        const playlistId = this.$route.params.id
        const playlist = await getPlaylist(playlistId)
        this.playlist = playlist
        console.log(this.playlist)
      },
    }
  }
</script>