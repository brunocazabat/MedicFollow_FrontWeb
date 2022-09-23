<script>
export default {
  name: 'counter',
}
</script>

<template>
  <div class="container">
    <div class="row text-center gy-4">
      <div class="col-lg-3 col-6">
        <div>
          <h2 class="mb-2">
            <count-to :startVal="0" :endVal="100" :duration="5000">15</count-to>
          </h2>
          <div class="text-muted">Beta-Testeurs</div>
        </div>
      </div>
      <!-- end col -->

      <div class="col-lg-3 col-6">
        <div>
          <h2 class="mb-2">
            <count-to :startVal="0" :endVal="24" :duration="5000">30</count-to>+
          </h2>
          <div class="text-muted">Retours Positifs</div>
        </div>
      </div>
      <!-- end col -->

      <div class="col-lg-3 col-6">
        <div>
          <h2 class="mb-2">
            <count-to :startVal="0" :endVal="20" :duration="5000">3</count-to>
          </h2>
          <div class="text-muted">Applications Fonctionnelles</div>
        </div>
      </div>
      <!-- end col -->
      <div class="col-lg-3 col-6">
        <div>
          <h2 class="mb-2">
            <count-to :startVal="0" :endVal="50" :duration="5000">7</count-to>
          </h2>
          <div class="text-muted">Employés</div>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </div>
</template>
