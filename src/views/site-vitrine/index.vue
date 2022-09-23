<script>
import SwiperCore, { Thumbs, Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'
import { CountTo } from 'vue3-count-to'
SwiperCore.use([Thumbs, Navigation, Pagination])

import navbar from "./components/navbar.vue";
import intro from "./components/intro.vue";
import project from "./components/project.vue";
import history from "./components/history.vue";
import solutions from './components/solutions.vue';

import team from "./components/team.vue";
import contact from "./components/contact.vue";
import footervit from "./components/footer.vue";
import signupnow from "./components/signupnow.vue";


export default {
  name: 'SiteVitrine',
  data() {
    return {
      title: 'Starter',
      items: [
        {
          text: 'Pages',
          href: '/'
        },
        {
          text: 'Starter',
          active: true
        }
      ]
    }
  },
  components: {
    CountTo,
    navbar,
    intro,
    project,
    history,
    solutions,
    team,
    contact,
    footervit,
    signupnow,
  },
  methods: {
    monthly() {
      const highlightedItems = document.querySelectorAll('.month')
      highlightedItems.forEach(function (userItem) {
        userItem.style.display = 'block'
      })
      const highlightedItems2 = document.querySelectorAll('.annual')
      highlightedItems2.forEach(function (userItem) {
        userItem.style.display = 'none'
      })
    },
    anually() {
      const highlightedItems = document.querySelectorAll('.month')
      highlightedItems.forEach(function (userItem) {
        userItem.style.display = 'none'
      })
      const highlightedItems2 = document.querySelectorAll('.annual')
      highlightedItems2.forEach(function (userItem) {
        userItem.style.display = 'block'
      })
    },
  },
  mounted() {
    this.monthly()
    document.getElementById('plan-switch').addEventListener('change', () => {
      if (document.getElementById('plan-switch').checked == true) {
        this.anually()
      } else if (document.getElementById('plan-switch').checked == false) {
        this.monthly()
      }
    })
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
    <section class="section pb-0 hero-section" id="hero">
      <intro />
    </section>
    <!-- END INTRO -->

    <!-- PROJECT -->
    <section class="section" id="services">
      <project />
    </section>
    <!-- END PROJECT -->

    <!-- HISTORY -->
    <section class="section bg-light py-5" id="features">
      <history />
    </section>
    <!-- END HISTORY -->

    <!-- SIGNUPNOW -->
    <section class="py-5 bg-primary position-relative">
      <signupnow />
    </section>
    <!-- END SIGNUPNOW -->

    <!-- SOLUTIONS -->
    <section class="section">
      <solutions />
    </section>
    <!-- END SOLUTIONS -->

    <!-- start plan -->
    <section class="section bg-light" id="plans">
      <div class="bg-overlay bg-overlay-pattern"></div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="text-center mb-5">
              <h3 class="mb-3 fw-semibold">
                Pourquoi nous choisir ?
              </h3>
              <p class="text-muted mb-4">
                Tarification simplifiée. Pas de frais cachés. Fonctionnalités avancées pour votre organisation médicale.
              </p>
            </div>
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->

        <div class="row gy-4">
          <div class="col-lg-6">
            <div class="card plan-box mb-0">
              <div class="card-body p-4 m-2">
                <div class="d-flex align-items-center">
                  <div class="flex-grow-1">
                    <h5 class="mb-1 fw-semibold">Plan Basique</h5>
                    <p class="text-muted mb-0">Pour les organisation médicales</p>
                  </div>
                  <div class="avatar-sm">
                    <div class="avatar-title bg-light rounded-circle text-primary">
                      <em class="ri-book-mark-line fs-20"></em>
                    </div>
                  </div>
                </div>
                <div class="py-4 text-center">
                  <h1>
                    <sup><small>€</small></sup><span class="ff-secondary fw-bold">19</span>
                    <span class="fs-13 text-muted">/Month</span>
                  </h1>
                </div>

                <div>
                  <ul class="list-unstyled text-muted vstack gap-3 ff-secondary">
                    <li>
                      <div class="d-flex">
                        <div class="flex-shrink-0 text-success me-1">
                          <em class="ri-checkbox-circle-fill fs-15 align-middle"></em>
                        </div>
                        <div class="flex-grow-1">Upto <b>3</b> Projects</div>
                      </div>
                    </li>
                    <li>
                      <div class="d-flex">
                        <div class="flex-shrink-0 text-success me-1">
                          <em class="ri-checkbox-circle-fill fs-15 align-middle"></em>
                        </div>
                        <div class="flex-grow-1">Upto <b>299</b> Customers</div>
                      </div>
                    </li>
                    <li>
                      <div class="d-flex">
                        <div class="flex-shrink-0 text-success me-1">
                          <em class="ri-checkbox-circle-fill fs-15 align-middle"></em>
                        </div>
                        <div class="flex-grow-1">Scalable Bandwidth</div>
                      </div>
                    </li>
                    <li>
                      <div class="d-flex">
                        <div class="flex-shrink-0 text-success me-1">
                          <em class="ri-checkbox-circle-fill fs-15 align-middle"></em>
                        </div>
                        <div class="flex-grow-1"><b>5</b> FTP Login</div>
                      </div>
                    </li>
                    <li>
                      <div class="d-flex">
                        <div class="flex-shrink-0 text-success me-1">
                          <em class="ri-checkbox-circle-fill fs-15 align-middle"></em>
                        </div>
                        <div class="flex-grow-1"><b>24/7</b> Support</div>
                      </div>
                    </li>
                    <li>
                      <div class="d-flex">
                        <div class="flex-shrink-0 text-success me-1">
                          <em class="ri-checkbox-circle-fill fs-15 align-middle"></em>
                        </div>
                        <div class="flex-grow-1"><b>Unlimited</b> Storage</div>
                      </div>
                    </li>
                    <li>
                      <div class="d-flex">
                        <div class="flex-shrink-0 text-success me-1">
                          <em class="ri-checkbox-circle-fill fs-15 align-middle"></em>
                        </div>
                        <div class="flex-grow-1">Domain</div>
                      </div>
                    </li>
                  </ul>
                  <div class="mt-4">
                    <a href="javascript:void(0);" class="btn btn-soft-success w-100">Get Started</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--end col-->
          <div class="col-lg-6">
            <div class="card plan-box mb-0">
              <div class="card-body p-4 m-2">
                <div class="d-flex align-items-center">
                  <div class="flex-grow-1">
                    <h5 class="mb-1 fw-semibold">Plan Basique</h5>
                    <p class="text-muted mb-0">Pour les médecins membre</p>
                  </div>
                  <div class="avatar-sm">
                    <div class="avatar-title bg-light rounded-circle text-primary">
                      <em class="ri-stack-fill fs-20"></em>
                    </div>
                  </div>
                </div>
                <div class="py-4 text-center">
                  <h1>
                    <sup><small>€</small></sup><span class="ff-secondary fw-bold">39</span>
                    <span class="fs-13 text-muted">/Month</span>
                  </h1>
                </div>

                <div>
                  <ul class="list-unstyled text-muted vstack gap-3 ff-secondary">
                    <li>
                      <div class="d-flex">
                        <div class="flex-shrink-0 text-success me-1">
                          <em class="ri-checkbox-circle-fill fs-15 align-middle"></em>
                        </div>
                        <div class="flex-grow-1"><b>Unlimited</b> Projects</div>
                      </div>
                    </li>
                    <li>
                      <div class="d-flex">
                        <div class="flex-shrink-0 text-success me-1">
                          <em class="ri-checkbox-circle-fill fs-15 align-middle"></em>
                        </div>
                        <div class="flex-grow-1">
                          <b>Unlimited</b> Customers
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="d-flex">
                        <div class="flex-shrink-0 text-success me-1">
                          <em class="ri-checkbox-circle-fill fs-15 align-middle"></em>
                        </div>
                        <div class="flex-grow-1">Scalable Bandwidth</div>
                      </div>
                    </li>
                    <li>
                      <div class="d-flex">
                        <div class="flex-shrink-0 text-success me-1">
                          <em class="ri-checkbox-circle-fill fs-15 align-middle"></em>
                        </div>
                        <div class="flex-grow-1">
                          <b>Unlimited</b> FTP Login
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="d-flex">
                        <div class="flex-shrink-0 text-success me-1">
                          <em class="ri-checkbox-circle-fill fs-15 align-middle"></em>
                        </div>
                        <div class="flex-grow-1"><b>24/7</b> Support</div>
                      </div>
                    </li>
                    <li>
                      <div class="d-flex">
                        <div class="flex-shrink-0 text-success me-1">
                          <em class="ri-checkbox-circle-fill fs-15 align-middle"></em>
                        </div>
                        <div class="flex-grow-1"><b>Unlimited</b> Storage</div>
                      </div>
                    </li>
                    <li>
                      <div class="d-flex">
                        <div class="flex-shrink-0 text-success me-1">
                          <em class="ri-checkbox-circle-fill fs-15 align-middle"></em>
                        </div>
                        <div class="flex-grow-1">Domain</div>
                      </div>
                    </li>
                  </ul>
                  <div class="mt-4">
                    <a href="javascript:void(0);" class="btn btn-soft-success w-100">Get Started</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!-- end container -->
    </section>
    <!-- end plan -->

    <!-- start faqs -->
    <section class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="text-center mb-5">
              <h3 class="mb-3 fw-semibold">Frequently Asked Questions</h3>
              <p class="text-muted mb-4 ff-secondary">
                If you can not find answer to your question in our FAQ, you can
                always contact us or email us. We will answer you shortly!
              </p>

              <div class="">
                <button type="button" class="btn btn-primary btn-label rounded-pill">
                  <em class="ri-mail-line label-icon align-middle rounded-pill fs-16 me-2"></em>
                  Email Us
                </button>
                <button type="button" class="btn btn-info btn-label rounded-pill">
                  <em class="ri-twitter-line label-icon align-middle rounded-pill fs-16 me-2"></em>
                  Send Us Tweet
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- end row -->

        <div class="row g-lg-5 g-4">
          <div class="col-lg-6">
            <div class="d-flex align-items-center mb-2">
              <div class="flex-shrink-0 me-1">
                <em class="ri-question-line fs-24 align-middle text-success me-1"></em>
              </div>
              <div class="flex-grow-1">
                <h5 class="mb-0 fw-semibold">General Questions</h5>
              </div>
            </div>
            <div class="accordion custom-accordionwithicon custom-accordion-border accordion-border-box"
              id="genques-accordion">
              <div class="accordion-item">
                <h2 class="accordion-header" id="genques-headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#genques-collapseOne" aria-expanded="true" aria-controls="genques-collapseOne">
                    What is the purpose of using themes ?
                  </button>
                </h2>
                <div id="genques-collapseOne" class="accordion-collapse collapse show"
                  aria-labelledby="genques-headingOne" data-bs-parent="#genques-accordion">
                  <div class="accordion-body ff-secondary">
                    A theme is a set of colors, fonts, effects, and more that
                    can be applied to your entire presentation to give it a
                    consistent, professional look. You've already been using a
                    theme, even if you didn't know it: the default Office theme,
                    which consists.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="genques-headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#genques-collapseTwo" aria-expanded="false" aria-controls="genques-collapseTwo">
                    Can a theme have more than one theme?
                  </button>
                </h2>
                <div id="genques-collapseTwo" class="accordion-collapse collapse" aria-labelledby="genques-headingTwo"
                  data-bs-parent="#genques-accordion">
                  <div class="accordion-body ff-secondary">
                    A story can have as many themes as the reader can identify
                    based on recurring patterns and parallels within the story
                    itself. In looking at ways to separate themes into a
                    hierarchy, we might find it useful to follow the example of
                    a single book.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="genques-headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#genques-collapseThree" aria-expanded="false" aria-controls="genques-collapseThree">
                    What are theme features?
                  </button>
                </h2>
                <div id="genques-collapseThree" class="accordion-collapse collapse"
                  aria-labelledby="genques-headingThree" data-bs-parent="#genques-accordion">
                  <div class="accordion-body ff-secondary">
                    Theme features is a set of specific functionality that may
                    be enabled by theme authors. Themes must register each
                    individual Theme Feature that the author wishes to support.
                    Theme support functions should be called in the theme's
                    functions.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="genques-headingFour">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#genques-collapseFour" aria-expanded="false" aria-controls="genques-collapseFour">
                    What is simple theme?
                  </button>
                </h2>
                <div id="genques-collapseFour" class="accordion-collapse collapse" aria-labelledby="genques-headingFour"
                  data-bs-parent="#genques-accordion">
                  <div class="accordion-body ff-secondary">
                    Simple is a free WordPress theme, by Themify, built exactly
                    what it is named for: simplicity. Immediately upgrade the
                    quality of your WordPress site with the simple theme To use
                    the built-in Chrome theme editor.
                  </div>
                </div>
              </div>
            </div>
            <!--end accordion-->
          </div>
          <!-- end col -->
          <div class="col-lg-6">
            <div class="d-flex align-items-center mb-2">
              <div class="flex-shrink-0 me-1">
                <em class="ri-shield-keyhole-line fs-24 align-middle text-success me-1"></em>
              </div>
              <div class="flex-grow-1">
                <h5 class="mb-0 fw-semibold">Privacy &amp; Security</h5>
              </div>
            </div>

            <div class="accordion custom-accordionwithicon custom-accordion-border accordion-border-box"
              id="privacy-accordion">
              <div class="accordion-item">
                <h2 class="accordion-header" id="privacy-headingOne">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#privacy-collapseOne" aria-expanded="false" aria-controls="privacy-collapseOne">
                    Does Word have night mode?
                  </button>
                </h2>
                <div id="privacy-collapseOne" class="accordion-collapse collapse" aria-labelledby="privacy-headingOne"
                  data-bs-parent="#privacy-accordion">
                  <div class="accordion-body ff-secondary">
                    You can run Microsoft Word in dark mode, which uses a dark
                    color palette to help reduce eye strain in low light
                    settings. You can choose to make the document white or black
                    using the Switch Modes button in the ribbon's View tab.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="privacy-headingTwo">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#privacy-collapseTwo" aria-expanded="true" aria-controls="privacy-collapseTwo">
                    Is theme an opinion?
                  </button>
                </h2>
                <div id="privacy-collapseTwo" class="accordion-collapse collapse show"
                  aria-labelledby="privacy-headingTwo" data-bs-parent="#privacy-accordion">
                  <div class="accordion-body ff-secondary">
                    A theme is an opinion the author expresses on the subject,
                    for instance, the author's dissatisfaction with the narrow
                    confines of French bourgeois marriage during that period
                    theme is an idea that a writer repeats.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="privacy-headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#privacy-collapseThree" aria-expanded="false" aria-controls="privacy-collapseThree">
                    How do you develop a theme?
                  </button>
                </h2>
                <div id="privacy-collapseThree" class="accordion-collapse collapse"
                  aria-labelledby="privacy-headingThree" data-bs-parent="#privacy-accordion">
                  <div class="accordion-body ff-secondary">
                    A short story, novella, or novel presents a narrative to its
                    reader. Perhaps that narrative involves mystery, terror,
                    romance, comedy, or all of the above. These works of fiction
                    may also contain memorable characters, vivid world-building,
                    literary devices.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="privacy-headingFour">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#privacy-collapseFour" aria-expanded="false" aria-controls="privacy-collapseFour">
                    Do stories need themes?
                  </button>
                </h2>
                <div id="privacy-collapseFour" class="accordion-collapse collapse" aria-labelledby="privacy-headingFour"
                  data-bs-parent="#privacy-accordion">
                  <div class="accordion-body ff-secondary">
                    A story can have as many themes as the reader can identify
                    based on recurring patterns and parallels within the story
                    itself. In looking at ways to separate themes into a
                    hierarchy, we might find it useful to follow the example of
                    a single book.
                  </div>
                </div>
              </div>
            </div>
            <!--end accordion-->
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </section>
    <!-- end faqs -->

    <!-- start counter -->
    <section class="py-5 position-relative bg-light">
      <div class="container">
        <div class="row text-center gy-4">
          <div class="col-lg-3 col-6">
            <div>
              <h2 class="mb-2">
                <count-to :startVal="0" :endVal="100" :duration="5000">0</count-to>+
              </h2>
              <div class="text-muted">Projects Completed</div>
            </div>
          </div>
          <!-- end col -->

          <div class="col-lg-3 col-6">
            <div>
              <h2 class="mb-2">
                <count-to :startVal="0" :endVal="24" :duration="5000">0</count-to>
              </h2>
              <div class="text-muted">Win Awards</div>
            </div>
          </div>
          <!-- end col -->

          <div class="col-lg-3 col-6">
            <div>
              <h2 class="mb-2">
                <count-to :startVal="0" :endVal="20" :duration="5000">0</count-to>k
              </h2>
              <div class="text-muted">Satisfied Clients</div>
            </div>
          </div>
          <!-- end col -->
          <div class="col-lg-3 col-6">
            <div>
              <h2 class="mb-2">
                <count-to :startVal="0" :endVal="50" :duration="5000">0</count-to>
              </h2>
              <div class="text-muted">Employees</div>
            </div>
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </section>
    <!-- end counter -->

    <!-- start Work Process -->
    <section class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="text-center mb-5">
              <h3 class="mb-3 fw-semibold">Our Work Process</h3>
              <p class="text-muted mb-4 ff-secondary">
                In an ideal world this website wouldn’t exist, a client would
                acknowledge the importance of having web copy before the Proin
                vitae ipsum vel ex finibus semper design starts.
              </p>
            </div>
          </div>
        </div>
        <!-- end row -->

        <div class="row text-center">
          <div class="col-lg-4">
            <div class="process-card mt-4">
              <div class="process-arrow-img d-none d-lg-block">
                <img src="@/assets/images/users/avatar-1.png" alt="" class="img-fluid" />
              </div>
              <div class="avatar-sm icon-effect mx-auto mb-4">
                <div class="avatar-title bg-transparent text-success rounded-circle h1">
                  <em class="ri-quill-pen-line"></em>
                </div>
              </div>

              <h5>Tell us what you need</h5>
              <p class="text-muted ff-secondary">
                The profession and the employer and your desire to make your
                mark.
              </p>
            </div>
          </div>
          <!-- end col -->
          <div class="col-lg-4">
            <div class="process-card mt-4">
              <div class="process-arrow-img d-none d-lg-block">
                <img src="@/assets/images/users/avatar-1.png" alt="" class="img-fluid" />
              </div>
              <div class="avatar-sm icon-effect mx-auto mb-4">
                <div class="avatar-title bg-transparent text-success rounded-circle h1">
                  <em class="ri-user-follow-line"></em>
                </div>
              </div>

              <h5>Get free quotes</h5>
              <p class="text-muted ff-secondary">
                The most important aspect of beauty was, therefore, an inherent
                part.
              </p>
            </div>
          </div>
          <!-- end col -->
          <div class="col-lg-4">
            <div class="process-card mt-4">
              <div class="avatar-sm icon-effect mx-auto mb-4">
                <div class="avatar-title bg-transparent text-success rounded-circle h1">
                  <em class="ri-book-mark-line"></em>
                </div>
              </div>

              <h5>Deliver high quality product</h5>
              <p class="text-muted ff-secondary">
                We quickly learn to fear and thus automatically avoid
                potentially.
              </p>
            </div>
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </section>
    <!-- end Work Process -->

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

    <!-- SIGNUPNOW -->
    <section class="py-5 bg-primary position-relative">
      <signupnow />
    </section>
    <!-- END SIGNUPNOW -->

    <!-- FOOTER -->
    <footer class="custom-footer bg-dark py-5 position-relative">
      <footervit />
    </footer>
    <!-- END FOOTER -->
  </div>
</template>
