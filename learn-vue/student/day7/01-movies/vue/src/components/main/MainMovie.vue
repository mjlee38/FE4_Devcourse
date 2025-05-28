<script setup>
const props = defineProps({
  title: String,
  subTitle: String,
  type: String,
  movies: Array,
  loading: Boolean,
})
</script>
<template>
  <section class="movie">
    <h3 class="movie-category">{{ props.subTitle }}</h3>
    <h4 class="movie-subtext">{{ props.title }}<a href="#">더보기</a></h4>
    <div class="movie-list">
      <template v-if="props.loading">
        <div class="movie-list__item">
          <a href="#" class="skeleton-list-item ui0"> </a>
        </div>
      </template>
      <template v-else>
        <div v-for="movie in props.movies" :key="movie.id" class="movie-list__item">
          <a href="#">
            <figure>
              <img :src="`https://image.tmdb.org/t/p/w300/${movie.poster_path}`" alt="" />
            </figure>
            <div class="movie-list__txt">
              <!-- 동적 스타일링(클래스) 지정 -->
              <!-- p50 : 둥근 테두리를 50%만 채우게 (circular-var.css) -->
              <div
                class="progress-circle"
                :class="[
                  `p${Math.floor(movie.vote_average * 10)}`,
                  { over50: Math.floor(movie.vote_average * 10) > 50 },
                ]"
              >
                <span>{{ Math.floor(movie.vote_average * 10) }}%</span>
                <div class="left-half-clipper">
                  <div class="first50-bar"></div>
                  <div class="value-bar"></div>
                </div>
              </div>
              <strong class="movie-list__title">{{ movie.title }}</strong>
              <span class="release_date">{{ movie.release_date }}</span>
            </div>
          </a>
        </div>
      </template>
    </div>
  </section>
</template>
