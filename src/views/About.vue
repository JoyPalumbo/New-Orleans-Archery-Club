<template>
  <v-container>
    <h1 class="text-center">Meet our coaches and instructors!</h1>
    <spacer class="ma-3"></spacer>
    <v-row>
      <v-card class="mx-auto" max-width="360" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">
              Billy Appel
            </v-list-item-title>
            <v-list-item-subtitle>Coach</v-list-item-subtitle>
            <v-list-item-subtitle style="height:65px"
              >USA Archery Level3 NTS coach: Olympic Recurve and Compound Bow
              Disciplines in the JOAD/Adult age groups</v-list-item-subtitle
            >
          </v-list-item-content>

          <v-list-item-avatar size="120" color="grey">
            <v-img src="../assets/billy.jpg"></v-img
          ></v-list-item-avatar>
        </v-list-item>
      </v-card>

      <v-card class="mx-auto" max-width="360" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">
              George Alamilla
            </v-list-item-title>
            <v-list-item-subtitle>Coach </v-list-item-subtitle>
            <v-list-item-subtitle style="height:65px"
              >USA Archery Level3 NTS coach: Olympic Recurve and Compound Bow
              Disciplines in the JOAD/Adult age groups</v-list-item-subtitle
            >
            <!-- <v-list-item-subtitle>Email: </v-list-item-subtitle>
            <v-list-item-subtitle>Phone: </v-list-item-subtitle> -->
          </v-list-item-content>

          <v-list-item-avatar size="120" color="grey">
            <v-img src="../assets/george.jpg"></v-img>
          </v-list-item-avatar>
        </v-list-item>
      </v-card>
    </v-row>
    <spacer class="ma-2"></spacer>
    <v-row>
      <v-card class="mx-auto" max-width="360" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">
              Shawn Castrillo
            </v-list-item-title>
            <v-list-item-subtitle
              >USA Archery Level 1 Instructor</v-list-item-subtitle
            >
            <v-list-item-subtitle style="height:65px"
              >Shawn first picked up a bow in 2017. Native New Orleanian.
              Elementary School Teacher.</v-list-item-subtitle
            >
          </v-list-item-content>

          <v-list-item-avatar size="120" color="grey">
            <v-img src="../assets/ShawnCastrilloProfilePic.jpg"></v-img>
          </v-list-item-avatar>
        </v-list-item>
      <!-- </v-card>
      <v-card class="mx-auto" max-width="360" height="100%" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">
              Phil
            </v-list-item-title>
            <v-list-item-subtitle>Instructor</v-list-item-subtitle>
            <v-list-item-subtitle style="height:65px"
              >coming soon</v-list-item-subtitle
            >
          </v-list-item-content>

          <v-list-item-avatar size="120" color="grey"></v-list-item-avatar>
        </v-list-item>
      </v-card> -->
    </v-row>
    <spacer class="ma-3"></spacer>
    <v-row>
      <v-col>
        <h2 class="text-center">TO JOIN</h2>
        <spacer class="ma-3"></spacer>
        <h3 class="text-center">
          To become a member there is a $25 membership fee. There is a fee of $10 per session if using club equipment, $5 if you bring your own equipment, to help cover the expenses
          of the targets and club equipment.  New Orleans Archery Club is a non-profit club. To foster participation, scholarships for membership/session
          dues are awarded to those who cannot afford it, on a case by case basis.  Please communicate with the coaches.
        </h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2>Useful linkes</h2>
        <v-list-item
          href="https://www.usarchery.org/about/about-us"
          target="_blank"
          >USA Archery</v-list-item
        >

        <v-list-item
          href="https://www.usarchery.org/club-management/junior-olympic-archery-development-program-management"
          target="_blank"
          >Joad-Junior Olympic Archery Development Program</v-list-item
        >
        <v-list-item
          href="http://www.collegescholarships.org/scholarships/sports/archery.htm"
          target="_blank"
          >College Scholarships</v-list-item
        >
        <v-list-item
          href="http://www.gomidwayeagles.com/sport/0/9.php"
          target="_blank"
          >Midway University, KY Archery Program</v-list-item
        >
        <!-- <RouterLink :to="https://www.usarchery.org/about/about-us">USA Archery</RouterLink>
    <RouterLink :to="https://www.usarchery.org/club-management/junior-olympic-archery-development-program-management">Joad-Junior Olympic Archery Development Program</RouterLink>
     <RouterLink :to="http://www.collegescholarships.org/scholarships/sports/archery.htm">Collage Scholarships</RouterLink>
     <RouterLink :to="http://www.gomidwayeagles.com/sport/0/9.php">Midway University, KY Archery Program</RouterLink> -->
      </v-col>
    </v-row>
  </v-container>
</template>
