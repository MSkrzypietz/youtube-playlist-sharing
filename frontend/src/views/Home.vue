<template>
  <div class="home">
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
