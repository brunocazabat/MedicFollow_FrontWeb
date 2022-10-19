<script>
import store from "@/components/state/store";

import {
  NavLinkAdmin,
  NavLinkOrganisation,
  NavLinkDocteur,
  NavLinkPersonnel,
  NavLinkPatient,
  NavLinkConfiance,
  NavLinkProche,
} from "@/components/frames/user-specific"


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
