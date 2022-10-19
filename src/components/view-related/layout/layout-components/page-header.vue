<script>
import store from "@/components/back-related/state/store";

export default {
  name: 'PageHeader',
  methods: {
    activateheader() {
      return store.getters["auth/getuserType"] == "admin" && this.$route.path.includes("/dashboard");
    },
    modifyUIType(value) {
      store.dispatch("auth/setUI", value);
    }
  },
};
</script>

<template>
  <!-- start page title -->
  <div class="row" v-if="activateheader()">
    <div class="col-12">
      <div class="page-title-box align-items-center">
        <div class="row">
          <div class="col-3" style="display: flex; justify-content: center; text-align: center; align-items: center;">
            <h4 class="mb-sm-0">DASHBOARD SELECTOR ADMIN</h4>
          </div>
          <div class="col-1">
            <RouterLink to="/admin/dashboard" class="btn btn-primary text-uppercase" @click="modifyUIType('admin')">
              Admin Dashboard
            </RouterLink>
          </div>
          <div class="col-1">
            <RouterLink to="/organisation/dashboard" class="btn btn-primary text-uppercase"
              @click="modifyUIType('organisation')">
              Organisation Dashboard
            </RouterLink>
          </div>
          <div class="col-1">
            <RouterLink to="/docteur/dashboard" class="btn btn-primary text-uppercase" @click="modifyUIType('docteur')">
              Docteur Dashboard
            </RouterLink>
          </div>
          <div class="col-1">
            <RouterLink to="/personnel/dashboard" class="btn btn-primary text-uppercase"
              @click="modifyUIType('personnel')">
              Personnel Dashboard
            </RouterLink>
          </div>
          <div class="col-1">
            <RouterLink to="/patient/dashboard" class="btn btn-primary text-uppercase" @click="modifyUIType('patient')">
              Patient Dashboard
            </RouterLink>
          </div>
          <div class="col-1">
            <RouterLink to="/confiance/dashboard" class="btn btn-primary text-uppercase"
              @click="modifyUIType('confiance')">
              Confiance Dashboard
            </RouterLink>
          </div>
          <div class="col-1">
            <RouterLink to="/proche/dashboard" class="btn btn-primary text-uppercase" @click="modifyUIType('proche')">
              Proche Dashboard
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
