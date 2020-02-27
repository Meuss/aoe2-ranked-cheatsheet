import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueTimeago from "vue-timeago";

Vue.config.productionTip = false;

Vue.use(VueTimeago, {
  name: "Timeago",
  locale: "en"
});

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
