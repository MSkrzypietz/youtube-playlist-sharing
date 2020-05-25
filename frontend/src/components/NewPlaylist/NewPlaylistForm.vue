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
        <button @click="handleCreatePlaylist" class="shadow bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
          Create Playlist
        </button>
      </div>
    </div>
    <loading-bar v-if="isLoading" class="mx-auto" />
    <div v-if="playlistId !== ''" class="flex w-2/4 mt-10 mx-auto rounded shadow-md items-center bg-indigo-400 text-white text-sm font-bold px-4 py-3" role="alert">
      <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
      <p>Start sharing your link: localhost:8080/playlists/{{ playlistId }}</p>
    </div>
  </div>
</template>

<script>
  import Axios from 'axios'
  import LoadingBar from '@/components/LoadingBar'
  import { createPlaylist } from '../../api/playlists-api'

  export default {
    name: 'NewPlaylistForm',
    components: {
      LoadingBar
    },
    data() {
      return {
        isLoading: false,
        playlistId: '',
        playlistName: '',
        youtubeUrl: '',
        playlistUrls: []
      };
    },
    methods: {
      handleAddVideoUrl() {
        if (this.youtubeUrl.trim() === '') {
          return
        }

        this.playlistUrls.push(this.youtubeUrl)
        this.youtubeUrl = ''
      },
      handleRemoveVideoUrl(index) {
        this.playlistUrls.splice(index, 1)
      },
      async handleCreatePlaylist() {
        this.isLoading = true
        this.playlistId = ''

        const claims = await this.$auth.getIdTokenClaims()
        const idToken = claims.__raw

        const payload = {
          name: this.playlistName,
          videos: []
        }

        for (let i = 0; i < this.playlistUrls.length; i++) {
          const url = this.playlistUrls[i]
          const videoId = url.match("v=([a-zA-Z0-9_-]+)&?")[1]
          const videoData = await Axios.get('https://noembed.com/embed', { params: { url } })          
          payload.videos[i] = {
            ownerId: this.$auth.user.sub,
            caption: videoData.data.title,
            url,
            thumbnailUrl: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
          }          
        }
        
        const item = await createPlaylist(idToken, payload)
        this.playlistId = item.playlistId

        this.isLoading = false
      }
    } 
  }
</script>
