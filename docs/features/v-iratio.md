# v-iratio

This directive allows you to easily create scroll animations or lazy loaded resources

## Basic Usage

To start off, we need to create an iRatioObject.

```ts
import {iRatioObject} from "vyue42";

const iratio = new iRatioObject({
    exit: false,
    invert: true
})
```

The object will be used to:

1. [Configure the iratio directive](#configuring-iratio)
2. [Pass data back for us to use](#using-data-from-iratioobject).

We then assign the object to the directive like so:

```vue

<template>
  <div v-iratio="iratio">
    Hello World
  </div>
</template>

<script lang="ts" setup>
import {iRatioObject} from "vyue42";

const iratio = new iRatioObject({
  exit: false,
  invert: true
})
</script>
```

## Configuring iratio

The iRatioObject takes in 2 parameters as defined below

| Name       | Type                    | Description                                                                                                                                                                  | Default value |
|------------|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| exit       | boolean                 | When true, the ratio ranges<br/>from 1 to -1 instead of from 1 to 0                                                                                                          | true          |
| invert     | boolean                 | Normally, when fully visible, the ratio is 1,<br/> this inverts it so that it is 0.<br/>Useful for [css styling](#css-property).                                             | true          |
| thresholds | number[] <br/>or number | The thresholds for the internal intersection observer. See [thresholds](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#threshold) for more info. |               |

## Using data from iRatioObject

The iRatioObject has some attributes with useful data.

All are reactive using [refs](https://vuejs.org/api/reactivity-core.html#ref) (except the config attribute)

| Name                          | Type          | Description                                                                            |
|-------------------------------|---------------|----------------------------------------------------------------------------------------|
| ratio                         | Ref\<number>  | The intersection ratio. Ranges from 0 to 1 (or 1 to -1 if [exit](#configuring-iratio)) |
| isVisible                     | Ref\<boolean> | Whether the element is visible in the viewport.                                        |
| [config](#configuring-iratio) | IRatioConfig  | The configuration for this iRatioObject                                                |

## CSS Property

This directive also provides a css property, `--iratio`,for easy styling in css.

```vue

<template>
  <div v-iratio="iratioRef">
    Hello World
  </div>
</template>

<script lang="ts" setup>
import {iRatioObject} from 'vyue42';

const iratioRef = new iRatioObject({
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

## Advanced Example

[Live Demo](https://stackblitz.com/edit/examples-vyue42-viratio?file=src/App.vue)

