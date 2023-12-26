<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <p>{{ completed }}</p>
    <p>{{ id }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  description: String,
  completed: Boolean,
  id: String,
});

console.log(props);
</script>

<style scoped>
div {
  background-color: aliceblue;
}

h1 {
  color: red;
}

p {
  color: blue;
}

p:nth-child(3) {
  color: green;
}

p:nth-child(4) {
  color: purple;
}
</style>
