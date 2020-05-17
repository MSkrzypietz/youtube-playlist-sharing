<template>
  <nav class="flex items-center justify-between flex-wrap bg-indigo-400 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">    
      <router-link to="/" class="font-semibold text-xl tracking-tight font-mono">Youtube Playlist Sharing</router-link>
    </div>
  
    <div class="flex justify-end">
      <button v-if="!this.$store.state.isLoggedIn" @click="handleLogin" class="inline-block text-md px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-indigo-500 hover:bg-white lg:mt-0">Login</button>
      <template v-if="this.$store.state.isLoggedIn">
        <router-link to="/playlists" class="inline-block text-md mr-4 px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-indigo-500 hover:bg-white lg:mt-0">Your playlists</router-link>
        <button @click="handleLogout" class="inline-block text-md px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-indigo-500 hover:bg-white lg:mt-0">Logout</button>
      </template>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "navbar",
    methods: {
      handleLogin: function () {
        this.$store.commit('setIsLoggedIn', true)
        this.$store.commit('setUserId', '1')
      },
      handleLogout: function () { 
        this.$store.commit('setIsLoggedIn', false)
        this.$store.commit('setUserId', '')
        this.$router.push({ path: '/' })
      }
    }
  };
</script>
