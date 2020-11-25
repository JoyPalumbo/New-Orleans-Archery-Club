<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col>
          <h1 class="text-center">New Orleans Archery Club</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="12" justify="center" align="center">
          <img height="140" src="../assets/archery9.jpeg" class="rounded " />
        </v-col>
      </v-row>
      <!-- <spacer class="ma-2"></spacer> -->
      <v-row>
        <!-- <v-col md="1"></v-col> -->
        <v-col class="text-center">
          <h2>How to Join</h2>
          <v-spacer class="ma-4"></v-spacer>
          <h3>
            The New Orleans Archery Club is open to anyone, of any age, who has
            an interest in learning archery! The club has equipment available
            for use or you can bring your own equipment. We shoot on Sundays at
            12:30pm. Please read the Range Rules and print and sign the consent
            form before coming your first time.
          </h3>
          <v-spacer class="ma-4"></v-spacer>
          <h3 class="blue-grey--text pa-4 text-center">
            The New Orleans Archery Club (NOAC) mission is promoting competitive
            archery for enjoyment and sportsmanship. A non-profit volunteer
            organization; membership fees and donations fund our operating
            expenses.
          </h3>
          <v-spacer class="ma-4"></v-spacer>
          <h3 class="blue-grey--text pa-4 text-center">
            As a member of USA Archery we offer the Junior Olympic Archery
            Development (JOAD) program. Check out more information under the
            JOAD section.
          </h3>
          <v-spacer class="ma-4"></v-spacer>
          <h3>
            We are located in Algiers at Federal City's archery range/baseball
            field and shoot Sunday at 12:30pm.
          </h3>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  components: {
    // HelloWorld
  }
};
</script>

<style scoped>
h1 {
  font-size: 60px;
  color: #343643;
}
</style>
