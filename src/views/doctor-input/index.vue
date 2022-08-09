<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";


export default {
  page: {
    title: "Doctor Input Summary",
    meta: [{ name: "description", content: appConfig.description }],
  },
  data() {
    return {
      title: "Doctor Input",
      items: [
        {
          text: "Doctor Input",
        },
        {
          text: "Summary",
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

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />

    <div class="row project-wrapper">
      <div class="col-xxl-8">
        <div class="row">

          <!-- <Widgets /> -->

        </div>
        <div class="row">
          <div class="col-xl-12">
            <!-- <CheckupText /> -->
          </div>
        </div>
      </div>

      <div class="col-xxl-4">
        <!-- Calendar -->
      </div>
    </div>
  </Layout>


</template>
