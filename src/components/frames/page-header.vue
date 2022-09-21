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
        { id: 3, name: 'medecin' },
        { id: 4, name: 'medical' },
        { id: 5, name: 'patient' },
        { id: 6, name: 'confiance' },
        { id: 7, name: 'proche' },
      ]
    }
  },
  methods: {
    activateheader() {
      return store.getters["auth/getuserType"] == "admin";
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
      <div class="page-title-box align-items-center justify-content-between">
        <div class="row">
          <div class="col-2 align-content-center text-center align-items-center">
            <h4 class="mb-sm-0">UI SELECTOR ADMIN</h4>
          </div>
          <div class="col-1">
            <select class="form-control" v-model="selected" @change="modifyUIType()">
              <option v-for="userType in userTypes" v-bind:value="{ id: userType.id, text: userType.name  }"
                :key="userType.id">{{
                userType.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end page title -->
</template>
