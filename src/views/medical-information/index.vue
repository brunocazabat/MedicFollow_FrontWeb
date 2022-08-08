<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

export default {
  page: {
    title: "Medical Information",
    meta: [{ name: "description", content: appConfig.description }],
  },
  data() {
    return {
      title: "Medical Information",
      items: [
        {
          text: "Connected as",
        },
        {
          text: "Dev",
          active: true,
        },
      ],
    }
  },
  components: {
    Layout,
    PageHeader
  },
}
</script>

<!-- TEMPLATE -->

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />

    <div class="row project-wrapper">
      <div class="col-xxl-8">
        <div class="row">

          <!-- Widgets -->

          <div class="col-xl-4">
          </div>

          <div class="col-xl-4">
          </div>
        </div>
        <div class="row">
          <div class="col-xl-12">
            <!-- Chat -->
          </div>
        </div>
      </div>

      <div class="col-xxl-4">
        <!-- Calendar -->
      </div>
    </div>
  </Layout>


</template>

