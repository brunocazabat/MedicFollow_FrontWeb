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
            <div class="row">

              <!-- First name -->
              <div class="col-sm-3">
                <div class="mb-3">
                  <label for="patientFirstName" class="form-label" data-key="t-firstname">{{
                  $t("t-firstname")
                  }}</label>
                  <input type="text" class="form-control" id="patientFirstName" placeholder="Enter first name"
                    value="" />
                </div>
              </div>

              <!-- Last name -->
              <div class="col-sm-3">
                <div class="mb-3">
                  <label for="patientLastName" class="form-label" data-key="t-lastname">{{ $t("t-lastname")
                  }}</label>
                  <input type="text" class="form-control" id="patientLastName" placeholder="Enter last name" value="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footermodule />
  </Layout>
</template>
