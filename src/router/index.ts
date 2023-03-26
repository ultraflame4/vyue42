import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

import Test from "@/views/Test.vue";
import StuckTest from "@/views/StuckTest.vue";
import ScrollRatioTest from "@/views/ScrollRatioTest.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/examples',
      children:[
        {path:"test",component:Test, name:"Test Component"},
        {path: "stuck",component: StuckTest, name: "V Stuck Test"},
        {path: "scrollratio",component: ScrollRatioTest, name: "Scroll Ratio Test"},

      ]
    }


  ]
})

export default router
