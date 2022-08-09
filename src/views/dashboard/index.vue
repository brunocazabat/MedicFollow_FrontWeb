<script>
import Layout from "../../components/layouts/main.vue";
import PageHeader from "../../components/frames/page-header";
import appConfig from "../../../app.config";

import Widgets from "./widget.vue";
import Schedules from "./schedule.vue";
import Chat from "./chat.vue";

export default {
  page: {
    title: "Projects",
    meta: [{ name: "description", content: appConfig.description }],
  },
  data() {
    return {
      title: "Projects",
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
    PageHeader,
    Widgets,
    Schedules,
    Chat
  },
}
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />

    <div class="row project-wrapper">
      <div class="col-xxl-8">
        <div class="row">

          <Widgets />

          <div class="col-xl-4">
          </div>

          <div class="col-xl-4">
          </div>
        </div>
        <div class="row">
          <div class="col-xl-12">
            <Chat />
          </div>
        </div>
      </div>

      <div class="col-xxl-4">
        <Schedules />
      </div>
    </div>
  </Layout>
</template>
