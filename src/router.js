import { createRouter, createWebHashHistory } from "vue-router";

import AddittionView from "./views/AddittionView.vue";

import SubstationView from "./views/SubstrationView.vue";

import MultiplikationView from "./views/MultiplicationView.vue";

import DivisionView from "./views/DivisionView.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: AddittionView,

      path: "/additioner",
    },
    {
      component: SubstationView,

      path: "/subtraktioner",
    },
    {
      component: MultiplikationView,

      path: "/multiplikationer",
    },
    {
      component: DivisionView,

      path: "/divisioner",
    },
  ],
});
