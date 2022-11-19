<script>
// General Imports
import Layout from "@/components/view-related/layout/main.vue";

// Components Imports
import ParticlesModule from "@/components/view-related/login-components/particles-module.vue";
import FileTableModule from "./fileTable.vue";

// Store Imports

export default {
  components: {
    Layout,
    ParticlesModule,
    FileTableModule,
  },
  data() {
    return {
      fileList: [
        {
          name: "ordonnance_sortie.pdf",
          size: "1.5 MB",
          uploadDate: "29 Sep, 2022",
          observationID: "16506",
        },
        {
          name: "medicaments.pdf",
          // generate random size, uploadDate and observationID
          size: Math.floor(Math.random() * 100) + " MB",
          uploadDate: Math.floor(Math.random() * 100) + " Sep, 2022",
          observationID: Math.floor(Math.random() * 100) + " 16506",
        },
      ],
    };
  },
  methods: {
    handleFileInformation(file) {
      // console log
      console.log("File Information (main): ", file);
    },
  },
  mounted() {},
};
</script>

<template>
  <Layout>
    <div class="auth-page-wrapper pt-5 mb-5">
      <ParticlesModule />
      <div class="container p-3">
        <div class="row">
          <div class="col-lg-12">
            <div class="col-xxl-9">
              <div class="card mt-xxl-n5">
                <div class="card-header">
                  <h4 class="card-title mb-4">{{ $t("t-downloads") }}</h4>
                  <FileTableModule
                    @file-info="handleFileInformation($event)"
                    :fileArray="fileList"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
