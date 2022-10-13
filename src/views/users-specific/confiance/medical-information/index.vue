<script>
// General imports
import Layout from "@/components/layouts/main.vue";
import FooterModule from "@/components/login-components/footer-module.vue";

// Specific Components imports
import Widgets from "./widgets.vue";
import CheckupText from "./checkup-text.vue";

export default {
  data() {
    return {
      title: "Medical Information",
      items: [
        {
          text: "Medical Information",
        },
        {
          text: "Latest",
          active: true,
        },
      ],
    }
  },
  components: {
    Layout,
    Widgets,
    CheckupText,
    FooterModule
  },
}
</script>

<!-- TEMPLATE -->

<template>
  <Layout>

    <div class="row project-wrapper mf-form-width">
      <!-- Widgets -->
      <div class="row">
        <Widgets />
      </div>
      <!-- Checkup Texts -->
      <div class="row">
        <CheckupText />
      </div>

      <div>
        <!-- Calendar -->
      </div>
    </div>
    <FooterModule />
  </Layout>
</template>

