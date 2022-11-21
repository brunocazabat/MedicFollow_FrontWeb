<script>
import Layout from "@/components/view-related/layout/main.vue";

import Widgets from "./widgets.vue";
import CheckupText from "./checkup-text.vue";

export default {
  components: {
    Layout,
    Widgets,
    CheckupText,
  },
};
</script>

<!-- TEMPLATE -->

<template>
  <Layout>
    <div class="dashboard-form">
      <div class="row">
        <Widgets />
      </div>
      <div class="row">
        <CheckupText />
      </div>
    </div>
  </Layout>
</template>
