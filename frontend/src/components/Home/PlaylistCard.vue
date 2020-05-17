<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img class="w-full" :src="playList.thumbnailUrl" alt="Playlist Thumbnail">   
    <div class="flex px-4 py-4 items-center">
      <div class="flex-grow font-bold text-base">{{ playList.playListName }}</div>
      
    </div>
  </div>
</template>

<script>
  import { Playlist } from '@/models/Playlist'

  export default {
    name: "PlaylistCard",
    props: {
      playList: Playlist
    }
  }
</script>
