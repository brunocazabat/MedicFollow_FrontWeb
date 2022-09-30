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
          <h4 class="text-white mb-0 fw-semibold">
            Vous êtes un professionel de la santé, vous êtes une organisation à but médical ?
          </h4>
        </div>
      </div>
      <!-- end col -->
      <div class="col-sm-auto">
        <div>
          <router-link to="/register-mail" class="btn btn-light" style="margin:5px">Sign Up
          </router-link>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </div>
  <!-- end container -->
</template>
