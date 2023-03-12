# Notice
::: warning
All instructions and code in this documentation will be in **typescript**.
:::
<br>
<br>

# Installation
Make sure you have installed and [Vue.js](https://vuejs.org/guide/introduction.html) is set up.

To get started, install this library with:

```shell
npm i vyue42
```
## Context
Your vue app should have a main.ts file where you have your createApp.

It should look something like this:
```ts
import {createApp} from 'vue'

const app = createApp(App)
app.mount('#yourRootContainer');
...
```

## Default Styles
Components in this library comes with default styles. <br>
However they have to be imported manually due to limitations.

Add this to your imports to import the default styles. 

```ts
import "vyue42/lib/index.css" // Import default component styles
```

## Using directives
This library comes with a set of vue directives. <br>
To use them, we will have to register them with vue. 


```ts
import {vyue42} from "vyue42"; // import the plugin
app.use(vyue42) // use the plugin
```

## Finally
At the end, your create app / main.ts file should look something like this:
```ts
import {createApp} from 'vue'
import "vyue42/lib/index.css" // Import default component styles 
import {vyue42} from "vyue42"; // Import the plugin

const app = createApp(App)
app.use(vyue42) // use the plugin
app.mount('#yourRootContainer')
```
