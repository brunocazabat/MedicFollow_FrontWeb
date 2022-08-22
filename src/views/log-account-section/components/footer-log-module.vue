<script>
export default {
  name: "footerlogmodule",
};
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="text-center">
            <p class="mb-0 text-muted">
              &copy; {{ new Date().getFullYear() }} MedicFollow. Crafted with
              <em class="mdi mdi-heart text-danger"></em> by MedicFollow
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
