<template>
  <div>
    <div class="flex mb-5">
      <h1 class="text-left font-bold text-2xl">{{ playlist.caption }}</h1>      
    </div>
    <div class="flex flex-wrap -mx-2 -mb-4">
      <div v-for="(item) in playlist.videos" :key="item.url" class="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">      
        <video-card :video="item" />        
      </div>      
    </div>
    
    <div v-if="this.$store.state.userId === this.playlist.ownerId">
      <h1 class="text-left font-bold text-2xl mt-10">Rename your playlist</h1>
      <div class="flex w-3/5">
        <input class="flex-grow bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-400" id="inline-playlist-name" type="text" placeholder="Enter a new name">
        <button class="ml-2 shadow bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">Rename</button>
      </div>

      <h1 class="text-left font-bold text-2xl mt-10">Add a new video to your playlist</h1>
      <div class="flex w-3/5">
        <input class="flex-grow bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-400" id="inline-playlist-name" type="text" placeholder="Enter a new Youtube URL">
        <button class="ml-2 shadow bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">Add</button>
      </div>

      <h1 class="text-left font-bold text-2xl mt-10">Update the thumbnail of your playlist</h1>
      <div class="flex w-3/5">
        <input class="flex-grow bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-400" id="inline-playlist-name" type="file">
        <button class="ml-2 shadow bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">Update</button>
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
          ownerId: '1',
          caption: 'Katzen Playlist',
          videos: [
            {        
              ownerId: '1',
              caption: 'Test Caption',
              url: 'https://www.youtube.com/watch?v=kic4EeXOfNw&t=1s',
              thumbnailUrl: 'https://img.youtube.com/vi/kic4EeXOfNw/mqdefault.jpg'
            },
            {
              ownerId: '2',
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
