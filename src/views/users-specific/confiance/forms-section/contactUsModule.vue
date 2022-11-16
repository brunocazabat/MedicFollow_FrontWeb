<script>
import ContactUsComponent from "@/components/view-related/form-components/contact-us/contact-us.vue";

export default {
  components: {
    ContactUsComponent,
  },
};
</script>

<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title mb-4">{{ $t("t-contactus") }}</h4>
          <ContactUsComponent />
        </div>
      </div>
    </div>
  </div>
</template>
