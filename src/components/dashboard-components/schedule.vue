<script>
import flatPickr from "vue-flatpickr-component";

export default {
  components: {
    flatPickr,
  },
  data() {
    return {
      date: null,
      config: {
        inline: true,
      },
    };
  },
};
</script>

<template>
  <div class="card">
    <div class="card-header border-0">
      <h4 class="card-title mb-0" data-key="t-upcomingsch">{{ $t("t-upcomingsch") }}</h4>
    </div>
    <!-- end cardheader -->
    <div class="card-body pt-0">
      <div class="upcoming-scheduled">
        <flat-pickr v-model="date" :config="config"></flat-pickr>
      </div>

      <h6 class="text-uppercase fw-semibold mt-4 mb-3 text-muted" data-key="t-event">{{ $t("t-event") }}:</h6>
      <div class="mini-stats-wid d-flex align-items-center mt-3">
        <div class="flex-shrink-0 avatar-sm">
          <span class="mini-stat-icon avatar-title rounded-circle text-success bg-soft-success fs-4">
            09
          </span>
        </div>
        <div class="flex-grow-1 ms-3">
          <h6 class="mb-1">Test Event 1</h6>
          <p class="text-muted mb-0" data-key="t-appointtype">{{ $t("t-appointtype") }}</p>
        </div>
        <div class="flex-shrink-0">
          <p class="text-muted mb-0">
            9:20 <span class="text-uppercase">am</span>
          </p>
        </div>
      </div>
      <!-- end -->
      <div class="mini-stats-wid d-flex align-items-center mt-3">
        <div class="flex-shrink-0 avatar-sm">
          <span class="mini-stat-icon avatar-title rounded-circle text-success bg-soft-success fs-4">
            12
          </span>
        </div>
        <div class="flex-grow-1 ms-3">
          <h6 class="mb-1">Test Event 2</h6>
          <p class="text-muted mb-0" data-key="t-appointtype">{{ $t("t-appointtype") }}</p>
        </div>
        <div class="flex-shrink-0">
          <p class="text-muted mb-0">
            11:30 <span class="text-uppercase">am</span>
          </p>
        </div>
      </div>
      <!-- end -->
      <div class="mini-stats-wid d-flex align-items-center mt-3">
        <div class="flex-shrink-0 avatar-sm">
          <span class="mini-stat-icon avatar-title rounded-circle text-success bg-soft-success fs-4">
            25
          </span>
        </div>
        <div class="flex-grow-1 ms-3">
          <h6 class="mb-1">Test Event 3</h6>
          <p class="text-muted mb-0" data-key="t-appointtype">{{ $t("t-appointtype") }}</p>
        </div>
        <div class="flex-shrink-0">
          <p class="text-muted mb-0">
            02:00 <span class="text-uppercase">pm</span>
          </p>
        </div>
      </div>
      <!-- end -->
      <div class="mini-stats-wid d-flex align-items-center mt-3">
        <div class="flex-shrink-0 avatar-sm">
          <span class="mini-stat-icon avatar-title rounded-circle text-success bg-soft-success fs-4">
            27
          </span>
        </div>
        <div class="flex-grow-1 ms-3">
          <h6 class="mb-1">Test Event 4</h6>
          <p class="text-muted mb-0" data-key="t-appointtype">{{ $t("t-appointtype") }}</p>
        </div>
        <div class="flex-shrink-0">
          <p class="text-muted mb-0">
            03:45 <span class="text-uppercase">pm</span>
          </p>
        </div>
      </div>
      <!-- end -->

      <div class="mt-3 text-center">
        <router-link to="/calendar">
          <a class="text-muted text-decoration-underline" data-key="t-viewcal">{{ $t("t-viewcal") }}</a>
        </router-link>
      </div>
    </div>
    <!-- end cardbody -->
  </div>
  <!-- end card -->
</template>
