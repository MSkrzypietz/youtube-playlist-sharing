<template>
  <div class="">
    <h1 class="text-left font-bold text-2xl mb-5 ">Check out some playlists of other users!</h1>
    <div class="flex flex-wrap -mx-2 -mb-4">
      <div v-for="(item, index) in items" :key="item.playListId" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 mb-4">
        <router-link :to="`/playlist/${item.playListId}`">
          <playlist-card :playList="items[index]" />
        </router-link>
      </div>      
    </div>
  </div>
</template>

<script>
  import PlaylistCard from './PlaylistCard'

  export default {
    name: "PlaylistSample",
    components: {
      PlaylistCard
    },
    data() {
      return {
        items: [
          {
            playListId: "1",
            thumbnailUrl: "https://img.youtube.com/vi/os1RMpV8udg/mqdefault.jpg",
            playListName: "Katzen Playlist"
          },
          {
            playListId: "2",
            thumbnailUrl: "https://img.youtube.com/vi/kic4EeXOfNw/mqdefault.jpg",
            playListName: "Maus Playlist"
          },
          {
            playListId: "3",
            thumbnailUrl: "https://img.youtube.com/vi/Pwebo7J5mio/mqdefault.jpg",
            playListName: "Hunde Playlist"
          },
          {
            playListId: "4",
            thumbnailUrl: "https://img.youtube.com/vi/Pwebo7J5mio/mqdefault.jpg",
            playListName: "Test Playlist"
          },
          {
            playListId: "5",
            thumbnailUrl: "https://img.youtube.com/vi/Pwebo7J5mio/mqdefault.jpg",
            playListName: "dfsdf Playlist"
          }
        ]
      };
    }, 
  }
</script>