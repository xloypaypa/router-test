import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: '/foo', component: () => import("@/components/Foo") },
        { path: '/bar', component: () => import("@/components/Bar") }
      ]
})

export default router;