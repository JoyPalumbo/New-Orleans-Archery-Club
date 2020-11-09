<template>
  <container>
    <div class="gallery">
      <v-row>
        <!-- <v-col md="1"></v-col> -->

        <v-col>
          <v-flex justify-center>
            <gallery
              :images="images"
              :index="index"
              @close="index = null"
            ></gallery>
            <div
              class="image"
              v-for="(image, imageIndex) in images"
              :key="imageIndex"
              @click="index = imageIndex"
              :style="{
                backgroundImage: 'url(' + image + ')',
                width: '350px',
                height: '250px',
              }"
            ></div>
            <div
              class="image"
              v-for="(image, imageIndex) in longImages"
              :key="imageIndex"
              @click="index = imageIndex"
              :style="{
                backgroundImage: 'url(' + image + ')',
                width: '710px',
                height: '200px',
              }"
            ></div>
          </v-flex>
        </v-col>
      </v-row>
    </div>
  </container>
</template>

<script>
import VueGallery from "vue-gallery";
import img1 from "@/assets/archery1.jpeg";
import img2 from "@/assets/archery2.jpeg";
import img3 from "@/assets/archery3.jpeg";
import img4 from "@/assets/archery4.jpeg";
import img5 from "@/assets/archery5.jpeg";
import img6 from "@/assets/archery6.jpeg";
import img7 from "@/assets/archery12.jpg";
import img8 from "@/assets/archery8.jpeg";
import img9 from "@/assets/archery10.jpeg";
import img10 from "@/assets/archery11.jpeg";
import img11 from "@/assets/noarcheryclubbanner.jpg";
import img12 from "@/assets/archery13.jpg";

export default {
  data: function() {
    return {
      images: [img11, img1, img9, img4, img5, img6, img7, img8, img10, img12],
      longImages: [img2, img3],
      index: null,
    };
  },

  components: {
    gallery: VueGallery,
  },
};
</script>

<style scoped>
.gallery {
  position: relative;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
}

.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
}
</style>
