<script>
import Slider from "@vueform/slider";
import Layout from "@/components/layouts/main.vue";
import appConfig from "@/../app.config";

export default {
  page: {
    title: "Bug Report",
    meta: [{ name: "description", content: appConfig.description }],
  },
  data() {
    return {
      title: "Bug Report",
      items: [
        {
          text: "Forms",
          href: "/",
        },
        {
          text: "Bug Report",
          active: true,
        },
      ],
      sliderDashVal: 50,
      sliderMedSumVal: 50,
      sliderCalVal: 50,
      sliderSettingsVal: 50,
      sliderWaitingVal: 50,
      sliderDesignVal: 50,
    };
  },
  components: {
    Slider,
    Layout,
  },
  methods: {
    /**
     * Range and label slider set range
     */
    callbackRange(val) {
      this.sliderWithLabel.rangeValue = val;
    },
    /**
     * Loading slider
     */
    startLoad() {
      this.loader = setInterval(() => {
        this.loadingValue++;
        if (this.loadingValue === 100) {
          clearInterval(this.loader);
        }
      }, 100);
    },
  },
  mounted() {
    const checkbox = document.getElementsByClassName("code-switcher");
    Array.from(checkbox).forEach((check) => {
      check.addEventListener("change", () => {
        const card = check.closest(".card");
        const preview = card.querySelector(".live-preview");
        const code = card.querySelector(".code-view");
        if (check.checked) {
          // do this
          preview.classList.add("d-none");
          code.classList.remove("d-none");
        } else {
          // do that
          preview.classList.remove("d-none");
          code.classList.add("d-none");
        }
      });
    });
  },
};
</script>

