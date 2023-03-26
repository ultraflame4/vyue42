# v-iratio

This directive allows you to easily create scroll animations or lazy loaded resources

## Basic Usage

::: tip
The example below is **really really** basic, as is intended to show you how it is used. <br/>
See [Advanced Example](#Advanced-Example) for a better idea of what can be done.
:::

A very basic example that only shows how to set it up.
```vue

<template>
  <div v-iratio="iratioRef">
    Hello World
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import type {IRatioOptions} from "@/directives/iratio";

const iratioRef = ref<IRatioOptions>({
isVisible: false,
ratio: 0,
exit: false,
invert: true
})

</script>

<style scoped>

</style>

```

## CSS Property

This directive also provides a css property, `--iratio`,for easy styling in css.

```vue

<template>
  <div v-iratio="iratioRef">
    Hello World
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import type {IRatioOptions} from "@/directives/iratio";

const iratioRef = ref<IRatioOptions>({
  isVisible: false,
  ratio: 0,
  exit: true,
  invert: true
})

</script>

<style scoped>
div {
  /*Rotating the element using the iratio css property provided by the directive*/
  transform: rotateY(calc(var(--iratio) * 180deg));
}
</style>

```
This property can also be used in child elements. See [Advanced Example](#Advanced-Example).
## Attributes
These are the following attributes / options for IRatioOptions

| Name       | Type                     | Description                                                                                                                                                                                                 | Required | Default                |
|:-----------|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------|:-----------------------|
| ratio      | number                   | Visibility / intersection ratio of element.<br/>                                                                                                                                                            | true     | -                      |
| isVisible  | boolean                  | Whether the element is visible.                                                                                                                                                                             | true     |                        |
| exit       | boolean                  | Changes the ratio range from -1 to 1 instead of -1/1 to 0 (-1 to 0 during entry and 0 to 1 during exit)<br> Allows for continuous rotation when scrolling.                                                  | false    | true                   |
| invert     | boolean                  | Whether to invert the ratio. if true, ratio is 0 when fully visible and 1/-1 when not visible. Useful for css styling                                                                                       | false    | true                   |
| thresholds | Array\<number> OR number | The thresholds before the ratios are updated and the callbacks are called.<br/> See <a href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#threshold"> here </a> for more info | false    | [0.00,0.01,...,0.99,1] |

## Advanced Example
[Live Demo](https://stackblitz.com/edit/examples-vyue42-viratio?file=src/App.vue)

<<< @/../src/views/ScrollRatioTest.vue
