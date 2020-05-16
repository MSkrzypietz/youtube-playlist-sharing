<template>
  <div class="mx-auto">
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/6">
        <label class="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-playlist-name">
          Playlist Name
        </label>
      </div>
      <div class="md:flex-grow">
        <input v-model="playlistName" class="w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-400" id="inline-playlist-name" type="text" placeholder="Enter a name for your playlist">
      </div>
    </div>
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/6">
        <label class="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-youtube-url">
          Youtube URL
        </label>
      </div>
      <div class="md:flex-grow">
        <input v-model="youtubeUrl" class="w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-400" id="inline-youtube-url" type="text" placeholder="Enter a URL to add a video to the playlist">
      </div>
      <button @click="handleAddVideoUrl" class="shadow bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold ml-2 py-2 px-4 rounded" type="button">
        Add
      </button>
    </div>
    <div v-for="(url, index) in playlistUrls" :key="url">
      <div class="md:flex mb-6 items-center">      
        <div class="md:w-1/6">
          <template v-if="index === 0">
            <label class="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-current-videos">
              Current videos
            </label>
          </template>
        </div>
        <div class="md:flex-grow">
          <div 
            class="w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-400" id="inline-current-videos" type="text" placeholder="Enter a URL to add a video to the playlist">
            {{ url }}
          </div>
        </div>
        <button @click="handleRemoveVideoUrl(index)" class="shadow bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold ml-2 py-2 px-4 rounded" type="button">
          Remove
        </button>
      </div>
    </div>
    <div class="md:flex md:items-center">     
      <div class="md:w-1/6" />
      <div>
        <button class="shadow bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
          Create Playlist
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'new-playlist-form',
    data() {
      return {
        playlistName: '',
        youtubeUrl: '',
        playlistUrls: [
          'https://www.youtube.com/watch?v=kic4EeXOfNw&t=1s',
          'https://www.youtube.com/watch?v=r8EU32IN9ts'
        ]
      };
    },
    methods: {
      handleAddVideoUrl() {
        this.playlistUrls.push(this.youtubeUrl)
        this.youtubeUrl = ''
      },
      handleRemoveVideoUrl(index) {
        this.playlistUrls.splice(index, 1)
      }
    } 
  }
</script>