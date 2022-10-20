<script>
import addDocVue from "./side-orga-widgets/add-doc.vue";
import modifDocVue from "./side-orga-widgets/modif-doc.vue";
import modifyOrgaVue from "./side-orga-widgets/modif-orga.vue";
import tableAdminVue from "./table-orga.vue";

import Layout from "@/components/view-related/layout/main.vue";

export default {
  components: {
    Layout,
    addDocVue,
    modifDocVue,
    modifyOrgaVue,
    tableAdminVue,
  },
}
</script>

<template>
  <Layout>
    <div class="row project-wrapper dashboard-form">
      <div class="col-xxl-9">
        <tableAdminVue />
      </div>
      <div class="col-xxl-3">
        <addDocVue />
        <modifDocVue />
        <modifyOrgaVue />
      </div>
    </div>
  </Layout>
</template>
