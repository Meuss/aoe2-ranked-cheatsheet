<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col>
            <h4>My last game</h4>
            <div>
              <p>
                {{ mydata.name }} <br />
                <timeago
                  :datetime="new Date(mydata.last_match.finished * 1000)"
                  :auto-update="60"
                ></timeago>
                <br />
                Victory? {{ mydata.last_match.victory }}
              </p>
              <div
                v-for="player in mydata.last_match.players"
                v-bind:key="player.profile_id"
              >
                <p>
                  {{ player.name }}<br />
                  Civ: {{ player.civ }}<br />
                  <span v-if="player.rating">Rating: {{ player.rating }}</span>
                  <span v-else>Unranked</span>
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
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
    mydata: null,
    url:
      "https://aoe2.net/api/player/lastmatch?game=aoe2de&steam_id=76561197983320063"
  }),

  created() {
    this.$vuetify.theme.dark = true;
  },
  methods: {
    fetchData() {
      fetch(this.url)
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data);
          this.mydata = data;
        });
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>
