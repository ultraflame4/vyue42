# Quick Start
This provides a quick start for those who hate reading.<br><br>
For more detailed explanations, [see installation](/installation) 

## Install

To get started, install this library with

```shell
npm i vyue42
```

## Template
Copy or modify this template into your create app file.

```ts
import {createApp} from 'vue'
import "vyue42/lib/index.css" // Import default component styles 
import {vyue42} from "vyue42"; // import the plugin

createApp(App)
    .use(vyue42) // use the plugin
    .mount('#yourRootContainer')

```
