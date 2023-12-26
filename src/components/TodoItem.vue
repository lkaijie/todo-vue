<template>
  <div>
    <h1>Title: {{ todo.title }}</h1>
    <p>Description: {{ todo.description }}</p>
    <p>Completed: {{ todo.completed }}</p>
    <!-- <p>{{}}</p> -->
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
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
