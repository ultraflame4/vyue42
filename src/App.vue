
<template>
  <h2>Routes</h2>
  <ul>
    <li v-for="r in routes">
      <a :href="r.path">{{r.name??r.path}}</a>
    </li>
  </ul>
  <hr/>
  <RouterView />
</template>

<script setup lang="ts">
import router from "@/router";

const routes = router.getRoutes()
</script>

<style scoped>
ul{
  font-size: 0.9rem;
  font-weight: 800;
  list-style-type: none;
  background: black;
  padding: 0.5rem 1rem;
  margin: 0;
  border-radius: 1rem;
}

h2{
  margin: 0;

}

a{
  color: white;
}

a:hover{
  color: #6ee7b7;
}

</style>
