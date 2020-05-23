<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img class="w-full" :src="playlist.videos[0].thumbnailUrl" alt="Playlist Thumbnail">   
    <div class="flex px-4 py-4 items-center">
      <div class="flex-grow font-bold text-base">{{ playlist.name }}</div>      
    </div>
  </div>
</template>

<script>
  import { PlaylistItem } from '../../models/PlaylistItem'

  export default {
    name: "PlaylistCard",
    props: {
      playlist: PlaylistItem
    }
  }
</script>
