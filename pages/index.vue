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
<script>
export default {};
</script>
<style>
.Container {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 2.5rem auto;
  height: 100vh;
  grid-template-areas: "topbar" "content";
}
.topbar {
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
