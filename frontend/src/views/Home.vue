<template>
  <div class="home mx-5 sm:mx-12 md:mx-24 lg:mx-64 my-5">
    <explanation-card class="mb-10" />
    <playlist-sample />
  </div>
</template>

<script>
  import ExplanationCard from '@/components/Home/ExplanationCard'
  import PlaylistSample from '@/components/Home/PlaylistSample'

  export default {
    name: 'home',
    components: {
      ExplanationCard,
      PlaylistSample
    }
  }
</script>
