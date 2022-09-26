<script>
import Layout from "@/components/layouts/main.vue";

import Widgets from "./widgets.vue";
import CheckupText from "./checkup-text.vue";

export default {
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

