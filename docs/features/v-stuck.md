# v-stuck
This directive adds a stuck attribute when the element is stickied.

This directive requires the element to be positioned sticky.<br>
It should work regardless of the element's top, left, bottom, right css attribute values.

## Basic Usage
Simply use it like any other directives. It does not take in any value.<br>
The element it is attached to needs to be already sticky.

```vue
<template>
  <div v-stuck id="amistuck">Am i stuck?</div>
</template>
<style scoped>
.amistuck{
  position: sticky;
  top: 0;
}

.amistuck[stuck]{ /** When stuck**/
  background: black;
}
</style>
```

See the [example](#example) for more details.

## Using with refs
You can also pass in a ref into the v-stuck to get see if the target element is stuck / stickied.

The ref object must have a stuck property.
```ts
const isStuck = ref({stuck:false}) 
```
See the [example](#example) for more details.

## Example
The example below shows 2 sticky elements, one that sticks the bottom and one that sticks to the top.

They also have different values for their top and bottom respectively.

Any css units can be used.

[Live Demo](https://stackblitz.com/edit/examples-vyue42-vstuck?file=src%2FApp.vue)

<<< @/../src/views/StuckTest.vue
