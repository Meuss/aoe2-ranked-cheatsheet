<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-btn
        color="primary"
        :loading="gettingData ? true : false"
        @click="fetchLastGame()"
      >
        <span v-if="!dataLoaded">Get last game data</span>
        <span v-else>Refresh</span>
      </v-btn>
    </v-row>
    <v-row align="center" justify="center">
      <v-col v-if="dataLoaded">
        <h4>Last game</h4>
        <div>
          <p>
            <span class="caption">
              <timeago
                :datetime="new Date(mydata.last_match.finished * 1000)"
                :auto-update="60"
              ></timeago>
            </span>
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row align="center" justify="center" v-if="dataLoaded">
      <v-col
        v-for="player in mydata.last_match.players"
        v-bind:key="player.profile_id"
      >
        <p>
          {{ player.name }}<br />
          <span v-if="player.rating">Rating: {{ player.rating }}</span>
          <span v-else>Unranked</span>
          <br />
          {{ civs[player.civ].string }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    mydata: null,
    dataLoaded: false,
    gettingData: false,
    lastGameUrl:
      "https://cors-anywhere.herokuapp.com/https://aoe2.net/api/player/lastmatch?game=aoe2de&steam_id=76561197983320063"
  }),

  methods: {
    fetchLastGame() {
      this.gettingData = true;
      this.mydata = null;
      this.dataLoaded = false;
      fetch(this.lastGameUrl)
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.mydata = data;
          this.dataLoaded = true;
          this.gettingData = false;
        });
    }
  },

  computed: {
    civs() {
      return this.$store.state.civs;
    }
  }
};
</script>
