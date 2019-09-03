import Vue from 'vue'
import VueRouter from 'vue-router'

import Foo from "../components/Foo";
import Bar from "../components/Bar";
import Profile from "../components/Profile";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: '/profile/:username', name: 'profile', component: Profile },
        { path: '/foo', name: 'foo', component: Foo },
        { path: '/toFoo', redirect: {name: 'foo'} },
        { path: '/bar', name: 'bar', component: Bar }
      ]
});

export default router;