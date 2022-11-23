<script>
import Layout from "@/components/view-related/layout/main.vue";
import {
  Widgets,
  Schedules,
  Chat,
} from "@/components/view-related/dashboard-components";

export default {
  components: {
    Layout,
    Widgets,
    Schedules,
    Chat,
  },
};
</script>

<template>
  <Layout>
    <div class="row project-wrapper">
      <div class="row">
        <div class="col-xxl-12">
          <Widgets />
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-6">
          <Chat />
        </div>
        <div class="col-xxl-6">
          <Schedules />
        </div>
      </div>
    </div>
  </Layout>
</template>
