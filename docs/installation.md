# Notice
::: warning
All instructions and code in this documentation will be in **typescript**.
:::
<br>
<br>

# Installation

To get started, install this library with

```shell
npm i vyue42
```



## Default Styles
Components in this library comes with default styles. <br>
However they have to be imported manually due to limitations.

In the vue setup file (where your create app is.)

```ts
import {createApp} from 'vue'
import "vyue42/lib/index.css" // Import default component styles 

createApp(App)
    .mount('#yourRootContainer')

```

## Using directives
This library comes with a set of vue directives. <br>
To use them, we will have to register them with vue. 


In the vue setup file (where your create app is.)

```ts
import {createApp} from 'vue'
import "vyue42/lib/index.css" // Import default component styles 
import {vyue42} from "vyue42"; // import the plugin

createApp(App)
    .use(vyue42) // use the plugin
    .mount('#yourRootContainer')

```



# Quick Start
After installation this is what you need to setup the library

```ts
import {createApp} from 'vue'
import "vyue42/lib/index.css" // Import default component styles 
import {vyue42} from "vyue42"; // import the plugin

createApp(App)
    .use(vyue42) // use the plugin
    .mount('#yourRootContainer')

```
