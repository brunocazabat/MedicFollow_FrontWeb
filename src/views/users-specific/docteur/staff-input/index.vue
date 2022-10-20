<script>
import Layout from "@/components/view-related/layout/main.vue";
import FooterModule from "@/components/view-related/login-components/footer-module.vue";
import { reactive } from "vue";
import useSubmitButtonState from "@/components/view-related/staff-input-components/useSubmitButtonState"
import useVuelidate from '@vuelidate/core'
import FieldModule from './fieldModule.vue'
import Chat from "@/components/view-related/staff-input-components/chat.vue";
import Calendar from "@/components/view-related/staff-input-components/calendar.vue"

export default {
  props: {
    patientID: {
      type: Number,
      required: false
    },
    patientFName: {
      type: String,
      required: false
    },
    patientLName: {
      type: String,
      required: false
    }
  },
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
      viewID: 0,
      viewEnd: false,

      // Patient Vars
      patientFirstName: "",
      patientLastName: "",

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
    Calendar,
  },
  onMounted() {
    console.log("name: " + this.patientFName);
    if (this.patientFName.length > 0) {
      this.patientFirstName = this.patientFName;
      this.patientLastName = this.patientLName;
      this.viewID = 1;
      this.viewEnd = true;
    }
  },
  methods: {
    checkPatientInfo() {
      if (this.patientFName && this.patientLName) {
        this.patientFirstName = this.patientFName;
        this.patientLastName = this.patientLName;
        this.viewID = 1;
        this.viewEnd = true;
        window.scrollTo(0, 0);
      }
    },
    nextView() {
      this.viewID += 1;
      if (this.viewID === 1) {
        this.viewEnd = true;
      }
    },
    prevView() {
      this.viewID -= 1;
      if (this.viewID !== 1) {
        this.viewEnd = false;
      }
    }
  },
  mounted() {
    window.scrollTo(0, 0);
    this.checkPatientInfo();
  }
};

</script>
  
<template>
  <Layout>

    <div class="project-wrapper mf-form-width">
      <!-- First Input Page -->
      <div v-if="viewID === 0">
        <!-- Title + paragraph -->
        <h2 class="text-primary text-uppercase">{{$t("t-selectpatient")}}</h2>
        <p class="text-muted">{{$t("t-selectpatientinfotext")}}.</p>
        <div class="card">
          <div class="card-body">

            <!-- Input fields -->
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

              <!-- Date of Birth / CHANGE FOR ACTUAL DATE PICKER -->
              <div class="col-sm-6">
                <label for="patientDoB" class="form-label">{{$t("t-dateofbirth")}}</label>
                <input type="date" class="form-control" id="patientDoB" placeholder="Enter the date of birth..."
                  v-model="patientMandatory.dateOfBirth" />
              </div>
            </div>
          </div>
        </div>
      </div>


      <!-- INPUT MEDICAL INFORMATION -->
      <div class="row" v-if="viewID === 1">
        <!-- Title + paragraph -->
        <h2 class="text-primary text-uppercase">{{$t("t-medicinfofor")}} <strong>{{patientLastName}}
            {{patientFirstName}}</strong></h2>
        <p class="text-muted">{{$t("t-writedownlastinfo")}}.</p>
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
                    placeholder="Veuillez saisir le résumé..."></textarea>
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
                    <label class="font-size-large mb-0 mt-0">
                      {{ $t("t-questionuploaddoc") }}
                    </label>
                    <p class="text-muted mb-3">{{ $t("t-uploadexample") }}</p>
                    <input class="form-control" type="file" id="feedbackFileUpload" accept=".pdf, ,jpg, .jpeg, .png">
                  </div>
                </div>


              </div>

              <!-- CHAT -->
              <div class="col-lg-6">
                <Chat />
              </div>

              <div>
                <Calendar />
              </div>
            </div>
          </div>
        </div>


      </div>


      <!-- Next and Prev Button -->
      <div class="p-3 mb-3 row">
        <div class="space-in-between" v-if="viewEnd === false">
          <button class="lh-1 btn btn-primary font-size-medium col-sm-4" v-on:click="prevView()"
            :disabled="viewID === 0"><strong><em class="ri-arrow-left-line center-items"></em></strong>
            {{$t("t-previousstep")}}</button>
          <button class="lh-1 btn btn-primary font-size-medium col-sm-4" v-on:click="nextView()"
            :disabled="isSubmitButtonDisabled">{{$t("t-nextstep")}}
            <strong><em class="ri-arrow-right-line center-items"></em></strong></button>
        </div>

        <div class="space-in-between" v-else>
          <button class="lh-1 btn btn-primary font-size-medium col-sm-4" v-on:click="prevView()"><strong><em
                class="ri-arrow-left-line center-items"></em></strong>
            {{$t("t-previousstep")}}</button>
          <a class="lh-1 btn btn-primary font-size-medium col-sm-4" href="/">{{$t("t-continue")}}
            <strong><em class="ri-arrow-right-line center-items"></em></strong></a>
        </div>
      </div>


    </div>

    <FooterModule />
  </Layout>
</template>
  