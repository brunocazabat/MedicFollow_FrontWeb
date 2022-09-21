<script>
import store from "@/components/state/store";

import NavLinkAdmin from "@/components/frames/user-specific/navlink_admin.vue";
import NavLinkOrganisation from "@/components/frames/user-specific/navlink_organisation.vue";
import NavLinkMedecin from "@/components/frames/user-specific/navlink_medecin.vue";
import NavLinkMedical from "@/components/frames/user-specific/navlink_medical.vue";
import NavLinkPatient from "@/components/frames/user-specific/navlink_patient.vue";
import NavLinkConfiance from "@/components/frames/user-specific/navlink_confiance.vue";
import NavLinkProche from "@/components/frames/user-specific/navlink_proche.vue";


export default {
  name: "menunavlink",
  components: {
    NavLinkAdmin,
    NavLinkOrganisation,
    NavLinkMedecin,
    NavLinkMedical,
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
  <div class="container-fluid" v-if="activatemenu('medecin')">
    <NavLinkMedecin />
  </div>
  <div class="container-fluid" v-if="activatemenu('medical')">
    <NavLinkMedical />
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
