<template>
  <div>    
    <div class="max-w-sm rounded overflow-hidden shadow-lg">    
      <a :href="video.url"> 
        <img class="w-full" :src="video.thumbnailUrl" alt="Video Thumbnail">
      </a>
      <div class="flex px-4 py-4 items-center">
        <div class="flex-grow text-base">{{ video.caption }}</div>
        <button v-if="this.$store.state.userId === video.ownerId" class="flex ml-4 shadow bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-2 rounded" type="button">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "VideoCard",
    props: {
      video: {
        ownerId: String,
        caption: String,
        url: String,
        thumbnailUrl: String
      }
    }
  }
</script>
