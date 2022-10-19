<script>
import Layout from "@/components/view-related/layout/main.vue";
import FooterModule from "@/components/view-related/login-components/footer-module.vue";

import { reactive } from "vue";
import useVuelidate from '@vuelidate/core'

import Widgets from "./widgets.vue";
import CheckupText from "./checkup-text.vue";
import useSubmitButtonState from "@/components/view-related/staff-input-components/useSubmitButtonState"


export default {
  setup() {
    const patientMandatory = reactive({
      dateOfBirth: "",
      socialSecurityNumber: "",
    });

    const { isSubmitButtonDisabled } = useSubmitButtonState(patientMandatory);
    return { v$: useVuelidate(), patientMandatory, isSubmitButtonDisabled };
  },
  data() {
    return {
      value: ['javascript'],

      viewID: 0,
      viewEnd: false,

      patientFirstName: "",
      patientLastName: "",
    }

  },
  components: {
    Layout,
    Widgets,
    CheckupText,
    FooterModule
  },
  methods: {
    nextView() {
      this.viewID += 1;
      if (this.viewID === 1) {
        this.viewEnd = true;
      }
    },
    prevView() {
      this.viewID -= 1;
      if (this.viewID === 0) {
        this.viewEnd = false;
      }
    }
  },
}
</script>

<!-- TEMPLATE -->

<template>
  <Layout>
    <div class="project-wrapper mf-form-width">
      <!-- Input Page -->
      <div v-if="viewID === 0">

        <!-- Title and Text muted -->
        <h2 class="text-primary text-uppercase">{{$t("t-selectpatient")}}</h2>
        <p class="text-muted">{{$t("t-selectpatientinfotext")}}.</p>

        <div class="card">
          <div class="card-body">
            <div class="row mb-3">

              <!-- First name -->
              <div class="col-sm-6">
                <label for="patientFirstName" class="form-label">{{
                $t("t-firstname")
                }}</label>
                <input type="text" class="form-control" id="patientFirstName" placeholder="Enter first name..."
                  v-model="patientFirstName" />
              </div>

              <!-- Last name -->
              <div class="col-sm-6">
                <label for="patientLastName" class="form-label">{{ $t("t-lastname")
                }}</label>
                <input type="text" class="form-control" id="patientLastName" placeholder="Enter last name..."
                  v-model="patientLastName" />
              </div>
            </div>

            <!-- Social security number + Date of Birth -->
            <div class="row">

              <!-- Social Security Number -->
              <div class="col-sm-6">
                <label for="patientSocialSecurityNumber" class="form-label">{{$t("t-socialsecuritynbr")}}</label>
                <input type="text" class="form-control" id="patientSocialSecurityNumber"
                  placeholder="Enter the social security number..." v-model="patientMandatory.socialSecurityNumber" />
              </div>

              <!-- Date of Birth -->
              <div class="col-sm-6">
                <label for="patientDoB" class="form-label">{{$t("t-dateofbirth")}}</label>
                <input type="date" class="form-control" id="patientDoB" placeholder="Enter the date of birth..."
                  v-model="patientMandatory.dateOfBirth" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="viewID === 1">
        <h2 class="text-primary text-uppercase">{{$t("t-patientmedicinfo")}} <strong>{{patientFirstName}}
            {{patientLastName}}</strong></h2>
        <p class="text-muted">{{$t("t-medicinfodesc")}}</p>

        <Widgets />
        <CheckupText />

        <!-- TODO: Maybe add Calendar -->
      </div>

      <div class="p-3 mb-3 row">
        <div class="space-in-between" v-if="viewEnd === false">
          <button class="lh-1 btn btn-primary font-size-medium col-lg-3" v-on:click="prevView()"
            :disabled="viewID === 0"><strong><em class="ri-arrow-left-line center-items"></em></strong>
            {{$t("t-previousstep")}}</button>
          <button class="lh-1 btn btn-primary font-size-medium col-lg-3" v-on:click="nextView()"
            :disabled="isSubmitButtonDisabled">{{$t("t-nextstep")}}
            <strong><em class="ri-arrow-right-line center-items"></em></strong></button>
        </div>

        <div class="space-in-between" v-else>
          <button class="lh-1 btn btn-primary font-size-medium col-lg-3" v-on:click="prevView()"><strong><em
                class="ri-arrow-left-line center-items"></em></strong>
            {{$t("t-previousstep")}}</button>
          <a class="lh-1 btn btn-primary font-size-medium col-lg-3" href="/">{{$t("t-addareport")}}
            <strong><em class="ri-arrow-right-line center-items"></em></strong></a>
        </div>

      </div>
    </div>

    <FooterModule />
  </Layout>


</template>

