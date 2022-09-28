<script>
import Layout from "@/components/layouts/main.vue";
import footermodule from "@/components/login-components/footer-module.vue";

export default {
  data() {
    return {
      value: ['javascript'],
    };
  },
  components: {
    Layout,
    footermodule
  },
};

</script>

<template>
  <Layout>

    <!-- First Input Page -->
    <div class="row project-wrapper">
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
                <input type="text" class="form-control" id="patientFirstName" placeholder="Enter first name" value="" />
              </div>

              <!-- Last name -->
              <div class="col-sm-5">
                <label for="patientLastName" class="form-label" data-key="t-lastname">{{ $t("t-lastname")
                }}</label>
                <input type="text" class="form-control" id="patientLastName" placeholder="Enter last name" value="" />
              </div>
            </div>

            <!-- Social security number + Date of Birth -->
            <div class="p-3 row">

              <!-- Social Security Number -->
              <div class="col-sm-5">
                <label for="patientSocialSecurityNumber" class="form-label" data-key="">Social Security Number</label>
                <input type="text" class="form-control" id="patientSocialSecurityNumber" placeholder="Enter last name"
                  value="" required />
              </div>

              <!-- Date of Birth -->
              <div class="col-sm-5 mb-5">
                <label for="patientDoB" class="form-label" data-key="">Date of Birth</label>
                <input type="text" class="form-control" id="patientDoB" placeholder="Enter last name" value=""
                  required />
              </div>

              <!-- Next Button -->
              <div class="p-3">
                <a class="btn btn-primary col-sm-1" href="#">NEXT</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footermodule />
  </Layout>
</template>
