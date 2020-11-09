<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col md="11">
          <img height="135" src="../assets/archery9.jpeg" class="rounded" />
        </v-col>
      </v-row>
      <spacer class="ma-2"></spacer>
      <v-row>
        <v-col md="1"></v-col>
        <v-col md="10">
          <h3>
            The New Orleans Archery Club (NOAC) mission is promoting competitive
            archery for enjoyment and sportsmanship. A non-profit volunteer
            organization; membership fees and donations fund our operating
            expenses.
          </h3>
          <v-spacer class="ma-4"></v-spacer>
          <h3>
            As a member of USA Archery we offer the Junior Olympic Archery
            Development (JOAD) program and we all hold Level 3-NTS Coach
            Certification.
          </h3>
          <v-spacer class="ma-4"></v-spacer>
          <h3>
            We are located in Algiers at Federal City's archery range/baseball
            field and shoot Wednesday @ 4pm and Sunday @ 12:30pm.
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
