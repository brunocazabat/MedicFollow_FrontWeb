<script>
import dayjs from "dayjs";

export default {
  components: {},
  data: function () {
    return {
      localTime: " ",
      localDate: " ",
    };
  },
  methods: {
    showLocaleTime: function () {
      let lastCheckup = this;
      lastCheckup.localTime = new dayjs().format("HH:mm");
      lastCheckup.localDate = new dayjs().format("DD-MM-YYYY");
    },
  },
  mounted() {
    this.showLocaleTime();
  },
};
</script>

<template>
  <div class="row">
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
                    <span class="counter-value">{{ localTime }}</span>
                  </h4>

                  <p class="card-text mb-0">
                    <small class="text-muted mb-2">{{ localDate }}</small>
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
                      >Appointement with Dr.BERNABEU</span
                    >
                  </h4>

                  <p class="card-text mb-0">
                    <small class="text-muted mb-2">{{ localDate }}</small>
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

  <!-- RECENT MEDICAL VISITS -->
  <div class="col">
    <div class="card">
      <div class="card-header align-items-center d-flex">
        <h4 class="card-title mb-0 flex-grow-1" data-key="t-recentvisits">
          {{ $t("t-recentvisits") }}
        </h4>
        <div class="flex-shrink-0">
          <button
            type="button"
            class="btn btn-soft-info btn-sm shadow-none"
            data-key="t-generatereport"
          >
            <em class="ri-file-list-3-line align-middle"></em>
            {{ $t("t-generatereport") }}
          </button>
        </div>
      </div>
      <!-- end card header -->

      <div class="card-body">
        <div class="table-responsive table-card">
          <table
            class="table table-borderless table-centered align-middle table-nowrap mb-0"
            aria-label="Medical Visits Table"
          >
            <thead class="text-muted table-light">
              <tr>
                <th scope="col" data-key="t-visitid">{{ $t("t-visitid") }}</th>
                <th scope="col" data-key="t-staffname">
                  {{ $t("t-staffname") }}
                </th>
                <th scope="col" data-key="t-staffpos">
                  {{ $t("t-staffpos") }}
                </th>
                <th scope="col" data-key="t-date">{{ $t("t-date") }}</th>
                <th scope="col" data-key="t-time">{{ $t("t-time") }}</th>
                <th scope="col" data-key="t-status">{{ $t("t-status") }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <router-link
                    to="/ecommerce/order-details"
                    class="fw-medium link-primary"
                    >#2112
                  </router-link>
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0 me-2">
                      <img
                        src="@/assets/images/users/avatar-2.jpg"
                        alt=""
                        class="avatar-xs rounded-circle shadow"
                      />
                    </div>
                    <div class="flex-grow-1">Stephanie Clocki</div>
                  </div>
                </td>
                <td>Nurse</td>
                <td>07/08/2022</td>
                <td>{{ localTime }}</td>
                <td>
                  <span class="badge badge-soft-warning">Pending Approval</span>
                </td>
              </tr>
              <!-- end tr -->
              <tr>
                <td>
                  <router-link
                    to="/ecommerce/order-details"
                    class="fw-medium link-primary"
                    >#2111
                  </router-link>
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0 me-2">
                      <img
                        src="@/assets/images/users/avatar-7.jpg"
                        alt=""
                        class="avatar-xs rounded-circle shadow"
                      />
                    </div>
                    <div class="flex-grow-1">Jansh Brown</div>
                  </div>
                </td>
                <td>Rheumatologist</td>
                <td>07/08/2022</td>
                <td>15:32</td>
                <td>
                  <span class="badge badge-soft-success">Approved</span>
                </td>
              </tr>
              <!-- end tr -->
              <tr>
                <td>
                  <router-link
                    to="/ecommerce/order-details"
                    class="fw-medium link-primary"
                    >#2109
                  </router-link>
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0 me-2">
                      <img
                        src="@/assets/images/users/avatar-5.jpg"
                        alt=""
                        class="avatar-xs rounded-circle shadow"
                      />
                    </div>
                    <div class="flex-grow-1">Ayaan Bowen</div>
                  </div>
                </td>
                <td>Rheumatologist Intern</td>
                <td>07/08/2022</td>
                <td>10:17</td>
                <td>
                  <span class="badge badge-soft-success">Approved</span>
                </td>
              </tr>
              <!-- end tr -->
            </tbody>
            <!-- end tbody -->
          </table>
          <!-- end table -->
        </div>
      </div>
    </div>
    <!-- .card-->
  </div>
</template>
