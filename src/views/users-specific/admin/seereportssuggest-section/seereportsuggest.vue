<script>
import Layout from "@/components/view-related/layout/main.vue";
import TableAdminBug from "./components/bug-report-table.vue";
import TableAdminSug from "./components/suggestions-table.vue";

export default {
  components: {
    Layout,
    TableAdminBug,
    TableAdminSug
  },
  methods: {
    makevisible(value) {
      switch (value) {
        case "buglist":
          document.getElementById(value).style.display = "block";
          document.getElementById("suggestlist").style.display = "none";
          break;
        case "suggestlist":
          document.getElementById(value).style.display = "block";
          document.getElementById("buglist").style.display = "none";
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
  <Layout>
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
                  <button class="nav-link fs-15 p-3" id="pills-payment-tab" data-bs-toggle="pill" type="button"
                    role="tab" @click="makevisible('suggestlist')" data-key="t-looksugglist">
                    {{ $t('t-looksugglist') }}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div id="buglist">
        <TableAdminBug />
      </div>
      <!--end card-->
      <div id="suggestlist">
        <TableAdminSug />
      </div>
      <!--end card-->
    </div>
    <!--end col-->
  </Layout>
</template>
