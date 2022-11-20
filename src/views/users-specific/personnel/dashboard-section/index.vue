<script>
// Universal Imports
import Layout from "@/components/view-related/layout/main.vue";
import { CountTo } from "vue3-count-to";
import { GenericButton } from "@/components/view-related/dashboard-components";

export default {
  components: {
    Layout,
    CountTo,
    GenericButton,
  },
  data() {
    return {
      constructURL: String,
    };
  },
  methods: {
    handleShowMedicalInformation(patient) {
      this.constructURL =
        "medical-information?fn=" + patient.fName + "&ln=" + patient.lName;
      this.$router.push(this.constructURL);
    },
  },
};
</script>

<template>
  <Layout>
    <div class="row project-wrapper dashboard-form">
      <div class="col-xxl-2 mr1">
        <div class="row">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <div>
                  <p class="fw-medium text-muted mb-0" data-key="t-">
                    Patients dans le Service:
                  </p>
                  <h3 class="mt-4 ff-secondary fw-semibold" data-key="t-total">
                    <count-to
                      :duration="1000"
                      :startVal="0"
                      :endVal="95"
                    ></count-to>
                    {{ $t("t-total") }}
                  </h3>
                </div>
                <div>
                  <div class="avatar-sm flex-shrink-0">
                    <span
                      class="avatar-title bg-soft-info text-info rounded-circle fs-4"
                    >
                      <em class="mdi mdi-account"></em>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row pt-5">
          <!-- AddPatientModule -->
          <GenericButton
            link="/personnel/manage-patients"
            translate="t-addpatient"
            icon="mdi-account-plus"
          />
        </div>
        <div class="row">
          <!-- AccessSettings -->
          <GenericButton
            link="/personnel/settings"
            translate="t-accesssettings"
            icon="mdi-cog"
          />
        </div>
        <div class="row">
          <!-- AddMedicalInformationModule -->
          <GenericButton
            link="/personnel/staff-input"
            translate="t-addmedicalinfo"
            icon="mdi-pen-plus"
          />
        </div>
      </div>
      <div class="col-xxl-2 ml1 mr2">
        <div class="row">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <div>
                  <p class="fw-medium text-muted mb-0" data-key="t-">
                    Visites restantes:
                  </p>
                  <h3 class="mt-4 ff-secondary fw-semibold" data-key="t-remain">
                    <count-to
                      :duration="1000"
                      :startVal="0"
                      :endVal="8"
                    ></count-to>
                    restantes.
                  </h3>
                </div>
                <div>
                  <div class="avatar-sm flex-shrink-0">
                    <span
                      class="avatar-title bg-soft-info text-info rounded-circle fs-4"
                    >
                      <em class="mdi mdi-account-check"></em>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row pt-5">
          <!-- ManagePatientsModule -->
          <GenericButton
            link="/personnel/manage-patients"
            translate="t-managepatients"
            icon="mdi-account-edit"
          />
        </div>
        <div class="row">
          <!-- AccessChat -->
          <GenericButton
            link="/personnel/chat"
            translate="t-accessdiscuss"
            icon="mdi-forum"
          />
        </div>
      </div>
    </div>
  </Layout>
</template>
