/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

import Vue           from 'vue';
import VueRouter     from 'vue-router';
Vue.use(VueRouter);

// Pages
import Home          from './pages/home.vue';
import About         from './pages/about.vue';
import Todo          from './pages/todo.vue';

export default new VueRouter({
    routes : [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/about",
            name: "about",
            component: About
        },
        {
            path: "/todo",
            name: "todo",
            component: Todo
        }
    ]
})