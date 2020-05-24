<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img class="w-full" :src="thumbnailUrl" alt="Empty playlist">   
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
    },
    computed: {
      thumbnailUrl: function () {
        if (this.playlist.thumbnailUrl) {
          return this.playlist.thumbnailUrl
        }

        return this.playlist.videos[0] && this.playlist.videos[0].thumbnailUrl
      }
    }
  }
</script>
