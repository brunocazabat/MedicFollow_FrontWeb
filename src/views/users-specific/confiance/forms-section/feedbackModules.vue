<script>
import SuggestionComponent from "@/components/view-related/form-components/suggestions/suggestion.vue";

export default {
  components: {
    SuggestionComponent,
  },
};
</script>

<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title mb-4">{{ $t("t-suggest") }}</h4>
          <SuggestionComponent />
        </div>
      </div>
    </div>
  </div>
</template>
