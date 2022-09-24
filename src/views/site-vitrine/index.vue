<script>
// IMPORT SECTIONS VITRINE
// NAVBAR
import navbar from "./components/navbar.vue";
// SECTIONS
import intro from "./components/intro.vue";
import project from "./components/project.vue";
import history from "./components/history.vue";
import solutions from './components/solutions.vue';
import tarification from './components/tarification.vue';
import team from "./components/team.vue";
// CONTACT
import faq from './components/faq.vue';
import contact from "./components/contact.vue";
// FOOTER
import footervit from "./components/footer.vue";
// TOOLS
import signupnow from "./components/signupnow.vue";
import counter from "./components/counter.vue";


export default {
  name: 'SiteVitrine',
  components: {
    // NAVBAR
    navbar,
    // SECTIONS
    intro,
    project,
    history,
    solutions,
    tarification,
    team,
    // CONTACT
    faq,
    contact,
    // FOOTER
    footervit,
    // TOOLS
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

    <!-- FOOTER -->
    <footer class="custom-footer bg-primary py-5 position-relative">
      <footervit />
    </footer>
    <!-- END FOOTER -->
  </div>
</template>
