<script>
// IMPORT SECTIONS VITRINE
import { navbar, intro, project, history, solutions, tarification, team, faq, contact, footervit, signupnow, counter } from "./components";


export default {
  name: 'SiteVitrine',
  components: {
    navbar,
    intro,
    project,
    history,
    solutions,
    tarification,
    team,
    faq,
    contact,
    footervit,
    signupnow,
    counter
  },
  mounted() {
    document.querySelector('.currentyear').innerHTML =
      new Date().getFullYear() + ' © MedicFollow - MedicFollow'
  }
}
</script>
  
<template>
  <div class="layout-wrapper landing">
    <!-- NAVBAR -->
    <navbar />
    <!-- END NAVBAR -->

    <!-- INTRO -->
    <section class="section pb-0 hero-section">
      <intro />
    </section>
    <!-- END INTRO -->

    <!-- PROJECT -->
    <section class="section" id="project">
      <project />
    </section>
    <!-- END PROJECT -->

    <!-- COUNTER -->
    <section class="py-5 position-relative bg-light">
      <counter />
    </section>
    <!-- END COUNTER -->

    <!-- HISTORY -->
    <section class="section bg-light py-5" id="history">
      <history />
    </section>
    <!-- END HISTORY -->

    <!-- SIGNUPNOW -->
    <section class="py-5 bg-primary position-relative">
      <signupnow />
    </section>
    <!-- END SIGNUPNOW -->

    <!-- SOLUTIONS -->
    <section class="section" id="solutions">
      <solutions />
    </section>
    <!-- END SOLUTIONS -->

    <!-- TARIFICATION -->
    <section class="section bg-light">
      <tarification />
    </section>
    <!-- END TARIFICATION -->

    <!-- SIGNUPNOW -->
    <section class="py-5 bg-primary position-relative">
      <signupnow />
    </section>
    <!-- END SIGNUPNOW -->

    <!-- TEAM -->
    <section class="section bg-light" id="team">
      <team />
    </section>
    <!-- END TEAM -->

    <!-- CONTACT -->
    <section class="section" id="contact">
      <contact />
    </section>
    <!-- END CONTACT -->

    <!-- FAQ -->
    <section class="section">
      <faq />
    </section>
    <!-- END FAQ -->

    <footer class="custom-footer py-5 position-relative">
      <footervit />
    </footer>
  </div>
</template>
