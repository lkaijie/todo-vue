<template>
  <header>
    <nav class="container">
      <div class="branding">
        <img src="../assets/img.png" alt="lol" />
        <h1>Vue todos</h1>
      </div>
      <ul class="nav-routes">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </ul>
    </nav>
  </header>
</template>
<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<style scoped lang="scss">
.branding {
  display: flex;
  flex-direction: row;

  img {
    max-height: 100px;
    margin-right: 20px;
  }
}
nav {
  background: gray;
  display: flex;
  justify-content: space-between;
  .nav-routes {
    padding: 20px;
    gap: 20px;
    a {
      margin: 10px;
    }
  }
}
</style>
