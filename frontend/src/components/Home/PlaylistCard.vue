<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img class="w-full" :src="playList.thumbnailUrl" alt="Playlist Thumbnail">   
    <div class="flex px-4 py-4 items-center">
      <div class="flex-grow font-bold text-base">{{ playList.playListName }}</div>
      <button v-if="this.$store.state.userId === this.playList.ownerId" class="flex ml-4 shadow bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-2 rounded" type="button">Delete</button>
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
