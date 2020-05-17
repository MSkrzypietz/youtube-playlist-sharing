<template>
  <div class="flex shadow-md">
    <div class="w-48 bg-cover rounded-l" style="background-image: url('/images/ExplanationCardImage.jpeg')">
    </div>
    <div class="w-full border-r border-b border-l-0 border-t border-gray-400 bg-white rounded-l-none rounded p-4 flex flex-col leading-normal">
      <div class="mb-8 h-48">
        <div class="text-left text-gray-900 font-bold text-base md:text-lg lg:text-xl mb-2">Create and share your youtube playlists with your friends</div>
        <ol class="list-decimal">
          <li class="ml-5 text-left text-gray-700 text-base">Create an account or use your google account to login in</li>
          <li class="ml-5 text-left text-gray-700 text-base">Create a playlist of your favorite videos</li>
          <li class="ml-5 text-left text-gray-700 text-base">Share the link to your playlist with your friends</li>
          <li class="ml-5 text-left text-gray-700 text-base">Your friends do not need an account to enjoy the playlist</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ExplanationCard"
  }
</script>