<script>
import dayjs from 'dayjs'

export default {
  components: {
  },
  data: function () {
    return {
      localTime: " ",
      localDate: " "
    };
  },
  methods: {
    showLocaleTime: function () {
      let lastCheckup = this;
      lastCheckup.localTime = new dayjs().format('HH:mm');
      lastCheckup.localDate = new dayjs().format('DD-MM-YYYY');
    }
  },
  mounted() {
    this.showLocaleTime()
  }
}
</script>

<template>

  <div class="row">
    <div class="col-12">
      <div class="row">
        <div class="col-xxl-6">
          <div class="card">
            <div class="row g-0">
              <div class="col-md-4">
                <img class="rounded-start img-fluid h-100 object-cover" src="@/assets/images/doctor-with-patient.jpg"
                  alt="Card image" />
              </div>
              <div class="col-md-8">
                <div class="card-header">
                  <h5 class="card-title text-uppercase mb-1" data-key="t-lastcheckup">{{
                      $t("t-lastcheckup")
                  }}:
                  </h5>
                </div>

                <div class="card-body">
                  <h4 class="fs-4 flex-grow-1 mb-4">
                    <span class="counter-value">{{ localTime }}</span>
                  </h4>

                  <p class="card-text mb-0">
                    <small class="text-muted mb-2">{{ localDate }}</small>
                  </p>
                </div>

                <div class="card-footer">
                  <a href="javascript:void(0);" class="link-dark mb-2">
                    Read Summary
                    <em class="ri-arrow-right-s-line align-middle lh-1"></em>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->


        <div class="col-xxl-6">
          <div class="card">
            <div class="row g-0">

              <div class="col-md-8">
                <div class="card-header">
                  <h5 class="card-title text-uppercase mb-1" data-key="t-nextappoint">{{
                      $t("t-nextappoint")
                  }}:
                  </h5>
                </div>
                <div class="card-body">
                  <h4 class="fs-4 flex-grow-1 mb-4">
                    <span class="counter-value">Appointement with Dr.BERNABEU</span>
                  </h4>

                  <p class="card-text mb-0">
                    <small class="text-muted mb-2">{{ localDate }}</small>
                  </p>
                </div>

                <div class="card-footer">
                  <a href="javascript:void(0);" class="link-dark mb-2">
                    Access Calendar
                    <em class="ri-arrow-right-s-line align-middle lh-1"></em>
                  </a>
                </div>
              </div>
              <div class="col-md-4">
                <img class="rounded-end img-fluid h-100 object-cover" src="@/assets/images/appointement-stethoscope.jpg"
                  alt="Card image" />
              </div>
            </div>
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->


      </div>
      <!-- end row -->
    </div>
    <!-- end col -->
  </div>
  <!-- end row -->



</template>
