<script>
import Layout from "@/components/layouts/main.vue";
import Widgets from "@/components/dashboard-components/widget.vue";
import Schedules from "@/components/dashboard-components/schedule.vue";
import Chat from "@/components/dashboard-components/chat.vue";

export default {
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
