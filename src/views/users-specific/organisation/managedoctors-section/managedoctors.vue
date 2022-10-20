<script>
import Layout from "@/components/view-related/layout/main.vue";
import TableManageDoctors from "./components/manage-doctors-table.vue";
import TableManagePersonnels from "./components/manage-personnel-table.vue";

export default {
  components: {
    Layout,
    TableManageDoctors,
    TableManagePersonnels
  },
  methods: {
    makevisible(value) {
      switch (value) {
        case "doctorlist":
          document.getElementById(value).style.display = "block";
          document.getElementById("personnellist").style.display = "none";
          break;
        case "personnellist":
          document.getElementById(value).style.display = "block";
          document.getElementById("doctorlist").style.display = "none";
          break;
      }
    },
  },
  mounted() {
    this.makevisible("doctorlist");
  },
};
</script>

<template>
  <Layout>
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <div class="table-responsive table-card">
              <ul class="nav nav-pills nav-justified custom-nav" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link fs-15 p-3 active" id="pills-bill-info-tab" data-bs-toggle="pill" type="button"
                    role="tab" @click="makevisible('doctorlist')" data-key="t-lookdoctors">
                    {{ $t('t-lookdoctors') }}
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link fs-15 p-3" id="pills-payment-tab" data-bs-toggle="pill" type="button"
                    role="tab" @click="makevisible('personnellist')" data-key="t-lookpersonnels">
                    {{ $t('t-lookpersonnels') }}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div id="doctorlist">
        <TableManageDoctors />
      </div>
      <!--end card-->
      <div id="personnellist">
        <TableManagePersonnels />
      </div>
      <!--end card-->
    </div>
    <!--end col-->
  </Layout>
</template>
