<script>
import tableAdminVue from "./table-admin.vue";

import Layout from "@/components/view-related/layout/main.vue";
import { GenericButton } from "@/components/view-related/dashboard-components";

export default {
  components: {
    Layout,
    GenericButton,
    tableAdminVue,
  },
};
</script>

<template>
  <Layout>
    <div class="row project-wrapper dashboard-form">
      <div class="col-xxl-3">
        <div class="row pt-5">
          <!-- addOrgaVue -->
          <GenericButton
            link="/admin/manage-orgas"
            translate="t-addorga"
            icon="mdi-folder-account"
          />
        </div>
        <div class="row pt-5">
          <!-- modifOrgaVue -->
          <GenericButton
            link="/admin/manage-orgas"
            translate="t-modorga"
            icon="mdi-folder-edit"
          />
        </div>
        <div class="row pt-5">
          <!-- reportSuggestVue -->
          <GenericButton
            link="/admin/see-reports"
            translate="t-seereports"
            icon="mdi-folder-alert"
          />
        </div>
      </div>
      <div class="col-xxl-9">
        <tableAdminVue />
      </div>
    </div>
  </Layout>
</template>
