<script>
import Layout from "@/components/layouts/main.vue";
import footermodule from "@/components/login-components/footer-module.vue";
import { reactive } from "vue";
import useSubmitButtonState from "./useSubmitButtonState"

export default {
  setup() {
    const patientName = reactive({
      firstName: "",
      lastName: "",
    });
    const patientMandatory = reactive({
      dateOfBirth: "",
      socialSecurityNumber: "",
    });

    const { isSubmitButtonDisabled } = useSubmitButtonState(patientMandatory);
    return { patientMandatory, patientName, isSubmitButtonDisabled };
  },
  data() {
    return {
      value: ['javascript'],
      displayMode: 0,
    };
  },
  components: {
    Layout,
    footermodule
  },
  methods: {
    nextDisplay() {
      this.displayMode += 1;
    },
  }
};

</script>

<template>
  <Layout>

    <!-- First Input Page -->
    <div class="row project-wrapper" v-if="displayMode === 0">
      <div class="p-2 col-xl-12">
        <div class="card">
          <div class="card-body">

            <!-- Title + muted text -->
            <h2 class="text-primary">Select a patient</h2>
            <p class="text-muted">Here you can select a patient you visited to then input the latest medical
              information. The last first and last name inputs are not mandatory but the social security number and the
              date of birth are.</p>

            <!-- Input fields -->
            <div class="p-3 row">
              <!-- First name -->
              <div class="col-sm-5">
                <label for="patientFirstName" class="form-label" data-key="t-firstname">{{
                $t("t-firstname")
                }}</label>
                <input type="text" class="form-control" id="patientFirstName" placeholder="Enter first name..."
                  v-model="patientName.firstName" />
              </div>

              <!-- Last name -->
              <div class="col-sm-5">
                <label for="patientLastName" class="form-label" data-key="t-lastname">{{ $t("t-lastname")
                }}</label>
                <input type="text" class="form-control" id="patientLastName" placeholder="Enter last name..."
                  v-model="patientName.lastName" />
              </div>
            </div>

            <!-- Social security number + Date of Birth -->
            <div class="p-3 row">

              <!-- Social Security Number -->
              <div class="col-sm-5">
                <label for="patientSocialSecurityNumber" class="form-label" data-key="">Social Security Number</label>
                <input type="text" class="form-control" id="patientSocialSecurityNumber"
                  placeholder="Enter the social security number...." v-model="patientMandatory.socialSecurityNumber" />
              </div>

              <!-- Date of Birth / CHANGE FOR ACTUAL DATE PICKER -->
              <div class="col-sm-5 mb-5">
                <label for="patientDoB" class="form-label" data-key="">Date of Birth</label>
                <input type="text" class="form-control" id="patientDoB" placeholder="Enter the date of birth..."
                  v-model="patientMandatory.dateOfBirth" />
              </div>

              <!-- Next Button -->
              <div class="p-3">
                <button class="btn btn-primary col-sm-1" :disabled="isSubmitButtonDisabled" v-on:click="nextDisplay()">
                  NEXT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row project-wrapper" v-if="displayMode === 1">
      <div class="p-2 col-xl-5">
        <div class="card">
          <div class="card-body">
            <h2 class="text-primary">Medical Information Input for <strong>{{patient.firstName}}
                {{patient.lastName}}</strong></h2>
            <p class="text-muted">Here you can write down the latest information about the patient as well as answer the
              messages sent by the family.</p>

            <div class="p-3">
              <textarea class="form-control" id="VertimeassageInput" rows="3" placeholder="Enter the summary here..."
                required></textarea>
              <div class="invalid-feedback">
                Please enter a message in the textarea.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footermodule />
  </Layout>
</template>
