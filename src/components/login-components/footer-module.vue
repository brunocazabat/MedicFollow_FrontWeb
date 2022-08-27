<script>
export default {
  name: "footermodule",
};
</script>

<template>
  <footer class="footer" style="background: inherit !important">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="text-center">
            <p class="mb-0 text-muted" data-key="t-footer t-footer-bis">
              &copy; {{ new Date().getFullYear() }} {{ $t("t-footer") }}
              <em class="mdi mdi-heart text-danger"></em> {{
                  $t("t-footer-bis")
              }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
