<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item
          v-for="item in links"
          :key="item.index"
          link
          :to="item.link"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="d-flex">
        <img src="./assets/aoe2-icon.png" alt="aoe2 icon" class="aoe2_icon" />
        Aoe 2 Ranked Cheatsheet
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer app>
      <span
        ><a href="https://github.com/Meuss">Meuss</a> &copy;
        {{ new Date().getFullYear() }}</span
      >
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },

  data: () => ({
    drawer: null,
    links: [
      { icon: "mdi-view-dashboard", text: "Last game", link: "/lastgame" },
      { icon: "mdi-trophy", text: "Profile", link: "/profile" },
      { icon: "mdi-settings", text: "Settings", link: "/" }
    ]
  }),

  created() {
    this.$vuetify.theme.dark = true;
  },
  mounted() {
    this.$store.dispatch("setupData");
  },
  methods: {}
};
</script>

<style lang="scss">
.aoe2_icon {
  width: 30px;
  margin-right: 15px;
}
</style>
