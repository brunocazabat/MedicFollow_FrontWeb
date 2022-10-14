<script>
import Layout from "@/components/layouts/main.vue";
import FooterModule from "@/components/login-components/footer-module.vue";
import { reactive } from "vue";
import useSubmitButtonState from "./useSubmitButtonState"
import useVuelidate from '@vuelidate/core'
import FieldModule from './fieldModule.vue'
import Chat from "@/components/staff-input-components/chat.vue";

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

      // Views Var
      viewID: 1,
      viewEnd: false,

      // Patient Vars
      patientFirstName: "Marie",
      patientLastName: "DUPONT",

      // Fields Var
      inputFields: [
        { id: 0, title: "Rythme cardiaque", value: "" },
        { id: 1, title: "Poul", value: "" },
        { id: 2, title: "Saturation en oxygène", value: "" },
        { id: 3, title: "Température", value: "" },
        { id: 4, title: "Tension Artérielle", value: "" },
        { id: 5, title: "EVN", value: "" },
        { id: 6, title: "Traitements", value: "" },
      ]

    };
  },
  components: {
    Layout,
    FooterModule,
    FieldModule,
    Chat,
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
      if (this.viewID) {
        this.viewEnd = false;
      }
    }
  },
};

</script>
  
<template>
  <Layout>

    <div class="project-wrapper mf-form-width">

      <!-- Title + muted text -->
      <div v-if="viewID === 0">
        <h2 class="text-primary text-uppercase">{{$t("t-selectpatient")}}</h2>
        <p class="text-muted">{{$t("t-selectpatientinfotext")}}.</p>
      </div>

      <div v-if="viewID === 1">
        <h2 class="text-primary text-uppercase">{{$t("t-medicinfofor")}} <strong>{{patientFirstName}}
            {{patientLastName}}</strong></h2>
        <p class="text-muted">{{$t("t-writedownlastinfo")}}.</p>
      </div>

      <!-- First Input Page -->
      <div v-if="viewID === 0">
        <div class="card">
          <div class="card-body">

            <!-- Input fields -->
            <div class="row mb-3">
              <!-- First name -->
              <div class="col-sm-6">
                <label for="patientFirstName" class="form-label" data-key="t-firstname">{{
                $t("t-firstname")
                }}</label>
                <input type="text" class="form-control" id="patientFirstName" placeholder="Enter first name..."
                  v-model="patientFirstName" />
              </div>

              <!-- Last name -->
              <div class="col-sm-6">
                <label for="patientLastName" class="form-label" data-key="t-lastname">{{ $t("t-lastname")
                }}</label>
                <input type="text" class="form-control" id="patientLastName" placeholder="Enter last name..."
                  v-model="patientLastName" />
              </div>
            </div>

            <!-- Social security number + Date of Birth -->
            <div class="row">

              <!-- Social Security Number -->
              <div class="col-sm-6">
                <label for="patientSocialSecurityNumber" class="form-label"
                  data-key="t-socialsecuritynbr">{{$t("t-socialsecuritynbr")}}</label>
                <input type="text" class="form-control" id="patientSocialSecurityNumber"
                  placeholder="Enter the social security number..." v-model="patientMandatory.socialSecurityNumber" />
              </div>

              <!-- Date of Birth / CHANGE FOR ACTUAL DATE PICKER -->
              <div class="col-sm-6">
                <label for="patientDoB" class="form-label" data-key="t-dateofbirth">{{$t("t-dateofbirth")}}</label>
                <input type="date" class="form-control" id="patientDoB" placeholder="Enter the date of birth..."
                  v-model="patientMandatory.dateOfBirth" />
              </div>
            </div>
          </div>
        </div>
      </div>


      <!-- INPUT MEDICAL INFORMATION -->
      <div class="row" v-if="viewID === 1">

        <div class="p-2">
          <div class="card">
            <div class="card-body row">

              <div class="col-lg-6 mf-scrollable">
                <!-- INPUT LATEST INFO -->
                <div>
                  <label for="patientObserveCardInput" class="form-label font-size-large">
                    {{$t("t-observationsheets")}}
                  </label>
                  <textarea class="form-control" id="patientObserveCardInput" rows="3"
                    placeholder="Enter the summary here..."></textarea>
                  <div class="invalid-feedback">
                    Please enter a message in the textarea.
                  </div>
                </div>

                <hr>

                <!-- NON MANDATORY FIELDS -->
                <div class="basic-card-border mb-2">
                  <a class="nav-link menu-link col-sm-12 font-size-medium two-percent-height center-items"
                    href="#patientNonMandatoryField" data-bs-toggle="collapse" role="button" aria-expanded="false"
                    aria-controls="patientNonMandatoryField">
                    <span>{{$t("t-notmandatoryfields")}} <strong><em
                          class="ri-arrow-down-line lh-1 center-items"></em></strong></span>
                  </a>

                  <hr class="mf-divider">

                  <div class="collapse col-sm-12 basic-padding left-margin" id="patientNonMandatoryField">
                    <FieldModule v-for="field in inputFields" :key="field.id" :fieldName="field.title" />
                  </div>

                </div>

                <hr>

                <!-- FILE UPLOAD -->
                <div class="mb-3">
                  <div class="col-md-12">
                    <label class="font-size-large mb-0 mt-0" data-key="t-questionuploaddoc">
                      {{ $t("t-questionuploaddoc") }}
                    </label>
                    <p class="text-muted mb-3" data-key="t-uploadexample">{{ $t("t-uploadexample") }}</p>
                    <input class="form-control" type="file" id="feedbackFileUpload" accept=".pdf, ,jpg, .jpeg, .png">
                  </div>
                </div>
              </div>

              <!-- CHAT -->
              <div class="col-lg-6">
                <Chat />
              </div>

            </div>
          </div>
        </div>


      </div>


      <!-- Next and Prev Button -->
      <div class="p-3 mb-3 row">
        <div class="space-in-between">
          <button class="lh-1 btn btn-primary font-size-medium col-lg-3" v-on:click="prevView()"
            :disabled="viewID === 0"><strong><em class="ri-arrow-left-line center-items"></em></strong>
            {{$t("t-previousstep")}}</button>
          <button class="lh-1 btn btn-primary font-size-medium col-lg-3" v-on:click="nextView()">{{$t("t-nextstep")}}
            <strong><em class="ri-arrow-right-line center-items"></em></strong></button>
        </div>
      </div>


    </div>

    <FooterModule />
  </Layout>
</template>
  