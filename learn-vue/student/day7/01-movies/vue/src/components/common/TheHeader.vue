<script setup></script>
<template>
  <header class="header">
    <a href="#"><h1 class="header__logo">Wave</h1></a>
    <ul class="header__navi">
      <li>
        <a href="#">상영중</a>
      </li>
      <li>
        <a href="#">인기작</a>
      </li>
      <li>
        <a href="#">개봉예정</a>
      </li>
    </ul>
    <div class="header-search">
      <input type="text" class="header-search__input" placeholder="제목으로 찾아보세요." />
      <span class="material-symbols-outlined icon"> search </span>
    </div>
  </header>
  <nav class="navigator">
    <ul class="navigator-list">
      <li class="navigator-list__item">
        <img src="@/assets/icons/home.png" alt="" class="navigator-list__icon" />
        <strong class="navigator-list__txt">메인</strong>
      </li>
      <li class="navigator-list__item">
        <img src="@/assets/icons/live.png" alt="" class="navigator-list__icon" />
        <strong class="navigator-list__txt">상영중</strong>
      </li>
      <li class="navigator-list__item">
        <img src="@/assets/icons/popluar.png" alt="" class="navigator-list__icon" />
        <strong class="navigator-list__txt">인기작</strong>
      </li>

      <li class="navigator-list__item">
        <img src="@/assets/icons/video.png" alt="" class="navigator-list__icon" />
        <strong class="navigator-list__txt">개봉예정</strong>
      </li>
      <li class="navigator-list__item">
        <img src="@/assets/icons/search.png" alt="" class="navigator-list__icon" />
        <strong class="navigator-list__txt">검색</strong>
      </li>
    </ul>
  </nav>
  <section class="search-box">
    <div class="search-input">
      <div class="search-wrap">
        <button>x</button>
        <input type="text" placeholder="영화 제목을 입력하세요" autocomplete="off" />
        <span class="material-symbols-outlined icon"> search </span>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
