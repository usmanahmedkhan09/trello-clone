<template>
  <div class="Container">
    <div class="topbar">
      <topbar />
    </div>
    <div class="content">
      <nuxt />
    </div>
  </div>
</template>
<style>
.Container {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 2.5rem auto;
  height: 100vh;
  grid-template-areas: "topbar" "content";
}
.topbar {
  /* height: 2.5rem; */
  grid-area: topbar;
}

.sidebar {
  height: 100vh;
  grid-area: sidebar;
}

.content {
  grid-area: content;
}
</style>
