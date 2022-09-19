<script>
import Layout from "@/components/layouts/main.vue";
import appConfig from "@/../app.config";

import Widgets from "./widgets.vue";
import CheckupText from "./checkup-text.vue";

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
          text: "Medical Information",
        },
        {
          text: "Latest",
          active: true,
        },
      ],
    }
  },
  components: {
    Layout,
    Widgets,
    CheckupText
  },
}
</script>

<!-- TEMPLATE -->

<template>
  <Layout>

    <div class="row project-wrapper">
      <div class="col-xxl-8">
        <div class="row">

          <Widgets />

        </div>
        <div class="row">
          <div class="col-xl-12">
            <CheckupText />
          </div>
        </div>
      </div>

      <div class="col-xxl-4">
        <!-- Calendar -->
      </div>
    </div>
  </Layout>


</template>

