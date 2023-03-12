import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

import Test from "@/views/Test.vue";
import StuckTest from "@/views/StuckTest.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/examples',
      children:[
        {
          path: 'components',
          children:[
            {path:"test",component:Test}
          ]
        },

        {
          path: 'directives',
          children:[
            {path: "stuck",component: StuckTest}
          ]
        }
      ]
    }


  ]
})

export default router
