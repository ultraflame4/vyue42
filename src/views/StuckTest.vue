<template>
<div>
  <h1>Hello world!</h1>

  <p v-for="i in 30">hey!</p>
  <div class="AmIStickied" id="stuck1" v-stuck>
    Am I Stickied? (Top 100px)
  </div>
  <p v-for="i in 30">hey2!</p>
  <div class="AmIStickied" id="stuck2" v-stuck>
    Am I Stickied? (Bottom 100px)
  </div>
  <p v-for="i in 30">hey!</p>
</div>
</template>

<script lang="ts" setup>

import TestComponent from "@/components/TestComponent.vue";
</script>

<style lang="scss" scoped>
#stuck1{
  top: 5rem;
}

#stuck2{
  bottom: 300px;
}

.AmIStickied {
  padding: 1rem;
  background: #c44;
  color: white;
  font-weight: 700;
  position: sticky;
}

.AmIStickied[stuck]{
  background: #7c7;
}

</style>
