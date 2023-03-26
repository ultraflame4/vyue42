import type {App} from "vue";
import {vstuck} from "@/directives/vstuck";
import {iratio} from "@/directives/iratio";

export {default as TestComponent} from "./components/TestComponent.vue"

export const vyue42 ={
    install: (app:App)=>{
        app.directive('stuck',vstuck)
        app.directive('iratio',iratio)
    }
}


