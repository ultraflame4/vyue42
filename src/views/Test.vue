<template>
<div>
  <h1>Hello world!</h1>
  <TestComponent/>
  <p v-for="i in 30">hey!</p>
  <div class="AmIStickied" v-stuck>
    Am I Stickied? (Top 100px)
  </div>
  <p v-for="i in 30">hey2!</p>
</div>
</template>

<script lang="ts" setup>

import TestComponent from "@/components/TestComponent.vue";
</script>

<style lang="scss" scoped>
.AmIStickied {
  padding: 1rem;
  background: #c44;
  color: white;
  font-weight: 700;
  position: sticky;
  top: 5rem;
}

.AmIStickied[stuck]{
  background: #7c7;
}

</style>
