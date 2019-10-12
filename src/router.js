import Vue from "vue";
import Router from "vue-router";
//import Home from "./views/Home.vue";
import HelloWorld from "./components/HelloWorld";
import InputText from "./components/InputText";
import Counter from "./components/Counter";
import ShowHide from "./components/ShowHide";
import Select from "./components/Select";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/p0",
      name: "Page0",
      component: InputText
    },
    {
      path: "/p1",
      name: "Page1",
      component: Counter
    },
    {
      path: "/p2",
      name: "Show",
      component: ShowHide
    },
    {
      path: "/p3",
      name: "Select",
      component: Select
    }
  ]
});
