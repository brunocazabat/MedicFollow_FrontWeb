<script>
import timeline from "./timeline.vue"
export default {
  name: 'history',
  components: {
    timeline
  }
}
</script>
  
<template>
  <div class="container">
    <div class="row align-items-center gy-4">
      <div class="col-lg-6 col-sm-7 mx-auto">
        <div>
          <img src="@/assets/images/logo/logo-short.png" alt="" class="img-fluid mx-auto" />
        </div>
      </div>
      <div class="col-lg-6">
        <h2 style="margin-bottom: 50px;">Notre histoire:</h2>
        <div class="text-muted">
          <div class="avatar-sm icon-effect mb-4">
            <div class="avatar-title bg-transparent rounded-circle text-success h1">
              <em class="ri-vip-crown-line"></em>
            </div>
          </div>
          <h2 class="mb-3 fs-30">Des débuts prometteurs:</h2>
          <p class="mb-4 ff-secondary fs-16">
            MedicFollow, ayant été élu le meilleur projet EIP à Epitech Marseille, a été désigné pour être présenté
            à "L’Accélérateur M", une association spécialisée dans l’aide et le soutien aux jeunes entreprises du
            territoire.
          </p>

          <div class="row pt-3">
            <div class="col-3">
              <div class="text-center">
                <h4>15</h4>
                <p>Beta-Testeurs</p>
              </div>
            </div>
            <div class="col-3">
              <div class="text-center">
                <h4>30+</h4>
                <p>Retours Positifs</p>
              </div>
            </div>
            <div class="col-4">
              <div class="text-center">
                <h4>2</h4>
                <p>Apps Opérationelles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end col -->
    </div>
    <div class="row align-items-center text-center" style="margin-top: 80px;">
      <timeline />
    </div>
    <!-- end row -->
  </div>
</template>
