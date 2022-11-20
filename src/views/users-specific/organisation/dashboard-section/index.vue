<script>
import Layout from "@/components/view-related/layout/main.vue";
import { GenericButton } from "@/components/view-related/dashboard-components";
import tableAdminVue from "./table-orga.vue";

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
      <div class="col-xxl-9">
        <tableAdminVue />
      </div>
      <div class="col-xxl-3">
        <div class="row pt-5">
          <!-- addDocVue -->
          <GenericButton
            link="/organisation/manage-doctors"
            translate="t-adddocpers"
            icon="mdi-folder-account"
          />
        </div>
        <div class="row pt-5">
          <!-- modifDocVue -->
          <GenericButton
            link="/organisation/manage-doctors"
            translate="t-moddocpers"
            icon="mdi-folder-edit"
          />
        </div>
        <div class="row pt-5">
          <!-- modifyOrgaVue -->
          <GenericButton
            link="/organisation/settings"
            translate="t-modifmyorga"
            icon="mdi-cog-outline"
          />
        </div>
      </div>
    </div>
  </Layout>
</template>
