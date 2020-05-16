<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img class="w-full" :src="playList.thumbnailUrl" alt="Playlist Thumbnail">
    <div class="px-6 py-4">
      <div class="font-bold text-xl">{{ playList.playListName }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PlaylistCard",
    props: {
      playList: {
        playListId: String,
        thumbnailUrl: String,
        playListName: String
      }
    }
  }
</script>
