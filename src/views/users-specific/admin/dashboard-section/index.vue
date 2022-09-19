<script>
import Layout from "@/components/layouts/main.vue";
import appConfig from "@/../app.config";
import Widgets from "@/components/dashboard-components/widget.vue";
import Schedules from "@/components/dashboard-components/schedule.vue";
import Chat from "@/components/dashboard-components/chat.vue";

export default {
  page: {
    title: "Projects",
    meta: [{ name: "description", content: appConfig.description }],
  },
  components: {
    Layout,
    Widgets,
    Schedules,
    Chat
  },
}
</script>

<template>
  <Layout>
    <div class="row project-wrapper">
      <div class="col-xxl-3">
        <div class="row">
          <Widgets />
        </div>
      </div>
      <div class="col-xxl-4">
        <div class="row">
          <Chat />
        </div>
      </div>
      <div class="col-xxl-5">
        <Schedules />
      </div>
    </div>
  </Layout>
</template>
