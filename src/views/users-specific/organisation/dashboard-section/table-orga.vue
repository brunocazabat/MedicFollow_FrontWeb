<script>
import { CountTo } from "vue3-count-to";
import TableOrgaDocteurs from "./components/table-orga-doc.vue";

export default {
  components: {
    CountTo,
    TableOrgaDocteurs
  },
};
</script>

<template>
  <div class="row">
    <div class="col-xxl-4 col-sm-6">
      <div class="card">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <div>
              <p class="fw-medium text-muted mb-0" data-key="t-numbdoctors">{{ $t('t-numbdoctors') }}</p>
              <h2 class="mt-4 ff-secondary fw-semibold" data-key="t-doctors">
                <count-to :duration="1000" :startVal="0" :endVal="30"></count-to> {{ $t('t-doctors') }}
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
      <!-- end card-->
    </div>
    <!--end col-->
    <div class="col-xxl-4 col-sm-6">
      <div class="card">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <div>
              <p class="fw-medium text-muted mb-0" data-key="t-numbpersonnals">{{ $t('t-numbpersonnals') }}</p>
              <h2 class="mt-4 ff-secondary fw-semibold" data-key="t-personnals">
                <count-to :duration="1000" :startVal="0" :endVal="90"></count-to> {{ $t('t-personnals') }}
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
    <div class="col-xxl-4 col-sm-6">
      <div class="card">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <div>
              <p class="fw-medium text-muted mb-0" data-key="t-numbpatients">{{ $t('t-numbpatients') }}</p>
              <h2 class="mt-4 ff-secondary fw-semibold" data-key="t-patients">
                <count-to :duration="1000" :startVal="0" :endVal="210"></count-to> {{ $t('t-patients') }}
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
  </div>
  <!--end row-->

  <div class="row">
    <div class="col-lg-12">
      <div class="card" id="orgalist">
        <TableOrgaDocteurs />
      </div>
      <!--end card-->
    </div>
    <!--end col-->
  </div>
</template>
