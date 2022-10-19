<script>
import addOrgaVue from "./side-admin-widgets/add-orga.vue";
import modifOrgaVue from "./side-admin-widgets/modif-orga.vue";
import reportSuggestVue from "./side-admin-widgets/reportsuggest.vue";
import tableAdminVue from "./table-admin.vue";

import Layout from "@/components/view-related/layout/main.vue";

export default {
  components: {
    Layout,
    addOrgaVue,
    modifOrgaVue,
    reportSuggestVue,
    tableAdminVue,
  },
}
</script>

<template>
  <Layout>
    <div class="row project-wrapper dashboard-form">
      <div class="col-xxl-3">
        <addOrgaVue />
        <modifOrgaVue />
        <reportSuggestVue />
      </div>
      <div class="col-xxl-9">
        <tableAdminVue />
      </div>
    </div>
  </Layout>
</template>
