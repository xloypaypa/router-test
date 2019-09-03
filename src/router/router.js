import Vue from 'vue'
import VueRouter from 'vue-router'

import Foo from "../components/Foo";
import Bar from "../components/Bar";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: '/foo', component: Foo },
        { path: '/toFoo', redirect: '/foo' },
        { path: '/bar', component: Bar }
      ]
})

export default router;