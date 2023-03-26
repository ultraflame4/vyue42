<template>
  <p v-for="i in 30">hey!</p>

  <div id="container" v-iratio="iratioRef">
    <div id="test" >
      Hello World

      <p>
        Visible: {{iratioRef.isVisible}}
      </p>
      <p>
        Ratio: {{iratioRef.ratio.toFixed(2)}}
      </p>
      <p>
        Exit: {{iratioRef.exit}}
      </p>
      <p>
        Invert: {{iratioRef.invert}}
      </p>
    </div>
  </div>



  <div id="container" v-iratio="iratioRef2">
    <div id="test" >
      Hello World 2

      <p>
        Visible: {{iratioRef2.isVisible}}
      </p>
      <p>
        Ratio: {{iratioRef2.ratio.toFixed(2)}}
      </p>
      <p>
        Exit: {{iratioRef2.exit}}
      </p>
      <p>
        Invert: {{iratioRef2.invert}}
      </p>

    </div>
  </div>


  <p v-for="i in 35">hey!</p>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import type {IRatioOptions} from "@/directives/iratio";

const iratioRef = ref<IRatioOptions>({
  isVisible: false,
  ratio: 0,
  exit:false,
  invert:true
})

const iratioRef2 = ref<IRatioOptions>({
  isVisible: false,
  ratio: 0,
  exit:true,
  invert:false
})

</script>

<style scoped>

p {
  font-weight: 600;
  font-size: 0.9rem;

}

#container{
  --iratio:0;
  height: 100vh;
  display: flex;
  border: 1px dashed black;
  border-radius: 1.25rem;
  background: #8bde9d;
  align-items: center;
  justify-content: center;
}

#test{
  /*Styling stuff*/
  height: 600px;
  aspect-ratio: 6/9;
  display: flex;
  border: 3px dashed black;
  border-radius: 1.25rem;
  background: #8bde9d;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: 2px;


  /*Rotating the element using the iratio css property provided by the directive*/
  transform: rotateZ(calc(var(--iratio)  * 180deg));
}
</style>
