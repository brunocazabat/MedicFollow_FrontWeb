<script>
import addOrgaVue from "./add-orga.vue";
import modifOrgaVue from "./modif-orga.vue";
import reportSuggestVue from "./reportsuggest.vue";
import tableAdminVue from "./table-admin.vue";

import Layout from "@/components/layouts/main.vue";

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
