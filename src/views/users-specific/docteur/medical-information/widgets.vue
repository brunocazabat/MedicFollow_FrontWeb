<script>
export default {
  props: {
    lastVisitHour: {
      type: String,
      required: true,
    },
    lastVisitDate: {
      type: String,
      required: true,
    },
  },
  components: {},
  data: function () {
    return {
      localTime: null,
      localDate: null,
    };
  },
  // TODO: Get the next activity from the API
  methods: {},
  mounted() {},
};
</script>

<template>
  <div>
    <div class="col-12">
      <div class="row">
        <div class="col-xxl-6">
          <div class="card">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  class="rounded-start img-fluid h-100 object-cover"
                  src="@/assets/images/doctor-with-patient.jpg"
                  alt="Card image"
                />
              </div>
              <div class="col-md-8">
                <div class="card-header">
                  <h5
                    class="card-title text-uppercase mb-1"
                    data-key="t-lastcheckup"
                  >
                    {{ $t("t-lastcheckup") }}:
                  </h5>
                </div>

                <div class="card-body">
                  <h4 class="fs-4 flex-grow-1 mb-4">
                    <span class="counter-value">{{ lastVisitDate }}</span>
                  </h4>

                  <p class="card-text mb-0">
                    <small class="text-muted mb-2">{{ lastVisitHour }}</small>
                  </p>
                </div>

                <div class="card-footer">
                  <a
                    href="javascript:void(0);"
                    class="link-dark mb-2"
                    data-key="t-readsmy"
                  >
                    {{ $t("t-readsmy") }}
                    <em class="ri-arrow-right-s-line align-middle lh-1"></em>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- end card -->
        </div>

        <div class="col-xxl-6">
          <div class="card">
            <div class="row g-0">
              <div class="col-md-8">
                <div class="card-header">
                  <h5
                    class="card-title text-uppercase mb-1"
                    data-key="t-nextappoint"
                  >
                    {{ $t("t-nextappoint") }}:
                  </h5>
                </div>
                <div class="card-body">
                  <h4 class="fs-4 flex-grow-1 mb-4">
                    <span class="counter-value"
                      >{{ $t("t-with") }} <strong>DUPONT François</strong></span
                    >
                  </h4>
                  <p class="card-text mb-0">
                    <small class="text-muted mb-2"
                      >31/10/2022 {{ $t("t-at") }} 17:00</small
                    >
                  </p>
                </div>

                <div class="card-footer">
                  <a
                    href="javascript:void(0);"
                    class="link-dark mb-2"
                    data-key="t-accesscal"
                  >
                    {{ $t("t-accesscal") }}
                    <em class="ri-arrow-right-s-line align-middle lh-1"></em>
                  </a>
                </div>
              </div>
              <div class="col-md-4">
                <img
                  class="rounded-end img-fluid h-100 object-cover"
                  src="@/assets/images/appointement-stethoscope.jpg"
                  alt="Card image"
                />
              </div>
            </div>
          </div>
          <!-- end card -->
        </div>
      </div>
      <!-- end row -->
    </div>
  </div>
  <!-- end row -->
</template>