<template>
  <Layout>

    <!-- Background Cover -->
    <div class="position-relative mx-n4 mt-n4">
      <div class="profile-wid-bg profile-setting-img">
        <img src="@/assets/images/covers/auth-one-bg.jpg" class="profile-wid-img" alt="" />
      </div>
    </div>

    <!-- FORM NAVIGATION -->
    <!--end col-->
    <div class="col-xxl-12">
      <div class="card mt-xxl-n5">
        <div class="card-header mb-0">
          <ul class="nav nav-tabs-custom rounded card-header-tabs border-bottom-0" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" data-bs-toggle="tab" href="#feedback" role="tab" data-key="t-suggestform">
                <em class="fas fa-home"></em>
                {{ $t("t-suggestform") }}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#bugReport" role="tab" data-key="t-bugform">
                <em class="far fa-user"></em>
                {{ $t("t-bugform") }}
              </a>
            </li>
          </ul>
        </div>

        <div class="card-body p-6 forms-background-pattern">
          <div class="tab-content">
            <div class="tab-pane active" id="feedback" role="tabpanel">
              <form action="javascript:void(0);">
                <div class="row">

                  <div class="p-3 mb-0">
                    <h3 class="font-size-14 mb-2 mt-0" data-key="t-letusknowyou">{{ $t("t-letusknowyou") }}</h3>
                    <p class="text-muted mb-2" data-key="t-bttrunderstandingtxt">{{ $t("t-bttrunderstandingtxt") }}</p>
                  </div>

                  <!-- EMAIL -->
                  <!-- CHECK HOW TO MAKE SMALLER BOX -->
                  <div class="mb-0 p-3 md-4">
                    <div class="col-md-4">
                      <div class="form-floating">
                        <input type="text" class="form-control" id="feedbackEmailInput" placeholder="Enter your email"
                          required />
                        <label for="feedbackEmailInput" data-key="t-email">{{ $t("t-email") }}</label>
                      </div>
                    </div>
                  </div>

                  <!-- COUNTRY -->
                  <!-- CHECK HOW TO MAKE SMALLER BOX -->
                  <div class="mb-0 p-3 md-4">
                    <div class="col-md-4">
                      <div class="form-floating">
                        <input type="text" class="form-control" id="feedbackCountryInput"
                          placeholder="Enter your country" required />
                        <label for="feedbackCountryInput" data-key="t-country">{{ $t("t-country") }}</label>
                      </div>
                    </div>
                  </div>

                  <!-- GENDER LIST -->
                  <div class="mb-0 p-3">
                    <div class="col-md-4">
                      <label for="chooseGenderSelect" class="form-label" data-key="t-gender">{{ $t("t-gender")
                      }}</label>
                      <select class="form-select" id="chooseGenderSelect" required>
                        <option data-key="t-selectgender" selected>{{ $t("t-selectgender") }}</option>
                        <option data-key="t-male" value="male">{{ $t("t-male") }}</option>
                        <option data-key="t-female" value="female">{{ $t("t-female") }}</option>
                        <option data-key="t-other" value="other">{{ $t("t-other") }}</option>
                        <option data-key="t-prefernotsay" value="no-pref">{{ $t("t-prefernotsay") }}</option>
                      </select>
                    </div>
                  </div>

                  <!-- BIRTH DATE SELECTION -->
                  <div class="mb-3 p-3">
                    <div class="col-md-4">
                      <label for="feedbackDateInput" class="form-label" data-key="t-birthdate">{{ $t("t-birthdate")
                      }}</label>
                      <input type="date" class="form-control" id="feedbackDateInput" required>
                    </div>
                  </div>

                  <hr>

                  <!-- SATISFACTION SELECTION -->
                  <div class="col-md-6 mb-3">
                    <div class="p-3">
                      <h3 class="font-size-14 mb-2 mt-0" data-key="t-areusatisfied">{{ $t("t-areusatisfied") }}</h3>
                      <p class="text-muted mb-5" data-key="t-satisfactioneval">{{ $t("t-satisfactioneval") }}</p>

                      <div class="mb-3">
                        <label for="sliderDashboard" class="form-label mb-4" data-key="t-dashboardslider">{{
                            $t("t-dashboardslider")
                        }}</label>
                        <div class="p-3">
                          <Slider id="sliderDashboard" v-model="sliderDashVal" />
                        </div>
                      </div>

                      <div class="mb-3">
                        <label for="sliderMedSum" class="form-label mb-4" data-key="t-visitsumslider">{{
                            $t("t-visitsumslider")
                        }}</label>
                        <div class="p-3">
                          <Slider id="sliderMedSum" v-model="sliderMedSumVal" />
                        </div>
                      </div>

                      <div class="mb-3">
                        <label for="sliderCal" class="form-label mb-4" data-key="t-calslider">{{ $t("t-calslider")
                        }}</label>
                        <div class="p-3">
                          <Slider id="sliderCal" v-model="sliderCalVal" />
                        </div>
                      </div>

                      <div class="mb-3">
                        <label for="sliderSettings" class="form-label mb-4" data-key="t-settingsslider">{{
                            $t("t-settingsslider")
                        }}</label>
                        <div class="p-3">
                          <Slider id="sliderSettings" v-model="sliderSettingsVal" />
                        </div>
                      </div>

                      <div class="mb-3">
                        <label for="sliderWaiting" class="form-label mb-4" data-key="t-waitingslider">{{
                            $t("t-waitingslider")
                        }}</label>
                        <div class="p-3">
                          <Slider id="sliderWaiting" v-model="sliderWaitingVal" />
                        </div>
                      </div>

                      <div class="mb-0">
                        <label for="sliderDesign" class="form-label mb-4" data-key="t-designslider">{{
                            $t("t-designslider")
                        }}</label>
                        <div class="p-3">
                          <Slider id="sliderDesign" v-model="sliderDesignVal" />
                        </div>
                      </div>

                    </div>
                  </div>


                  <hr>


                  <!-- HOW CAN WE IMPROVE OUR SERVICE -->
                  <div class="p-3 mb-3">
                    <div class="col-md-6">
                      <h3 class="font-size-14 mb-2 mt-0" data-key="t-howcanweimprove">{{ $t("t-howcanweimprove") }}</h3>
                      <p class="text-muted mb-4" data-key="t-feedbackinfomsg">{{ $t("t-feedbackinfomsg") }}</p>
                      <textarea class="form-control" id="feedbackImproveInput" rows="3" placeholder="Write here..."
                        required></textarea>
                    </div>
                  </div>

                  <hr>

                  <!-- FILE UPLOAD -->
                  <div class="p-3 mb-3">
                    <div class="col-md-4">
                      <h3 class="font-size-14 mb-2 mt-0" data-key="t-questionuploaddoc">
                        {{ $t("t-questionuploaddoc") }}
                      </h3>
                      <p class="text-muted mb-4">You can, for instance, send us an image or a pdf file.</p>
                      <input class="form-control" type="file" id="feedbackFileUpload">
                    </div>
                  </div>

                  <hr>

                  <!-- Agree on ToU text -->
                  <div class="p-3 mb-3 card-body">
                    <p class="text-muted">
                      By sending us a feedback, you are agreeing on using our <span class="fw-medium">Terms of
                        Use</span>.
                    </p>
                    <!-- Agree on ToU check box -->
                    <div class="col-12">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="feedbackGridCheck" required />
                        <label class="form-check-label" for="feedbackGridCheck">
                          I have read and accepted the Terms of Use
                        </label>
                      </div>
                      <div class="invalid-feedback">You have to check this box</div>
                    </div>
                  </div>


                  <!-- Submit button -->
                  <div class="p-3 col-12">
                    <div class="text-muted">
                      <button type="submit" class="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>

              </form>
            </div>

            <!-- !!!!!!!!!!!!!!!!!!!!!!!!! BUG REPORT FORM !!!!!!!!!!!!!!!!!!!!!!!!! -->

            <div class="tab-pane" id="bugReport" role="tabpanel">
              <form action="javascript:void(0);">
                <div class="row">

                  <!-- ISSUE TITLE -->
                  <div class="p-3 mb-0">
                    <div class="col-md-6">
                      <h3 class="font-size-14 mb-0 mt-0">What is your issue?</h3>
                      <p class="text-muted mb-3">Write it as a title, for instance: I cannot login to Medic'Follow.</p>
                      <input type="text" class="form-control" id="bugIssueInput" placeholder="Write the issue here..."
                        required />
                      <div class="invalid-feedback">
                        Please input your issue here.
                      </div>
                    </div>
                  </div>

                  <!-- PAGE OF THE ISSUE -->
                  <div class="p-3 mb-0">
                    <div class="col-md-6">
                      <label for="bugPageInput" class="form-label">On what page did you encounter the issue</label>
                      <input type="text" class="form-control" rows="3" id="bugPageInput"
                        placeholder="Write the page here..." required />
                      <div class="invalid-feedback">
                        Please input the title of the page where you encountered the issue in this textarea.
                      </div>
                    </div>
                  </div>

                  <!-- ISSUE STEPS TO REPRODUCE -->
                  <div class="p-3 mb-0">
                    <div class="col-md-6">
                      <label for="bugStepsInput" class="form-label">Steps to reproduce the issue</label>
                      <textarea type="text" class="form-control" rows="3" id="bugStepsInput"
                        placeholder="Write the steps here..." required></textarea>
                      <div class="invalid-feedback">
                        Please input the steps to reproduce the issue in this textarea.
                      </div>
                    </div>
                  </div>

                  <!-- EXPECTED RESULT -->
                  <div class="p-3 mb-0">
                    <div class="col-md-6">
                      <label for="bugExpectedInput" class="form-label">Expected result</label>
                      <input type="text" class="form-control" id="bugExpectedInput"
                        placeholder="Write the expected result here..." required />
                      <div class="invalid-feedback">
                        Please input the expected result here.
                      </div>
                    </div>
                  </div>

                  <!-- RESULT OBTAINED -->
                  <div class="p-3 mb-3">
                    <div class="col-md-6">
                      <label for="bugExpectedInput" class="form-label">Result obtained</label>
                      <input type="text" class="form-control" id="bugExpectedInput"
                        placeholder="Write the obtained result here..." required />
                      <div class="invalid-feedback">
                        Please input the obtained result here.
                      </div>
                    </div>
                  </div>

                  <hr>

                  <!-- SUBTITLE -->
                  <div class="p-3 mb-0">
                    <div class="col-md-6">
                      <h3 class="font-size-14 mb-3 mt-0">Other information</h3>
                    </div>
                  </div>

                  <!-- WHICH BROWSER ARE YOU USING -->
                  <div class="mb-0 p-3">
                    <div class="col-md-4">
                      <label for="chooseBrowserSelect" class="form-label">Select your internet browser</label>
                      <select class="form-select" id="chooseBrowserSelect" required>
                        <option selected>Select browser...</option>
                        <option value="chrome">Google Chrome</option>
                        <option value="firefox">Mozilla Firefox</option>
                        <option value="m-edge">Microsoft Edge</option>
                        <option value="ie">Internet Explorer</option>
                        <option value="safari">Safari</option>
                        <option value="opera">Opera</option>
                        <option value="other-browser">Other</option>
                      </select>
                      <div class="invalid-feedback">Please choose an internet browser.</div>
                    </div>
                  </div>

                  <!-- WHICH DEVICE ARE YOU USING -->
                  <div class="mb-0 p-3">
                    <div class="col-md-4">
                      <label for="chooseDeviceSelect" class="form-label">Select your device</label>
                      <select class="form-select" id="chooseDeviceSelect" required>
                        <option selected>Select device...</option>
                        <option value="pc">PC</option>
                        <option value="laptop">Laptop</option>
                        <option value="smartphone">Smartphone</option>
                        <option value="tablet">Tablet</option>
                        <option value="other">Other device</option>
                      </select>
                      <div class="invalid-feedback">Please select a device.</div>
                    </div>
                  </div>

                  <!-- EMAIL -->
                  <!-- CHECK HOW TO MAKE SMALLER BOX -->
                  <div class="mb-0 p-3 md-4">
                    <div class="col-md-4">
                      <div class="form-floating">
                        <input type="text" class="form-control" id="bugEmailInput" placeholder="Enter your email" />
                        <label for="bugEmailInput">Email</label>
                      </div>
                      <p class="text-muted">Email is not mandatory but it could be useful to contact you in case we are
                        having trouble with your issue.</p>
                    </div>
                  </div>

                  <hr>

                  <!-- FILE UPLOAD -->
                  <div class="p-3 mb-3">
                    <div class="col-md-4">
                      <h3 class="font-size-14 mb-2 mt-0">Do you want to upload a file?</h3>
                      <p class="text-muted mb-4">You can, for example, send us a screenshot.</p>
                      <input class="form-control" type="file" id="bugFileUpload">
                    </div>
                  </div>

                  <hr>


                  <!-- Agree on ToU text -->
                  <div class="p-3 card-body mb-0">
                    <p class="text-muted">
                      By sending us a bug report, you are agreeing on using our <span class="fw-medium">Terms of
                        Use</span>.
                    </p>
                    <!-- Agree on ToU check box -->
                    <div class="col-12">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="bugGridCheck" required />
                        <label class="form-check-label" for="bugGridCheck">
                          I have read and accepted the Terms of Use
                        </label>
                      </div>
                      <div class="invalid-feedback">You have to check this box</div>
                    </div>
                  </div>


                  <!-- Submit button -->
                  <div class="p-3 col-12">
                    <div class="text-muted">
                      <button type="submit" class="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  </Layout>
</template>
