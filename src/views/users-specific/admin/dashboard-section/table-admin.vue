<script>
import { CountTo } from "vue3-count-to";
import TableAdminBug from "./table-admin-bug.vue";
import TableAdminSug from "./table-admin-sug.vue";
import TableAdminOrg from "./table-admin-org.vue";

export default {
  components: {
    CountTo,
    TableAdminBug,
    TableAdminSug,
    TableAdminOrg
  },
  methods: {
    makevisible(value) {
      switch (value) {
        case "buglist":
          document.getElementById(value).style.display = "block";
          document.getElementById("suggestlist").style.display = "none";
          document.getElementById("orgalist").style.display = "none";
          break;
        case "suggestlist":
          document.getElementById(value).style.display = "block";
          document.getElementById("buglist").style.display = "none";
          document.getElementById("orgalist").style.display = "none";
          break;
        case "orgalist":
          document.getElementById(value).style.display = "block";
          document.getElementById("buglist").style.display = "none";
          document.getElementById("suggestlist").style.display = "none";
          break;
      }
    },
  },
  mounted() {
    this.makevisible("buglist");
  },
};
</script>

<template>
  <div class="row">
    <div class="col-xxl-3 col-sm-6">
      <div class="card card-animate">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <div>
              <p class="fw-medium text-muted mb-0">Bugs Reports Ouverts</p>
              <h2 class="mt-4 ff-secondary fw-semibold">
                <count-to :duration="1000" :startVal="0" :endVal="18"></count-to> à traiter.
              </h2>
            </div>
            <div>
              <div class="avatar-sm flex-shrink-0">
                <span class="avatar-title bg-soft-info text-info rounded-circle fs-4">
                  <em class="ri-ticket-2-line"></em>
                </span>
              </div>
            </div>
          </div>
        </div>
        <!-- end card body -->
      </div>
      <!-- end card-->
    </div>
    <!--end col-->
    <div class="col-xxl-3 col-sm-6">
      <div class="card card-animate">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <div>
              <p class="fw-medium text-muted mb-0">Signalements Ouverts</p>
              <h2 class="mt-4 ff-secondary fw-semibold">
                <count-to :duration="1000" :startVal="0" :endVal="40"></count-to> à traiter.
              </h2>
            </div>
            <div>
              <div class="avatar-sm flex-shrink-0">
                <span class="avatar-title bg-soft-info text-info rounded-circle fs-4">
                  <em class="mdi mdi-timer-sand"></em>
                </span>
              </div>
            </div>
          </div>
        </div>
        <!-- end card body -->
      </div>
    </div>
    <!--end col-->
    <div class="col-xxl-3 col-sm-6">
      <div class="card card-animate">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <div>
              <p class="fw-medium text-muted mb-0">Organisations Enregistrées</p>
              <h2 class="mt-4 ff-secondary fw-semibold">
                <count-to :duration="1000" :startVal="0" :endVal="5"></count-to>
              </h2>
            </div>
            <div>
              <div class="avatar-sm flex-shrink-0">
                <span class="avatar-title bg-soft-info text-info rounded-circle fs-4">
                  <em class="ri-shopping-bag-line"></em>
                </span>
              </div>
            </div>
          </div>
        </div>
        <!-- end card body -->
      </div>
    </div>
    <!--end col-->
    <div class="col-xxl-3 col-sm-6">
      <div class="card card-animate">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <div>
              <p class="fw-medium text-muted mb-0">Action à réaliser</p>
              <h2 class="mt-4 ff-secondary fw-semibold">
                <count-to :duration="1000" :startVal="0" :endVal="58"></count-to> restantes.
              </h2>
            </div>
            <div>
              <div class="avatar-sm flex-shrink-0">
                <span class="avatar-title bg-soft-info text-info rounded-circle fs-4">
                  <em class="ri-delete-bin-line"></em>
                </span>
              </div>
            </div>
          </div>
        </div>
        <!-- end card body -->
      </div>
    </div>
    <!--end col-->
  </div>
  <!--end row-->

  <div class="row">
    <div class="col-lg-12">
      <div class="card">
        <div class="card-body">
          <div class="table-responsive table-card">
            <ul class="nav nav-pills nav-justified custom-nav" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link fs-15 p-3 active" id="pills-bill-info-tab" data-bs-toggle="pill" type="button"
                  role="tab" @click="makevisible('buglist')">
                  Aperçu Bug Reports
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link fs-15 p-3" id="pills-payment-tab" data-bs-toggle="pill" type="button" role="tab"
                  @click="makevisible('suggestlist')">
                  Aperçu Suggestions
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link fs-15 p-3" id="pills-finish-tab" data-bs-toggle="pill" type="button" role="tab"
                  @click="makevisible('orgalist')">
                  Aperçu Organisations
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-lg-12">
      <div class="card" id="buglist">
        <TableAdminBug />
      </div>
      <!--end card-->
      <div class="card" id="suggestlist">
        <TableAdminSug />
      </div>
      <!--end card-->
      <div class="card" id="orgalist">
        <TableAdminOrg />
      </div>
      <!--end card-->
    </div>
    <!--end col-->
  </div>
</template>
