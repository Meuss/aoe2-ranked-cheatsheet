import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueTimeago from "vue-timeago";
import VueRouter from "vue-router";
import store from "./store/store";

import LastGame from "./components/LastGame";
import Profile from "./components/Profile";

Vue.config.productionTip = false;

Vue.use(VueTimeago, {
  name: "Timeago",
  locale: "en"
});

Vue.use(VueRouter);

const routes = [
  { path: "/lastgame", component: LastGame },
  { path: "/profile", component: Profile }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount("#app");
