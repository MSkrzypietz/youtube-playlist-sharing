<template>
  <div class="new-playlist">
    <new-playlist-form />
  </div>
</template>

<script>
  import NewPlaylistForm from '@/components/NewPlaylist/NewPlaylistForm'

  export default {
    name: 'new-playlist',
    components: {
      NewPlaylistForm
    }
  }
</script>
