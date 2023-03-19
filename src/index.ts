import type {App} from "vue";
import {vstuck} from "@/directives/vstuck";

export {default as TestComponent} from "./components/TestComponent.vue"

export const vyue42 ={
    install: (app:App)=>{
        app.directive('stuck',vstuck)
    }
}


