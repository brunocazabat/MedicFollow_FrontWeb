<script>
import store from "@/components/state/store";

export default {
  name: 'PageHeader',
  data() {
    return {
      selected: '',
      userTypes: [
        { id: 1, name: 'admin' },
        { id: 2, name: 'organisation' },
        { id: 3, name: 'docteur' },
        { id: 4, name: 'personnel' },
        { id: 5, name: 'patient' },
        { id: 6, name: 'confiance' },
        { id: 7, name: 'proche' },
      ]
    }
  },
  methods: {
    activateheader() {
      return store.getters["auth/getuserType"] == "admin" && this.$route.path.includes("/dashboard");
    },
    modifyUIType() {
      store.dispatch("auth/setUI", this.selected.text);
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
          <div class="col-2" style="display: flex; justify-content: center; text-align: center; align-items: center;">
            <h4 class="mb-sm-0">MENU SELECTOR ADMIN</h4>
          </div>
          <div class="col-1">
            <select class="form-control" v-model="selected" @change="modifyUIType()">
              <option v-for="userType in userTypes" v-bind:value="{ id: userType.id, text: userType.name  }"
                :key="userType.id">{{
                userType.name }}
              </option>
            </select>
          </div>
          <div class="col-2" style="display: flex; justify-content: center; text-align: center; align-items: center;">
            <h4 class="mb-sm-0">DASHBOARD SELECTOR ADMIN</h4>
          </div>
          <div class="col-1">
            <RouterLink to="/admin/dashboard" class="btn btn-primary text-uppercase">
              Admin Dashboard
            </RouterLink>
          </div>
          <div class="col-1">
            <RouterLink to="/organisation/dashboard" class="btn btn-primary text-uppercase">
              Organisation Dashboard
            </RouterLink>
          </div>
          <div class="col-1">
            <RouterLink to="/docteur/dashboard" class="btn btn-primary text-uppercase">
              Docteur Dashboard
            </RouterLink>
          </div>
          <div class="col-1">
            <RouterLink to="/personnel/dashboard" class="btn btn-primary text-uppercase">
              Personnel Dashboard
            </RouterLink>
          </div>
          <div class="col-1">
            <RouterLink to="/patient/dashboard" class="btn btn-primary text-uppercase">
              Patient Dashboard
            </RouterLink>
          </div>
          <div class="col-1">
            <RouterLink to="/confiance/dashboard" class="btn btn-primary text-uppercase">
              Confiance Dashboard
            </RouterLink>
          </div>
          <div class="col-1">
            <RouterLink to="/proche/dashboard" class="btn btn-primary text-uppercase">
              Proche Dashboard
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end page title -->
</template>
