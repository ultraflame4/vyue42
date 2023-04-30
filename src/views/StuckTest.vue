<template>
    <div class="container">
        <h1>Hello world!</h1>

        <p v-for="i in 30">hey!</p>
        <div class="AmIStickied" id="stuck0" v-stuck="topStickied">
            Am I Stickied? (Top 0) {{ topStickied }}
        </div>
        <div class="AmIStickied" id="stuck1" v-stuck="topStickied">
            Am I Stickied? (Top 5rem) {{ topStickied }}
        </div>
        <p v-for="i in 30">hey2!</p>
        <div class="AmIStickied" id="stuck2" v-stuck>
            Am I Stickied? (Bottom 300px)
        </div>
        <p v-for="i in 30">hey!</p>
    </div>
</template>

<script lang="ts" setup>

import {ref} from "vue";

const topStickied = ref({stuck: false})

</script>

<style scoped>

.container {
  height: 90vh;
  border: 6px solid black;
  overflow: auto;
  min-height: 0;
}
#stuck0 {
    top: 0;
}

#stuck1 {
  top: 5rem;
}

#stuck2 {
  bottom: 300px;
}

.AmIStickied {
  padding: 1rem;
  background: #c44;
  color: white;
  font-weight: 700;
  position: sticky;
}

.AmIStickied[stuck] {
  background: #7c7;
}

</style>
