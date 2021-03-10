<template>
  <div>
    <!-- <WebViewer /> -->

    <!-- <iframe src="src/assets/files/Individual_Member_Ins_Benefits.pdf"></iframe> -->
    <v-row>
      <v-col md="3"></v-col>
      <v-col md="2">
        <a
          href="https://docs.google.com/document/d/12EsAjEl9IDLnplFVWufyq8TMfgcFtlBDtPemoFwhcEg/edit?usp=sharing"
          target="_blank"
          >NOAC Release form</a
        >
      </v-col>
      <v-col md="4">
        <h4>:legal requirement in the event of an injury</h4>
      </v-col>
      <v-col md="3"></v-col>
    </v-row>
    <v-row>
      <v-col md="3"></v-col>
      <v-col md="2">
        <a
          href="https://docs.google.com/document/d/1T0PY3vj-yovl_wp-bqxatz_Eq1z1QQTguUz_PQzhvxg/edit?usp=sharing"
          target="_blank"
          >Waiver</a
        >
      </v-col>
      <v-col md="4">
        <h4>: NEW ORLEANS ARCHERY CLUB WAIVER AND RELEASE OF LIABILITY</h4>
      </v-col>
      <v-col md="3"></v-col>
    </v-row>
    <v-row>
      <v-col md="3"></v-col>
      <v-col md="2">
        <a
          href="http://noarcheryclub.com/documents/2012-InsuranceCoverage-8-8-12.pdf"
          target="_blank"
          >Club Insurance</a
        >
      </v-col>
      <v-col md="4">
        <h4>: general liability insurance as a member of USA Archery</h4>
      </v-col>
      <v-col md="3"></v-col>
    </v-row>
    <v-row>
      <v-col md="3"></v-col>
      <v-col md="2">
        <a
          href="https://docs.google.com/document/d/1WMjcjaHEon0swKCFpc2cdvqn6xUnIsbm3xdjWBS3z9A/edit?usp=sharing"
          target="_blank"
          >Individual Member Insurance</a
        >
      </v-col>
      <v-col md="4">
        <h4>: medical insurance to our NOCA members through USA Archery</h4>
      </v-col>
      <v-col md="3"></v-col>
    </v-row>

    <!-- <a href="src/assets/ARCHERY 2012-InsuranceCoverage-8-8-12.pdf" download> -->
    <!-- <pdf src="../assets/files/ARCHERYHOLDHARMLESS2015.pdf"></pdf> -->
  </div>

  <!-- <div>
    <script type="application/javascript" defer src="/js/pdfobject.js"></script>
    <script type="application/javascript" defer>
      PDFObject.embed("/pdf/sample-3pp.pdf", "#example1");
    </script>
  </div> -->
</template>

<script>
// import file from "../assets/files/ARCHERYHOLDHARMLESS2015.pdf";
// import pdf from "vue-pdf";
// import WebViewer from "../components/WebViewer";

export default {
  data() {
    return {
      // item: {
      //   title: "Upload Template",
      //   loc: file,
      // },
    };
  },

  methods: {
    // downloadPDF() {},
  }
  // components: { WebViewer },
};
</script>
<style>
.pdfobject-container {
  height: 30rem;
  border: 1rem solid rgba(0, 0, 0, 0.1);
}
</style>
