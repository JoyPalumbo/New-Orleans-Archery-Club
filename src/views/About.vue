<template>
  <v-container>
    <h1 class="text-center">Meet our coaches and instructors!</h1>
    <spacer class="ma-3"></spacer>
    <v-row>
      <v-card class="mx-auto" max-width="344" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">
              George Alamilla
            </v-list-item-title>
            <v-list-item-subtitle>Coach</v-list-item-subtitle>
            <v-list-item-subtitle
              >A little bit about Name etc</v-list-item-subtitle
            >
            <v-list-item-subtitle>Email: </v-list-item-subtitle>
            <v-list-item-subtitle>Phone: </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar size="120" color="grey"></v-list-item-avatar>
        </v-list-item>
      </v-card>
      <v-card class="mx-auto" max-width="344" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">
              Billy
            </v-list-item-title>
            <v-list-item-subtitle>Coach</v-list-item-subtitle>
            <v-list-item-subtitle>A little bit about Name</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar size="120" color="grey"></v-list-item-avatar>
        </v-list-item>
      </v-card>
    </v-row>
    <spacer class="ma-2"></spacer>
    <v-row>
      <v-card class="mx-auto" max-width="344" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">
              Shawn Castrillo
            </v-list-item-title>
            <v-list-item-subtitle
              >USA Archery Level 1 Instructor</v-list-item-subtitle
            >
            <v-list-item-subtitle
              >Shawn first picked up a bow in 2017. Native New Orleanian.
              Elementary School Teacher.</v-list-item-subtitle
            >
          </v-list-item-content>

          <v-list-item-avatar size="120" color="grey">
            <v-img src="../assets/ShawnCastrilloProfilePic.jpg"></v-img>
          </v-list-item-avatar>
        </v-list-item>
      </v-card>
      <v-card class="mx-auto" max-width="344" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">
              Phil
            </v-list-item-title>
            <v-list-item-subtitle>Instructor</v-list-item-subtitle>
            <v-list-item-subtitle>coming soon</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar size="120" color="grey"></v-list-item-avatar>
        </v-list-item>
      </v-card>
    </v-row>
    <v-row>
    <v-col>
    <h2> TO JOIN </h2>
    <h1>To become a member there is a $20 membership fee.  The first time coming, it is free to try it out to see if you enjoy archery. After your first time it will be 
    $10 per session to help cover the expenses of the equipment.
    </h1>
    </v-col>
    </v-row>
      <v-row>
    <v-col>
    <h2> Useful linkes</h2>
    <RouterLink :to="https://www.usarchery.org/about/about-us">USA Archery</RouterLink>
    <RouterLink :to="https://www.usarchery.org/club-management/junior-olympic-archery-development-program-management">Joad-Junior Olympic Archery Development Program</RouterLink>
     <RouterLink :to="http://www.collegescholarships.org/scholarships/sports/archery.htm">Collage Scholarships</RouterLink>
     <RouterLink :to="http://www.gomidwayeagles.com/sport/0/9.php">Midway University, KY Archery Program</RouterLink>
    </v-col>
    </v-row>
  </v-container>
</template>
