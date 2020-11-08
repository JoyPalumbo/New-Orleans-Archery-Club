<template>
  <v-app>
    <v-app-bar app color="#98FB98" dark>
      <h2>New Orleans Archery Club</h2>
      <v-spacer></v-spacer>

      <v-btn
        v-for="link in links"
        :key="`${link.label}-header-link`"
        text
        rounded
        :to="link.url"
      >
        {{ link.label }}
      </v-btn>
    </v-app-bar>
    <v-content>
      <spacer class="ma-1"></spacer>
      <router-view></router-view>
      <spacer class="ma-1"></spacer>
    </v-content>
    <v-footer color="#CE93D8" padless>
      <v-layout justify-center wrap>
        <!-- <v-icon>mdi-facebook</v-icon>
        <v-icon>mdi-twitter</v-icon>
        <v-icon>email</v-icon> -->

        <!-- <v-spacer pr-1></v-spacer> -->
        <!-- <i class="fab fa-facebook-square"></i> -->
        <v-btn
          v-for="link in links"
          :key="`${link.label}-footer-link`"
          color="white"
          text
          rounded
          class="my-2"
          :to="link.url"
        >
          {{ link.label }}
        </v-btn>
        <v-flex blue-grey darken-2 grey py-4 text-center grey--text xs12>
          <!-- {{ new Date().getFullYear() }} -->
          <h5 class="font-weight-thin">
            — Copyright © 2020 Joy Palumbo
          </h5>
          <!-- <v-icon>mdi-email</v-icon> -->
          <!-- <i class="material-icons">face</i> -->
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import { mdiAccount } from "@mdi/js";
export default {
  name: "App",
  data() {
    return {
      svgPath: mdiAccount,
      links: [
        {
          label: "Home",
          url: "/"
        },

        {
          label: "RangeRules",
          url: "/rangeRules"
        },
        {
          label: "Documents",
          url: "/documents"
        },
        {
          label: "Pictures",
          url: "/pictures"
        },

        {
          label: "Links",
          url: "/links"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
