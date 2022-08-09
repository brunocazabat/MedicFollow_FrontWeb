<script>
import { ref, watch } from "vue";
import useVuelidate from "@vuelidate/core";
import Layout from "../../components/layouts/main.vue";
import DropZone from "@/components/widgets/dropZone";
import PageHeader from "@/components/frames/page-header";
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
    };
  },
  components: {
    Layout,
    PageHeader,
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
    <PageHeader :title="title" :items="items" />

    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-header align-items-center d-flex">
            <h4 class="card-title mb-0 flex-grow-1">Bug Report</h4>
            <div class="flex-shrink-0">
            </div>
          </div>
          <!-- end card header -->

          <div class="card-body">

            <div class="live-preview">
              <form action="javascript:void(0);" class="row g-3">

                <!-- Bug Report message box -->
                <div class="mb-6">
                  <label for="VertimeassageInput" class="form-label">Message</label>
                  <textarea class="form-control" id="VertimeassageInput" rows="3"
                    placeholder="Enter your Bug Report here" required></textarea>
                  <div class="invalid-feedback">
                    Please enter a message in the textarea.
                  </div>
                </div>

                <!-- File Upload Dropzone -->
                <div class="card-body">
                  <p class="text-muted">
                    You can upload files to help us understand your Bug Report better.
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
                  <!-- end dropzon-preview -->
                </div>

                <div class="col-md-4">

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

                <!-- Anonymous text -->
                <p class="text-muted">
                  Leave this part of this form <span class="fw-medium">unfilled</span> if you want to send this report
                  anonymously, you could also fill only the information you wish to.
                </p>

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
                    <input type="text" class="form-control" id="emailfloatingInput" placeholder="Enter your email" />
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

                <!-- Agree on ToU text -->
                <p class="text-muted">
                  By sending us a Bug Report, you are agreeing on using our <span class="fw-medium">Terms of Use</span>.
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

                <!-- Submit button -->
                <div class="col-12">
                  <div class="text-muted">
                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!--end row-->

  </Layout>
</template>
