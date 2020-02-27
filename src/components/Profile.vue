<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col>
        <h6>Profile</h6>
        <v-card class="mx-auto" max-width="300">
          <v-img
            class="white--text align-end"
            height="200px"
            src="@/assets/aoe2-icon.png"
          >
            <v-card-title>{{ profileObj.name }}</v-card-title>
          </v-img>

          <v-card-subtitle class="">
            Rank: {{ profileObj.elo }}
          </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>Ladder: #{{ profileObj.rank }}</div>

            <div>Games played: {{ profileObj.gamesPlayed }}</div>
            <div>{{ profileObj.winrate }} winrate</div>
            <div>Current streak: {{ profileObj.streak }}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="primary" text>
              profile on aoe.net >
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    drawer: null
  }),

  methods: {},

  computed: {
    ...mapState(["profileText", "profileObj"])
  }
};
</script>
