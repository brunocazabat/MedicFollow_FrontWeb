<script>
import { CountTo } from "vue3-count-to";
import TableAdminBug from "./components/table-admin-bug.vue";
import TableAdminSug from "./components/table-admin-sug.vue";
import TableAdminOrg from "./components/table-admin-org.vue";

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
      <div class="card">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <div>
              <p class="fw-medium text-muted mb-0" data-key="t-openbugrep">{{ $t('t-openbugrep') }}</p>
              <h2 class="mt-4 ff-secondary fw-semibold" data-key="t-totreat">
                <count-to :duration="1000" :startVal="0" :endVal="18"></count-to> {{ $t('t-totreat') }}
              </h2>
            </div>
            <div>
              <div class="avatar-sm flex-shrink-0">
                <span class="avatar-title bg-soft-info text-info rounded-circle fs-4">
                  <em class="mdi mdi-bug-check"></em>
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
      <div class="card">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <div>
              <p class="fw-medium text-muted mb-0" data-key="t-opensuggest">{{ $t('t-opensuggest') }}</p>
              <h2 class="mt-4 ff-secondary fw-semibold" data-key="t-totreat">
                <count-to :duration="1000" :startVal="0" :endVal="40"></count-to> {{ $t('t-totreat') }}
              </h2>
            </div>
            <div>
              <div class="avatar-sm flex-shrink-0">
                <span class="avatar-title bg-soft-info text-info rounded-circle fs-4">
                  <em class="mdi mdi-format-quote-open"></em>
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
      <div class="card">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <div>
              <p class="fw-medium text-muted mb-0" data-key="t-registorga">{{ $t('t-registorga') }}</p>
              <h2 class="mt-4 ff-secondary fw-semibold">
                <count-to :duration="1000" :startVal="0" :endVal="5"></count-to>
              </h2>
            </div>
            <div>
              <div class="avatar-sm flex-shrink-0">
                <span class="avatar-title bg-soft-info text-info rounded-circle fs-4">
                  <em class="mdi mdi-account-check-outline"></em>
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
      <div class="card">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <div>
              <p class="fw-medium text-muted mb-0" data-key="t-todo">{{ $t('t-todo') }}</p>
              <h2 class="mt-4 ff-secondary fw-semibold" data-key="t-remain">
                <count-to :duration="1000" :startVal="0" :endVal="58"></count-to> {{ $t('t-remain') }}
              </h2>
            </div>
            <div>
              <div class="avatar-sm flex-shrink-0">
                <span class="avatar-title bg-soft-info text-info rounded-circle fs-4">
                  <em class="mdi mdi-timer"></em>
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
                  role="tab" @click="makevisible('buglist')" data-key="t-lookbugrep">
                  {{ $t('t-lookbugrep') }}
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link fs-15 p-3" id="pills-payment-tab" data-bs-toggle="pill" type="button" role="tab"
                  @click="makevisible('suggestlist')" data-key="t-looksugglist">
                  {{ $t('t-looksugglist') }}
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link fs-15 p-3" id="pills-finish-tab" data-bs-toggle="pill" type="button" role="tab"
                  @click="makevisible('orgalist')" data-key="t-lookorgalist">
                  {{ $t('t-lookorgalist') }}
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
