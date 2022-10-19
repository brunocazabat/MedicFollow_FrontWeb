<script>
export default {
  name: 'team',
}
</script>
    
<template>
  <div class="bg-overlay bg-overlay-pattern opacity-50"></div>
  <div class="container">
    <div class="row align-items-center gy-4">
      <div class="col-sm">
        <div>
          <h4 class="text-white mb-0 fw-semibold" data-key="t-signupnow">{{ $t("t-signupnow") }}
          </h4>
        </div>
      </div>

      <div class="col-sm-auto">
        <div>
          <router-link to="/register-mail" class="btn btn-light" style="margin:5px" data-key="t-signup">{{
          $t("t-signup") }}
          </router-link>
        </div>
      </div>

    </div>
    <!-- end row -->
  </div>
  <!-- end container -->
</template>
