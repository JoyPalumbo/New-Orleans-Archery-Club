<template>
  <v-app>
    <v-app-bar app color="#3CB371" dark>
      <h3>New Orleans Archery Club</h3>
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

    <v-footer v-bind="localAttrs" :padless="padless">
      <v-card
        flat
        height="95%"
        width="100%"
        color="#3CB371"
        dark
        class=" lighten-1 text-center"
      >
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
        <v-row>
          <v-col md="5">
            <h5>Address:</h5>
            <h5>Federal City Algiers Archery Range/Baseball Field</h5>
            <h5>2220 Constitution St New Orleans, LA 70114</h5>
          </v-col>
          <v-col md="5">
            <h5>Contact</h5>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} —
          <strong>New Orleans Archery Club</strong>
        </v-card-text>
      </v-card>
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
          url: "/",
        },
        {
          label: "About",
          url: "/about",
        },
        {
          label: "Range Rules",
          url: "/rangeRules",
        },
        {
          label: "Documents",
          url: "/documents",
        },
        {
          label: "Pictures",
          url: "/pictures",
        },
      ],
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    };
  },
  methods: {},
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
