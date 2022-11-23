<script>
import Layout from "@/components/view-related/layout/main.vue";
import { ref, watch } from "vue";
import useVuelidate from "@vuelidate/core";

import Lottie from "@/components/view-related/widgets/lottie.vue";
import DropZone from "@/components/view-related/widgets/dropZone";

export default {
  methods: {
    deleteRecord(ele) {
      ele.target.parentElement.parentElement.remove();
    },
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
      title: "Medical Visit Summary",
      items: [
        {
          text: "Staff Input",
          href: "/",
        },
        {
          text: "Medical Visit Summary",
          active: true,
        },
      ],
      value: null,
      value1: null,
      value5: null,
      value2: null,
      value3: null,
      value4: null,
      config: {
        wrap: true, // set wrap to true only when using 'input-group'
        altFormat: "M j, Y",
        altInput: true,
        dateFormat: "d M, Y",
      },
      date: null,
      date1: null,
      date3: null,
    };
  },
  components: {
    Layout,
    lottie: Lottie,
    DropZone,
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
    <div class="row project-wrapper">
      <div class="col-xl-12">
        <div class="card">
          <div class="card-body checkout-tab">
            <form action="#">
              <div class="step-arrow-nav mt-n3 mx-n3 mb-3">
                <ul
                  class="nav nav-pills nav-justified custom-nav"
                  role="tablist"
                >
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link fs-15 p-3 active"
                      id="select-visited-patient-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-bill-info"
                      type="button"
                      role="tab"
                      aria-controls="pills-bill-info"
                      aria-selected="true"
                    >
                      <em
                        class="ri-user-2-line fs-16 p-2 bg-soft-primary text-primary rounded-circle align-middle me-2"
                      ></em>
                      Patient Visited
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link fs-15 p-3"
                      id="medical-visit-summary-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-bill-address"
                      type="button"
                      role="tab"
                      aria-controls="pills-bill-address"
                      aria-selected="false"
                    >
                      <em
                        class="ri-message-3-line fs-16 p-2 bg-soft-primary text-primary rounded-circle align-middle me-2"
                      ></em>
                      Summary of the Visit
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link fs-15 p-3"
                      id="doc-upload-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-payment"
                      type="button"
                      role="tab"
                      aria-controls="pills-payment"
                      aria-selected="false"
                    >
                      <em
                        class="ri-file-add-line fs-16 p-2 bg-soft-primary text-primary rounded-circle align-middle me-2"
                      ></em>
                      Document Upload
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link fs-15 p-3"
                      id="summary-finish-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-finish"
                      type="button"
                      role="tab"
                      aria-controls="pills-finish"
                      aria-selected="false"
                    >
                      <em
                        class="ri-checkbox-circle-line fs-16 p-2 bg-soft-primary text-primary rounded-circle align-middle me-2"
                      ></em
                      >Send
                    </button>
                  </li>
                </ul>
              </div>

              <div class="tab-content">
                <div
                  class="tab-pane fade show active"
                  id="pills-bill-info"
                  role="tabpanel"
                  aria-labelledby="pills-bill-info-tab"
                >
                  <div>
                    <h5 class="mb-1" data-key="t-patientvisited">
                      {{ $t("t-patientvisited") }}.
                    </h5>
                    <p class="text-muted mb-4" data-key="t-patientsearchtxt">
                      {{ $t("t-patientsearchtxt") }}
                    </p>
                  </div>

                  <div>
                    <div class="row">
                      <div class="d-flex justify-content col-sm-6">
                        <div class="search-box col-sm-12">
                          <div class="md-3">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Search Patient..."
                            />
                            <em class="ri-search-line search-icon"></em>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />

                    <div class="row">
                      <div class="col-sm-6">
                        <div class="mb-3">
                          <label
                            for="billinginfo-firstName"
                            class="form-label"
                            data-key="t-firstname"
                            >{{ $t("t-firstname") }}</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="billinginfo-firstName"
                            placeholder="Enter first name"
                            value=""
                          />
                        </div>
                      </div>

                      <div class="col-sm-6">
                        <div class="mb-3">
                          <label
                            for="billinginfo-lastName"
                            class="form-label"
                            data-key="t-lastname"
                            >{{ $t("t-lastname") }}</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="billinginfo-lastName"
                            placeholder="Enter last name"
                            value=""
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-sm-6">
                        <div class="mb-3">
                          <label
                            for="billinginfo-email"
                            class="form-label"
                            data-key="t-roomnbr"
                            >{{ $t("t-roomnbr") }}
                            <span class="text-muted" data-key="t-optional"
                              >({{ $t("t-optional") }})</span
                            ></label
                          >
                          <input
                            type="email"
                            class="form-control"
                            id="billinginfo-email"
                            placeholder="Enter email"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="d-flex align-items-start gap-3 mt-3">
                      <button
                        type="button"
                        class="btn btn-primary btn-label right ms-auto nexttab"
                        data-nexttab="medical-visit-summary-tab"
                        data-key="t-proceedsum"
                      >
                        <em
                          class="ri-message-3-line label-icon align-middle fs-16 ms-2"
                        ></em
                        >{{ $t("t-proceedsum") }}
                      </button>
                    </div>
                  </div>
                </div>
                <!-- end tab pane -->

                <div
                  class="tab-pane fade"
                  id="pills-bill-address"
                  role="tabpanel"
                  aria-labelledby="pills-bill-address-tab"
                >
                  <div>
                    <h5 class="mb-1" data-key="t-visitsum">
                      {{ $t("t-visitsum") }}
                    </h5>
                    <p class="text-muted mb-4" data-key="t-fillinfobelow">
                      {{ $t("t-fillinfobelow") }}
                    </p>
                  </div>

                  <div class="mt-4">
                    <div class="d-flex align-items-center mb-2">
                      <div class="col-sm-12 mb-6">
                        <textarea
                          class="form-control"
                          id="VertimeassageInput"
                          rows="3"
                          placeholder="Enter the summary here..."
                          required
                        ></textarea>
                        <div class="invalid-feedback">
                          Please enter a message in the textarea.
                        </div>
                      </div>
                    </div>

                    <div class="mt-4">
                      <h5 class="fs-14 mb-3" data-key="t-isvisitapproved">
                        {{ $t("t-isvisitapproved") }}
                      </h5>

                      <div class="row g-4">
                        <div class="col-lg-6">
                          <div class="form-check card-radio">
                            <input
                              id="shippingMethod01"
                              name="shippingMethod"
                              type="radio"
                              class="form-check-input"
                              checked
                            />
                            <label
                              class="form-check-label"
                              for="shippingMethod01"
                            >
                              <span
                                class="fs-14 mb-1 text-wrap d-block"
                                data-key="t-yes"
                                >{{ $t("t-yes") }}</span
                              >
                              <span
                                class="text-muted fw-normal text-wrap d-block"
                                data-key="t-visitapproved"
                                >{{ $t("t-visitapproved") }}</span
                              >
                            </label>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="form-check card-radio">
                            <input
                              id="shippingMethod02"
                              name="shippingMethod"
                              type="radio"
                              class="form-check-input"
                            />
                            <label
                              class="form-check-label"
                              for="shippingMethod02"
                            >
                              <span
                                class="fs-14 mb-1 text-wrap d-block"
                                data-key="t-no"
                                >{{ $t("t-no") }}</span
                              >
                              <span
                                class="text-muted fw-normal text-wrap d-block"
                                data-key="t-visitnotapproved"
                                >{{ $t("t-visitnotapproved") }}</span
                              >
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="d-flex align-items-start gap-3 mt-4">
                    <button
                      type="button"
                      class="btn btn-light btn-label previestab"
                      data-previous="patient-visited-tab"
                      data-key="t-backtopatient"
                    >
                      <em
                        class="ri-arrow-left-line label-icon align-middle fs-16 me-2"
                      ></em
                      >{{ $t("t-backtopatient") }}
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary btn-label right ms-auto nexttab"
                      data-nexttab="doc-upload-tab"
                      data-key="t-gotodocupload"
                    >
                      <em
                        class="ri-file-add-line label-icon align-middle fs-16 ms-2"
                      ></em
                      >{{ $t("t-gotodocupload") }}
                    </button>
                  </div>
                </div>
                <!-- end tab pane -->

                <div
                  class="tab-pane fade"
                  id="pills-payment"
                  role="tabpanel"
                  aria-labelledby="pills-payment-tab"
                >
                  <div>
                    <h5 class="mb-1" data-key="t-docupload">
                      {{ $t("t-docupload") }}
                    </h5>
                    <p class="text-muted mb-4" data-key="t-uploaddoctxt">
                      {{ $t("t-uploaddoctxt") }}
                    </p>
                  </div>

                  <!-- File Upload Dropzone -->
                  <div class="card-body">
                    <p class="text-muted" data-key="t-uploadhere">
                      {{ $t("t-uploadhere") }}
                    </p>

                    <DropZone @drop.prevent="drop" @change="selectedFile" />
                    <ul class="list-unstyled mb-0" id="dropzone-preview">
                      <div
                        class="border rounded"
                        v-for="(file, index) of files"
                        :key="index"
                      >
                        <div class="d-flex p-2">
                          <div class="flex-grow-1">
                            <div class="pt-1">
                              <h5 class="fs-14 mb-1" data-dz-name="">
                                {{ file.name }}
                              </h5>
                              <p class="fs-13 text-muted mb-0" data-dz-size="">
                                <strong>{{ file.size / 1024 }}</strong> KB
                              </p>
                              <strong
                                class="error text-danger"
                                data-dz-errormessage=""
                              ></strong>
                            </div>
                          </div>
                          <div class="flex-shrink-0 ms-3">
                            <button
                              data-dz-remove=""
                              class="btn btn-sm btn-danger"
                              @click="deleteRecord"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </ul>
                    <!-- end dropzon-preview -->
                  </div>

                  <div class="d-flex align-items-start gap-3 mt-4">
                    <button
                      type="button"
                      class="btn btn-light btn-label previestab"
                      data-previous="medical-visit-summary-tab"
                      data-key="t-backtosum"
                    >
                      <em
                        class="ri-arrow-left-line label-icon align-middle fs-16 me-2"
                      ></em
                      >{{ $t("t-backtosum") }}
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary btn-label right ms-auto nexttab"
                      data-nexttab="summary-finish-tab"
                      data-key="t-sendsum"
                    >
                      <em
                        class="ri-checkbox-circle-line label-icon align-middle fs-16 ms-2"
                      ></em
                      >{{ $t("t-sendsum") }}
                    </button>
                  </div>
                </div>
                <!-- end tab pane -->

                <div
                  class="tab-pane fade"
                  id="pills-finish"
                  role="tabpanel"
                  aria-labelledby="pills-finish-tab"
                >
                  <div class="text-center py-5">
                    <div class="mb-4">
                      <lottie
                        colors="primary:#0ab39c,secondary:#405189"
                        :options="defaultOptions"
                        :height="120"
                        :width="120"
                      />
                    </div>
                    <h5 data-key="t-sumsent">{{ $t("t-sumsent") }}</h5>
                    <p class="text-muted" data-key="t-sumerror">
                      {{ $t("t-sumerror") }}
                    </p>

                    <h3 class="fw-semibold" data-key="t-medvisitid">
                      {{ $t("t-medvisitid") }}:
                      <router-link
                        to="/ecommerce/order-details"
                        class="text-decoration-underline"
                        >VZ2451</router-link
                      >
                    </h3>
                  </div>
                </div>
                <!-- end tab pane -->
              </div>
              <!-- end tab content -->
            </form>
          </div>
          <!-- end card body -->
        </div>
        <!-- end card -->
      </div>
    </div>
  </Layout>
</template>
