# v-stuck
This directive adds a stuck attribute when the element is stickied.

## Usage
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
</style>
```
See the [example](#example) for more details.

## Example
The example below shows 2 sticky elements, one that sticks the bottom and one that sticks to the top.

They also have different values for their top and bottom respectively.

Any css units can be used.

[Live Demo](https://stackblitz.com/edit/examples-vyue42-vstuck?file=src%2FApp.vue)

<<< @/../src/views/StuckTest.vue
