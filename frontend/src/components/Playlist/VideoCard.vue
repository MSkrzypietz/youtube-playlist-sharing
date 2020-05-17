<template>
  <div>
    <a :href="video.url"> 
      <div class="max-w-sm rounded overflow-hidden shadow-lg">    
        <img class="w-full" :src="video.thumbnailUrl" alt="Video Thumbnail">
        <div class="px-6 py-4">
          <div class="text-base">{{ video.caption }}</div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    name: "VideoCard",
    props: {
      video: {
        caption: String,
        url: String,
        thumbnailUrl: String
      }
    }
  }
</script>
