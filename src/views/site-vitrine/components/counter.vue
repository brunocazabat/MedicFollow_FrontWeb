<script>
import { CountTo } from 'vue3-count-to';

export default {
  name: 'counter',
  components: {
    CountTo
  },
}
</script>

<template>
  <div class="container">
    <div class="row text-center gy-4">
      <div class="col-lg-3 col-6">
        <div>
          <h2 class="mb-2">
            <count-to :startVal="0" :endVal="15" :duration="4000">15</count-to>
          </h2>
          <div class="text-muted">Beta-Testeurs</div>
        </div>
      </div>
      <!-- end col -->

      <div class="col-lg-3 col-6">
        <div>
          <h2 class="mb-2">
            <count-to :startVal="0" :endVal="30" :duration="4000">30</count-to>+
          </h2>
          <div class="text-muted">Retours Positifs</div>
        </div>
      </div>
      <!-- end col -->

      <div class="col-lg-3 col-6">
        <div>
          <h2 class="mb-2">
            <count-to :startVal="0" :endVal="3" :duration="4000">3</count-to>
          </h2>
          <div class="text-muted">Applications Fonctionnelles</div>
        </div>
      </div>
      <!-- end col -->
      <div class="col-lg-3 col-6">
        <div>
          <h2 class="mb-2">
            <count-to :startVal="0" :endVal="7" :duration="4000">7</count-to>
          </h2>
          <div class="text-muted">Employés</div>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </div>
</template>
