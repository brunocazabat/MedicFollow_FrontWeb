<script>
export default {
  name: 'faq',
}
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="text-center mb-5">
          <h1 class="mb-3 ff-secondary fw-semibold lh-base text-uppercase text-success text-center">FAQ</h1>
          <h4 class="mb-3 fw-semibold" data-key="t-faqintro t-askus t-repsoon">{{ $t("t-faqintro") }}
            <br />{{ $t("t-askus") }}<br />{{ $t("t-repsoon") }}
          </h4>
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
            <h5 class="mb-0 fw-semibold" data-key="t-genquests">{{ $t("t-genquests") }}</h5>
          </div>
        </div>
        <div class="accordion custom-accordionwithicon custom-accordion-border accordion-border-box"
          id="genques-accordion">
          <div class="accordion-item">
            <h2 class="accordion-header" id="genques-headingOne">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#genques-collapseOne" aria-expanded="false" aria-controls="genques-collapseOne"
                data-key="t-whatfaq">{{ $t("t-whatfaq") }}
              </button>
            </h2>
            <div id="genques-collapseOne" class="accordion-collapse collapse" aria-labelledby="genques-headingOne"
              data-bs-parent="#genques-accordion">
              <div class="accordion-body ff-secondary" data-key="t-whatfaqtext">{{ $t("t-whatfaqtext") }}
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="genques-headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#genques-collapseTwo" aria-expanded="false" aria-controls="genques-collapseTwo"
                data-key="t-whatmf">{{ $t("t-whatmf") }}
              </button>
            </h2>
            <div id="genques-collapseTwo" class="accordion-collapse collapse" aria-labelledby="genques-headingTwo"
              data-bs-parent="#genques-accordion">
              <div class="accordion-body ff-secondary" data-key="t-whatmftext">{{ $t("t-whatmftext") }}
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="genques-headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#genques-collapseThree" aria-expanded="false" aria-controls="genques-collapseThree"
                data-key="t-wheremf">{{ $t("t-wheremf") }}
              </button>
            </h2>
            <div id="genques-collapseThree" class="accordion-collapse collapse" aria-labelledby="genques-headingThree"
              data-bs-parent="#genques-accordion">
              <div class="accordion-body ff-secondary" data-key="t-wheremftext">{{ $t("t-wheremftext") }}
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="genques-headingFour">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#genques-collapseFour" aria-expanded="false" aria-controls="genques-collapseFour"
                data-key="t-costmf">{{ $t("t-costmf") }}
              </button>
            </h2>
            <div id="genques-collapseFour" class="accordion-collapse collapse" aria-labelledby="genques-headingFour"
              data-bs-parent="#genques-accordion">
              <div class="accordion-body ff-secondary" data-key="t-costmftext">{{ $t("t-costmftext") }}
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="genques-headingFive">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#genques-collapseFive" aria-expanded="false" aria-controls="genques-collapseFive"
                data-key="t-langmf">{{ $t("t-langmf") }}
              </button>
            </h2>
            <div id="genques-collapseFive" class="accordion-collapse collapse" aria-labelledby="genques-headingFive"
              data-bs-parent="#genques-accordion">
              <div class="accordion-body ff-secondary" data-key="t-langmftext">{{ $t("t-langmftext") }}
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="genques-headingSix">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#genques-collapseSix" aria-expanded="false" aria-controls="genques-collapseSix"
                data-key="t-probmf">{{ $t("t-probmf") }}
              </button>
            </h2>
            <div id="genques-collapseSix" class="accordion-collapse collapse" aria-labelledby="genques-headingSix"
              data-bs-parent="#genques-accordion">
              <div class="accordion-body ff-secondary" data-key="t-probmftext">{{ $t("t-probmftext") }}
              </div>
            </div>
          </div>
        </div>
        <!--end accordion-->
      </div>

      <div class="col-lg-6">
        <div class="d-flex align-items-center mb-2">
          <div class="flex-shrink-0 me-1">
            <em class="ri-shield-keyhole-line fs-24 align-middle text-success me-1"></em>
          </div>
          <div class="flex-grow-1">
            <h5 class="mb-0 fw-semibold" data-key="t-confsecu">{{ $t("t-confsecu") }}</h5>
          </div>
        </div>

        <div class="accordion custom-accordionwithicon custom-accordion-border accordion-border-box"
          id="privacy-accordion">
          <div class="accordion-item">
            <h2 class="accordion-header" id="privacy-headingOne">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#privacy-collapseOne" aria-expanded="false" aria-controls="privacy-collapseOne"
                data-key="t-secucenter">{{ $t("t-secucenter") }}
              </button>
            </h2>
            <div id="privacy-collapseOne" class="accordion-collapse collapse" aria-labelledby="privacy-headingOne"
              data-bs-parent="#privacy-accordion">
              <div class="accordion-body ff-secondary" data-key="t-secucentertext">{{ $t("t-secucentertext") }}
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="privacy-headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#privacy-collapseTwo" aria-expanded="false" aria-controls="privacy-collapseTwo"
                data-key="t-yourdata">{{ $t("t-yourdata") }}
              </button>
            </h2>
            <div id="privacy-collapseTwo" class="accordion-collapse collapse" aria-labelledby="privacy-headingTwo"
              data-bs-parent="#privacy-accordion">
              <div class="accordion-body ff-secondary" data-key="t-yourdatatext">{{ $t("t-yourdatatext") }}
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="privacy-headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#privacy-collapseThree" aria-expanded="false" aria-controls="privacy-collapseThree"
                data-key="t-install">{{ $t("t-install") }}
              </button>
            </h2>
            <div id="privacy-collapseThree" class="accordion-collapse collapse" aria-labelledby="privacy-headingThree"
              data-bs-parent="#privacy-accordion">
              <div class="accordion-body ff-secondary" data-key="t-installtext">{{ $t("t-installtext") }}
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="privacy-headingFour">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#privacy-collapseFour" aria-expanded="false" aria-controls="privacy-collapseFour"
                data-key="t-deleteacc">{{ $t("t-deleteacc") }}
              </button>
            </h2>
            <div id="privacy-collapseFour" class="accordion-collapse collapse" aria-labelledby="privacy-headingFour"
              data-bs-parent="#privacy-accordion">
              <div class="accordion-body ff-secondary" data-key="t-deleteacctext">{{ $t("t-deleteacctext") }}
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="privacy-headingFive">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#privacy-collapseFive" aria-expanded="false" aria-controls="privacy-collapseFive"
                data-key="t-howcontact">{{ $t("t-howcontact") }}
              </button>
            </h2>
            <div id="privacy-collapseFive" class="accordion-collapse collapse" aria-labelledby="privacy-headingFive"
              data-bs-parent="#privacy-accordion">
              <div class="accordion-body ff-secondary" data-key="t-howcontacttext">{{ $t("t-howcontacttext") }}
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="privacy-headingSix">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#privacy-collapseSix" aria-expanded="false" aria-controls="privacy-collapseSix"
                data-key="t-notanswered">{{ $t("t-notanswered") }}
              </button>
            </h2>
            <div id="privacy-collapseSix" class="accordion-collapse collapse" aria-labelledby="privacy-headingSix"
              data-bs-parent="#privacy-accordion">
              <div class="accordion-body ff-secondary" data-key="t-notansweredtext">{{ $t("t-notansweredtext") }}
              </div>
            </div>
          </div>
        </div>
        <!--end accordion-->
      </div>

    </div>
    <!-- end row -->
  </div>
</template>
