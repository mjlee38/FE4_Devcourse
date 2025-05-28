<script setup>
import MainBanner from '@/components/main/MainBanner.vue'
import MainMovie from '@/components/main/MainMovie.vue'
import { useMovieStore } from '@/stores/movie'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const movieStore = useMovieStore()
const {
  moviePlayingList,
  moviePlayingListLoading,
  moviePopularList,
  moviePopularListLoading,
  movieUpcomingList,
  movieUpcomingListLoading,
  movieTopRatedList,
  movieTopRatedListLoading,
} = storeToRefs(movieStore)
onMounted(() => {
  movieStore.getMoviePlaying()
  movieStore.getMoviePopular()
  movieStore.getMovieUpcoming()
  movieStore.getMovieTopRated()
})
</script>
<template>
  <MainBanner />
  <MainMovie />
</template>
<style scoped></style>
