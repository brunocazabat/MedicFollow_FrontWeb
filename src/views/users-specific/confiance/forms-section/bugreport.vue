<script>
// Importing general components
import Layout from "@/components/view-related/layout/main.vue";
import footermodule from "@/components/view-related/login-components/footer-module.vue";

// Importing specific components
import FeedbackModule from "./feedbackModules.vue"
import BugReportModule from "./bugReportModules.vue"
import ContactUsModule from "./contactUsModule.vue"


// TODO: Correct a bug which makes the alert show if the fields are not filled

export default {
  data() {
    return {
      title: "Contact",
      items: [
        {
          text: "Forms",
          href: "/",
        },
        {
          text: "Contact",
          active: true,
        },
      ],
    };
  },
  components: {
    Layout,
    footermodule,
    FeedbackModule,
    BugReportModule,
    ContactUsModule,
  },
  methods: {},
};
</script>

<template>
  <Layout>

    <!-- Background Cover -->
    <div class="position-relative mx-n4 mt-n4">
      <div class="profile-wid-bg profile-setting-img">
        <img src="@/assets/images/covers/auth-one-bg.jpg" class="profile-wid-img" alt="" />
      </div>
    </div>

    <!-- !!!!!!!!!!!!!!!!!!!!!!!!! FORM NAVIGATION !!!!!!!!!!!!!!!!!!!!!!!!! -->
    <div class="col-xxl-12">
      <div class="card mt-xxl-n5">
        <div class="card-header mb-0">
          <ul class="nav nav-tabs-custom rounded card-header-tabs border-bottom-0" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" data-bs-toggle="tab" href="#feedback" role="tab" data-key="t-suggestform">
                <em class="fas fa-home"></em>
                {{ $t("t-suggestform") }}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#bugReport" role="tab" data-key="t-bugform">
                <em class="far fa-user"></em>
                {{ $t("t-bugform") }}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#contactUs" role="tab" data-key="t-contactus">
                <em class="far fa-user"></em>
                {{ $t("t-contactus") }}
              </a>
            </li>
          </ul>
        </div>

        <!-- !!!!!!!!!!!!!!!!!!!!!!!!! FEEDBACK/SUGGESTION REPORT FORM !!!!!!!!!!!!!!!!!!!!!!!!! -->

        <div class="card-body p-6 forms-background-pattern">
          <div class="tab-content">
            <div class="tab-pane active" id="feedback" role="tabpanel">
              <form action="javascript:void(0);">

                <FeedbackModule />

              </form>
            </div>

            <!-- !!!!!!!!!!!!!!!!!!!!!!!!! BUG REPORT FORM !!!!!!!!!!!!!!!!!!!!!!!!! -->

            <div class="tab-pane" id="bugReport" role="tabpanel">
              <form action="javascript:void(0);">

                <BugReportModule />

              </form>
            </div>


            <!-- !!!!!!!!!!!!!!!!!!!!!!!!! CONTACT US TAB !!!!!!!!!!!!!!!!!!!!!!!!! -->
            <div class="tab-pane" id="contactUs" role="tabpanel">
              <form action="javascript:void(0);">

                <ContactUsModule />

              </form>
            </div>


          </div>
        </div>
      </div>
      <footermodule />
    </div>
  </Layout>
</template>
