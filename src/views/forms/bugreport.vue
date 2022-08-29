<script>
import Slider from "@vueform/slider";
import { ref, watch } from "vue";
import useVuelidate from "@vuelidate/core";
import Layout from "../../layouts/main.vue";
import DropZone from "@/components/widgets/dropZone";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

export default {
  page: {
    title: "Bug Report",
    meta: [{ name: "description", content: appConfig.description }],
  },
  setup() {
    let files = ref([]);
    let dropzoneFile = ref("");
    const drop = (e) => {
      dropzoneFile.value = e.dataTransfer.files[0];
      files.value.push(dropzoneFile.value);
    };
    const selectedFile = () => {
      dropzoneFile.value = document.querySelector(".dropzoneFile").files[0];
      files.value.push(dropzoneFile.value);
    };
    watch(
      () => [...files.value],
      (currentValue) => {
        return currentValue;
      }
    );

    return { dropzoneFile, files, drop, selectedFile, v$: useVuelidate() };
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
    PageHeader,
    DropZone,
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
    <PageHeader :title="title" :items="items" />

    <!-- Background Cover -->
    <div class="position-relative mx-n4 mt-n4">
      <div class="profile-wid-bg profile-setting-img">
        <img src="@/assets/images/auth-one-bg.jpg" class="profile-wid-img" alt="" />
      </div>
    </div>

    <!-- FORM NAVIGATION -->
    <!--end col-->
    <div class="col-xxl-12">
      <div class="card mt-xxl-n5">
        <div class="card-header mb-0">
          <ul class="nav nav-tabs-custom rounded card-header-tabs border-bottom-0" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" data-bs-toggle="tab" href="#feedback" role="tab">
                <em class="fas fa-home"></em>
                User Feedback Form
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#bugReport" role="tab">
                <em class="far fa-user"></em>
                Bug Report
              </a>
            </li>
          </ul>
        </div>

        <div class="card-body p-6">
          <div class="tab-content">
            <div class="tab-pane active" id="feedback" role="tabpanel">
              <form action="javascript:void(0);">
                <div class="row">

                  <div class="p-3 mb-0">
                    <h3 class="font-size-14 mb-2 mt-0">First, let us know you better</h3>
                    <p class="text-muted mb-2">This allows us to have a better understanding of the feedback.</p>
                  </div>

                  <!-- EMAIL -->
                  <!-- CHECK HOW TO MAKE SMALLER BOX -->
                  <div class="mb-0 p-3 md-4">
                    <div class="col-md-4">
                      <div class="form-floating">
                        <input type="text" class="form-control" id="emailfloatingInput"
                          placeholder="Enter your email" />
                        <label for="emailfloatingInput">Email</label>
                      </div>
                    </div>

                  </div>

                  <!-- COUNTRY -->
                  <!-- CHECK HOW TO MAKE SMALLER BOX -->
                  <div class="mb-0 p-3 md-4">
                    <div class="col-md-4">
                      <div class="form-floating">
                        <input type="text" class="form-control" id="countryfloatingInput"
                          placeholder="Enter your country" />
                        <label for="countryfloatingInput">Country</label>
                      </div>
                    </div>
                  </div>

                  <!-- GENDER LIST -->
                  <div class="mb-0 p-3">
                    <div class="col-md-4">
                      <label for="chooseGenderSelect" class="form-label">Gender</label>
                      <select class="form-select" id="chooseGenderSelect" required>
                        <option selected>Select gender...</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        <option value="no-pref">Prefer not to say</option>
                      </select>
                      <div class="invalid-feedback">Please choose a gender</div>
                    </div>
                  </div>

                  <!-- BIRTH DATE SELECTION -->
                  <div class="mb-3 p-3">
                    <div class="col-md-4">
                      <label for="exampleInputdate" class="form-label">Date of birth</label>
                      <input type="date" class="form-control" id="exampleInputdate" required>
                    </div>
                  </div>

                  <hr>

                  <!-- SATISFACTION SELECTION -->
                  <div class="col-md-6 mb-3">
                    <div class="p-3">
                      <h3 class="font-size-14 mb-2 mt-0">Are you satisfied about our service?</h3>
                      <p class="text-muted mb-5">0 means unsatisfied, 100 means very satisfied</p>

                      <div class="mb-3">
                        <label for="sliderDashboard" class="form-label mb-4">Dashboard Information</label>
                        <div class="p-3">
                          <Slider id="sliderDashboard" v-model="sliderDashVal" />
                        </div>
                      </div>

                      <div class="mb-3">
                        <label for="sliderMedSum" class="form-label mb-4">Content of the medical visit summary</label>
                        <div class="p-3">
                          <Slider id="sliderMedSum" v-model="sliderMedSumVal" />
                        </div>
                      </div>

                      <div class="mb-3">
                        <label for="sliderCal" class="form-label mb-4">Calendar usage</label>
                        <div class="p-3">
                          <Slider id="sliderCal" v-model="sliderCalVal" />
                        </div>
                      </div>

                      <div class="mb-3">
                        <label for="sliderSettings" class="form-label mb-4">Settings options diversity</label>
                        <div class="p-3">
                          <Slider id="sliderSettings" v-model="sliderSettingsVal" />
                        </div>
                      </div>

                      <div class="mb-3">
                        <label for="sliderWaiting" class="form-label mb-4">Waiting time</label>
                        <div class="p-3">
                          <Slider id="sliderWaiting" v-model="sliderWaitingVal" />
                        </div>
                      </div>

                      <div class="mb-0">
                        <label for="sliderDesign" class="form-label mb-4">Design of the website</label>
                        <div class="p-3">
                          <Slider id="sliderDesign" v-model="sliderDesignVal" />
                        </div>
                      </div>

                    </div>
                  </div>


                  <hr>


                  <!-- HOW CAN WE IMPROVE OUR SERVICE -->
                  <div class="p-3 mb-3">
                    <h3 class="font-size-14 mb-2 mt-0">How can we improve our service?</h3>
                    <p class="text-muted mb-4">Please be as precise as possible, this is our main way to understand your
                      feedback.</p>
                    <textarea class="form-control" id="VertimeassageInput" rows="3" placeholder="Write here..."
                      required></textarea>
                    <div class="invalid-feedback">
                      Please input your feedback in the textarea.
                    </div>
                  </div>

                  <hr>

                  <!-- FILE UPLOAD -->
                  <div class="p-3 mb-3">
                    <h3 class="font-size-14 mb-2 mt-0">Do you want to upload a file?</h3>
                    <p class="text-muted mb-4">You can, for example, send us a screenshot.</p>
                    <input class="form-control" type="file" id="formFileMultiple">
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
                        <input class="form-check-input" type="checkbox" id="gridCheck" required />
                        <label class="form-check-label" for="gridCheck">
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

            <div class="tab-pane" id="bugReport" role="tabpanel">
              <form action="javascript:void(0);">
                <div class="row">

                  <!-- ISSUE TITLE -->
                  <div class="p-3 mb-0">
                    <div class="col-md-6">
                      <h3 class="font-size-14 mb-3 mt-0">What is your issue?</h3>
                      <input type="text" class="form-control" id="bugIssueTitle" placeholder="Write here..." required />
                      <div class="invalid-feedback">
                        Please input your issue here.
                      </div>
                    </div>
                  </div>

                  <!-- ISSUE STEPS TO REPRODUCE -->
                  <div class="p-3 mb-0">
                    <div class="col-md-6">
                      <label for="bugSteps" class="form-label">Steps to reproduce the issue</label>
                      <textarea type="text" class="form-control" rows="3" id="bugSteps" placeholder="Write here..."
                        required></textarea>
                      <div class="invalid-feedback">
                        Please input the steps to reproduce the issue in this textarea.
                      </div>
                    </div>
                  </div>

                  <!-- EXPECTED RESULT -->
                  <div class="p-3 mb-0">
                    <div class="col-md-6">
                      <label for="bugExpected" class="form-label">Expected result</label>
                      <input type="text" class="form-control" id="bugExpected" placeholder="Write here..." required />
                      <div class="invalid-feedback">
                        Please input the expected result here.
                      </div>
                    </div>
                  </div>

                  <!-- RESULT OBTAINED -->
                  <div class="p-3 mb-0">
                    <div class="col-md-6">
                      <label for="bugExpected" class="form-label">Result obtained</label>
                      <input type="text" class="form-control" id="bugExpected" placeholder="Write here..." required />
                      <div class="invalid-feedback">
                        Please input the obtained result here.
                      </div>
                    </div>
                  </div>

                  <!-- WHICH BROWSER ARE YOU USING -->

                  <!-- WHICH DEVICE ARE YOU USING -->

                  <!-- POSSIBLE ADRESS EMAIL -->

                  <!-- BUG REPORT TEXT ZONE -->
                  <div class="mb-6">
                    <label for="VertimeassageInput" class="form-label">Message</label>
                    <textarea class="form-control" id="VertimeassageInput" rows="3"
                      placeholder="Enter your bug report here" required></textarea>
                    <div class="invalid-feedback">
                      Please enter your bug report message in the textarea.
                    </div>
                  </div>

                  <!-- FILE UPLOAD -->
                  <div class="card-body">
                    <p class="text-muted">
                      You can upload files to help us understand your bug report better.
                    </p>

                    <DropZone @drop.prevent="drop" @change="selectedFile" />
                    <ul class="list-unstyled mb-0" id="dropzone-preview">
                      <div class="border rounded" v-for="(file, index) of files" :key="index">
                        <div class="d-flex p-2">
                          <div class="flex-grow-1">
                            <div class="pt-1">
                              <h5 class="fs-14 mb-1" data-dz-name="">
                                {{ file.name }}
                              </h5>
                              <p class="fs-13 text-muted mb-0" data-dz-size="">
                                <strong>{{ file.size / 1024 }}</strong> KB
                              </p>
                              <strong class="error text-danger" data-dz-errormessage=""></strong>
                            </div>
                          </div>
                          <div class="flex-shrink-0 ms-3">
                            <button data-dz-remove="" class="btn btn-sm btn-danger" @click="deleteRecord">
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </ul>
                  </div>

                  <!-- CATEGORY LIST -->
                  <div class="col-md-2">
                    <div class="col-auto">
                      <label for="chooseCategorySelect" class="form-label">Category</label>
                      <select class="form-select" id="chooseCategorySelect" required>
                        <option selected value="login">Login Page</option>
                        <option value="dashboard">Home Page</option>
                        <option value="calendar">Calendar Page</option>
                        <option value="chat">Chat Page</option>
                        <option value="settings">Settings Page</option>
                        <option value="feedback">Feedback Page</option>
                        <option value="bug">Bug Report Page</option>
                        <option value="locked">Locked Login Page</option>
                        <option value="tou">Terms of Use</option>
                      </select>
                      <div class="invalid-feedback">Choose a category</div>
                    </div>
                  </div>

                  <!-- ANONYMOUS PART -->
                  <div class="card-body row">
                    <label for="fullnamefloatingInput" class="form-label text-muted">
                      Leave this part of this form <span class="fw-medium">unfilled</span> if you want to send this
                      report
                      anonymously, you could also fill only the information you wish to.
                    </label>

                    <!-- Full name box -->
                    <div class="col-lg-4">
                      <div class="form-floating">
                        <input type="text" class="form-control" id="fullnamefloatingInput"
                          placeholder="Enter your full name" />
                        <label for="fullnamefloatingInput">Full Name</label>
                      </div>
                    </div>
                    <!-- Email box -->
                    <div class="col-lg-4">
                      <div class="form-floating">
                        <input type="text" class="form-control" id="emailfloatingInput"
                          placeholder="Enter your email" />
                        <label for="emailfloatingInput">Email</label>
                      </div>
                    </div>
                    <!-- Country box -->
                    <div class="col-lg-4">
                      <div class="form-floating">
                        <input type="text" class="form-control" id="countryfloatingInput"
                          placeholder="Enter your country" />
                        <label for="countryfloatingInput">Country</label>
                      </div>
                    </div>
                  </div>

                  <!-- Agree on ToU text -->
                  <div class="card-body">
                    <p class="text-muted">
                      By sending us a bug report, you are agreeing on using our <span class="fw-medium">Terms of
                        Use</span>.
                    </p>
                    <!-- Agree on ToU check box -->
                    <div class="col-12">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck" required />
                        <label class="form-check-label" for="gridCheck">
                          I have read and accepted the Terms of Use
                        </label>
                      </div>
                      <div class="invalid-feedback">You have to check this box</div>
                    </div>
                  </div>


                  <!-- Submit button -->
                  <div class="col-12">
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
