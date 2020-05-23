<template>
  <div>    
    <div class="flex mb-5">
      <h1 class="text-left font-bold text-2xl">{{ playlist && playlist.name }}</h1>      
    </div>
    <div class="flex flex-wrap -mx-2 -mb-4">
      <div v-for="(item) in playlist && playlist.videos" :key="item.url" class="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">      
        <video-card :video="item" />        
      </div>      
    </div>

    <loading-bar v-if="isLoading" class="mx-auto"/>
    
    <div v-if="this.$auth.user && playlist && this.$auth.user.sub === playlist.userId">
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

      <div class="flex mt-10">
        <button @click="toggleDeletionConfirmation" class="shadow bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">Delete Playlist</button>
        <div class="flex" v-if="showDeletionConfirmation">
          <div class="ml-2 bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative" role="alert">
            <strong class="font-bold">This action is permanent. Are you sure?</strong>
          </div>
          <button @click="deletePlaylist" class="ml-2 shadow bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">Yes</button>
          <button @click="toggleDeletionConfirmation" class="ml-2 shadow bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">Cancel</button>
        </div>
      </div>      
    </div>
  </div>
</template>

<script>
  import { PlaylistItem } from '../../models/PlaylistItem'
  import VideoCard from './VideoCard'
  import LoadingBar from '../LoadingBar'

  import { deletePlaylist } from '../../api/playlists-api'

  export default {
    name: "VideoList",
    components: {
      VideoCard,
      LoadingBar
    },
    props: {
      playlist: PlaylistItem
    },
    data() {
      return {
        showDeletionConfirmation: false,
        isLoading: false
      }      
    },
    methods: {
      async deletePlaylist() {
        this.isLoading = true

        const claims = await this.$auth.getIdTokenClaims()
        const idToken = claims.__raw

        const playlistId = this.$route.params.id
        await deletePlaylist(idToken, playlistId)

        this.isLoading = false
        this.$router.push({ path: "/playlists" })
      },
      toggleDeletionConfirmation() {
        this.showDeletionConfirmation = !this.showDeletionConfirmation
      }
    }
  }
</script>
