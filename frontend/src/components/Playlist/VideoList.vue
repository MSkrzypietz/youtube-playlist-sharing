<template>
  <div>
    <h1 class="text-left font-bold text-2xl mb-5 ">{{ playlist.caption }}</h1>
    <div class="flex flex-wrap -mx-2 -mb-4">
      <div v-for="(item) in playlist.videos" :key="item.url" class="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">      
        <video-card :video="item" />        
      </div>      
    </div>
  </div>
</template>

<script>
  import VideoCard from './VideoCard'

  export default {
    name: "VideoList",
    components: {
      VideoCard
    },
    data() {
      return {
        playlist: {
          id: '1',
          caption: 'Katzen Playlist',
          videos: [
            {              
              caption: 'Test Caption',
              url: 'https://www.youtube.com/watch?v=kic4EeXOfNw&t=1s',
              thumbnailUrl: 'https://img.youtube.com/vi/kic4EeXOfNw/mqdefault.jpg'
            },
            {
              caption: 'Other Test Caption',
              url: 'https://www.youtube.com/watch?v=os1RMpV8udg',
              thumbnailUrl: 'https://img.youtube.com/vi/os1RMpV8udg/mqdefault.jpg'
            }      
          ]
        }
      };
    }
  }
</script>
