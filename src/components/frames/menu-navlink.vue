<script>
import store from "@/components/state/store";

import NavLinkAdmin from "@/components/frames/user-specific/navlink_admin.vue";
import NavLinkOrganisation from "@/components/frames/user-specific/navlink_organisation.vue";
import NavLinkDocteur from "@/components/frames/user-specific/navlink_docteur.vue";
import NavLinkPersonnel from "@/components/frames/user-specific/navlink_personnel.vue";
import NavLinkPatient from "@/components/frames/user-specific/navlink_patient.vue";
import NavLinkConfiance from "@/components/frames/user-specific/navlink_confiance.vue";
import NavLinkProche from "@/components/frames/user-specific/navlink_proche.vue";


export default {
  name: "menunavlink",
  components: {
    NavLinkAdmin,
    NavLinkOrganisation,
    NavLinkDocteur,
    NavLinkPersonnel,
    NavLinkPatient,
    NavLinkConfiance,
    NavLinkProche,
  },
  methods: {
    activatemenu(type) {
      return store.getters["auth/getuserUI"] == type;
    },
  },
};
</script>

<template>
  <div class="container-fluid" v-if="activatemenu('admin')">
    <NavLinkAdmin />
  </div>
  <div class="container-fluid" v-if="activatemenu('organisation')">
    <NavLinkOrganisation />
  </div>
  <div class="container-fluid" v-if="activatemenu('docteur')">
    <NavLinkDocteur />
  </div>
  <div class="container-fluid" v-if="activatemenu('personnel')">
    <NavLinkPersonnel />
  </div>
  <div class="container-fluid" v-if="activatemenu('patient')">
    <NavLinkPatient />
  </div>
  <div class="container-fluid" v-if="activatemenu('confiance')">
    <NavLinkConfiance />
  </div>
  <div class="container-fluid" v-if="activatemenu('proche')">
    <NavLinkProche />
  </div>
</template>
