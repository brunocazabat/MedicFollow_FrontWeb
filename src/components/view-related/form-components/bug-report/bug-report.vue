<script>
// General Imports
import axios from "axios";
import Swal from "sweetalert2";

// State Imports
import { AuthGetters } from "@/components/back-related/state/helpers";

// Components Imports
import Recaptcha from "@/components/view-related/widgets/recaptchav2.vue";
import DragDropComponent from "@/components/view-related/drag-drop/drag-drop.vue";
import InputComponent from "@/components/view-related/input.vue";
import SelectComponent from "@/components/view-related/select.vue";

export default {
  components: {
    Recaptcha,
    DragDropComponent,
    InputComponent,
    SelectComponent,
  },
  data() {
    return {
      file: [],

      selectPageDoctor: {
        options: [
          {
            value: "1",
            text: `${this.$t("t-home")}`,
          },
          {
            value: "2",
            text: `${this.$t("t-login-page")}`,
          },
          {
            value: "3",
            text: `${this.$t("t-schedulesettings")}`,
          },
          {
            value: "4",
            text: `${this.$t("t-medicalinformation")}`,
          },
          {
            value: "5",
            text: `${this.$t("t-staffinput")}`,
          },
          {
            value: "6",
            text: `${this.$t("t-managepatients")}`,
          },
          {
            value: "7",
            text: `${this.$t("t-calendar")}`,
          },
          {
            value: "8",
            text: `${this.$t("t-chat")}`,
          },
          {
            value: "9",
            text: `${this.$t("t-settings")}`,
          },
        ],
      },

      selectPageConfiance: {
        options: [
          {
            value: "1",
            text: `${this.$t("t-home")}`,
          },
          {
            value: "2",
            text: `${this.$t("t-login-page")}`,
          },
          {
            value: "3",
            text: `${this.$t("t-medicalinformation")}`,
          },
          {
            value: "4",
            text: `${this.$t("t-calendar")}`,
          },
          {
            value: "5",
            text: `${this.$t("t-chat")}`,
          },
          {
            value: "6",
            text: `${this.$t("t-settings")}`,
          },
          {
            value: "7",
            text: `${this.$t("t-takemeetingwithdoctor")}`,
          },
        ],
      },

      selectedOptionPage: {
        value: "1",
        text: `${this.$t("t-home")}`,
      },

      // Select Browser
      selectBrowser: {
        options: [
          {
            value: "1",
            text: "Chrome",
          },
          {
            value: "2",
            text: "Firefox",
          },
          {
            value: "3",
            text: "Safari",
          },
          {
            value: "4",
            text: "Opera",
          },
          {
            value: "5",
            text: "Edge",
          },
          {
            value: "6",
            text: "Internet Explorer",
          },
          {
            value: "7",
            text: `${this.$t("t-other")}`,
          },
        ],
      },

      selectedBrowser: {
        value: "1",
        text: "Chrome",
      },

      // Device used
      selectDevice: {
        options: [
          {
            value: "1",
            text: `${this.$t("t-desktop")}`,
          },
          {
            value: "2",
            text: `${this.$t("t-laptop")}`,
          },
          {
            value: "3",
            text: `${this.$t("t-tablet")}`,
          },
          {
            value: "4",
            text: `${this.$t("t-phone")}`,
          },
          {
            value: "5",
            text: `${this.$t("t-other")}`,
          },
        ],
      },

      selectedDevice: {
        value: "1",
        text: "Ordinateur de bureau",
      },

      issueDesc: "",
      issueSteps: "",
      issueExpected: "",
      issueActual: "",
      userEmailAddress: "",
    };
  },
  methods: {
    ...AuthGetters,

    // Method to handle the file change
    handleFileChange(file) {
      this.file = file;
    },

    // Method to check if the user is a 'docteur'
    isDoctor() {
      return this.getuserType() === "docteur";
    },

    // Method to check if the user is a 'confiance'
    isConfiance() {
      return this.getuserType() === "confiance";
    },

    isLoggedUser() {
      return this.getisloggedIn() === true;
    },

    // Method to send the bug report
    async sendBugReport() {
      let url = `upload/report`;
      let newFileBinary = new File([this.file[0].binary], this.file[0].name, {
        type: this.file[0].type,
        lastModified: Date.now(),
      });

      // Create the form data
      const payload = {
        file: newFileBinary,
        suggest: `email: ${this.userEmailAddress}; issueDesc: ${this.issueDesc}; issueSteps: ${this.issueSteps}; issueExpected: ${this.issueExpected}; issueActual: ${this.issueActual}; selectedOptionPage: ${this.selectedOptionPage.text}; selectedBrowser: ${this.selectedBrowser.text}; selectedDevice: ${this.selectedDevice.text}`,
      };

      // Send the bug report
      await axios({
        method: "post",
        url: url,
        data: payload,
        headers: {
          "Content-Type": "multipart/form-data",
          token: this.gettoken().Token,
        },
      })
        .then((response) => {
          if (response.status === 200) {
            // Show success message
            Swal.fire({
              title: this.$t("t-success"),
              text: this.$t("t-suggest-success"),
              icon: "success",
              confirmButtonText: "OK",
            });
          }
        })
        .catch((error) => {
          // Show error message
          Swal.fire({
            title: this.$t("t-error"),
            text: `${this.$t("t-bug-report-error")} Error: ${error}`,
            icon: "error",
            confirmButtonText: "OK",
          });
        });
    },
  },
};
</script>

<template>
  <div class="row" v-if="isLoggedUser()">
    <!-- ISSUE TITLE -->
    <div class="p-3 mb-0">
      <div class="col-md-6">
        <h3 class="font-size-14 mb-2 mt-0" data-key="t-whatwasissue">
          {{ $t("t-whatwasissue") }}
        </h3>
        <p class="text-muted mb-0">
          {{
            $t(
              "t-write-it-as-a-title-for-instance-i-cannot-login-to-medicfollow"
            )
          }}
        </p>

        <InputComponent
          type="text"
          v-model="issueDesc"
          :placeholder="$t('t-write-here')"
          :required="true"
        />
      </div>
    </div>

    <div class="p-3" v-if="isDoctor()">
      <SelectComponent
        :options="selectPageDoctor.options"
        :selectedOption="selectedOptionPage"
        :title="$t('t-pageofissue')"
        v-model="selectedOptionPage"
        :required="true"
        :invalidFeedback="$t('t-input-page-issue')"
      />
    </div>

    <div class="p-3" v-else-if="isConfiance()">
      <SelectComponent
        :options="selectPageConfiance.options"
        :selectedOption="selectedOptionPage"
        :title="$t('t-pageofissue')"
        v-model="selectedOptionPage"
        :required="true"
        :invalidFeedback="$t('t-input-page-issue')"
      />
    </div>

    <div class="p-3">
      <InputComponent
        type="text"
        :label="$t('t-stepsreproduce')"
        v-model="issueSteps"
        :placeholder="$t('t-write-here')"
        :required="true"
        :rows="2"
      />
    </div>

    <div class="p-3">
      <InputComponent
        type="text"
        :label="$t('t-expectedresult')"
        v-model="issueExpected"
        :placeholder="$t('t-write-here')"
        :required="true"
        :rows="2"
        :invalidFeedback="$t('t-write-input-here')"
      />
    </div>

    <div class="p-3">
      <InputComponent
        type="text"
        :label="$t('t-resultgot')"
        v-model="issueActual"
        :placeholder="$t('t-write-here')"
        :required="true"
        :rows="2"
        :invalidFeedback="$t('t-write-input-here')"
      />
    </div>

    <hr />

    <!-- SUBTITLE -->
    <div class="p-3 mb-0">
      <div class="col-md-6">
        <h3 class="font-size-14 mb-3 mt-0">
          {{ $t("t-otherresults") }}
        </h3>
      </div>
    </div>

    <div class="p-3">
      <SelectComponent
        :options="selectBrowser.options"
        :selectedOption="selectedBrowser"
        :title="$t('t-selectbrowser')"
        v-model="selectedBrowser"
        :required="true"
        invalidFeedback="Select a browser"
      />
    </div>

    <div class="p-3">
      <SelectComponent
        :options="selectDevice.options"
        :selectedOption="selectedDevice"
        :title="$t('t-selectdevice')"
        v-model="selectedDevice"
        :required="true"
        invalidFeedback="Select a device"
      />
    </div>

    <!-- EMAIL -->
    <div class="p-3">
      <InputComponent
        className="form-floating"
        :label="$t('t-email') + ' (' + $t('t-optional') + ')'"
        v-model="userEmailAddress"
        :placeholder="$t('t-write-here')"
        :required="true"
        :invalidFeedback="$t('t-write-input-here')"
      />
    </div>

    <hr />

    <!-- FILE UPLOAD -->
    <div class="p-3 mb-3">
      <h3 class="font-size-14 mb-2 mt-0">
        {{ $t("t-questionuploaddoc") }}
      </h3>
      <p class="text-muted mb-4">
        {{ $t("t-uploadquestionexample") }}
      </p>
      <DragDropComponent v-model="file" />
    </div>

    <hr />

    <!-- Agree on ToU text -->
    <div class="p-3 card-body mb-0">
      <p class="text-muted">
        By sending us a bug report, you are agreeing on using our
        <span class="fw-medium">Terms of Use</span>.
      </p>
      <!-- Agree on ToU check box -->
      <div class="col-12">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" required />
          <label class="form-check-label" for="bugGridCheck">
            {{ $t("t-readandacceptedtou") }}
          </label>
        </div>
        <div class="invalid-feedback">You have to check this box</div>
      </div>
    </div>

    <Recaptcha />

    <!-- Submit button -->
    <div class="p-3 col-12">
      <div class="text-muted">
        <button type="submit" class="btn btn-primary">
          {{ $t("t-submit") }}
        </button>
      </div>
    </div>
  </div>
  <div class="row" v-if="!isLoggedUser()">
    <!-- ISSUE TITLE -->
    <h3 class="font-size-14 mb-2 mt-0" data-key="t-whatwasissue">
      {{ $t("t-whatwasissue") }}
    </h3>
    <p class="text-muted mb-0">
      {{
        $t("t-write-it-as-a-title-for-instance-i-cannot-login-to-medicfollow")
      }}
    </p>

    <InputComponent
      type="text"
      v-model="issueDesc"
      :placeholder="$t('t-write-here')"
      :required="true"
    />

    <InputComponent
      type="text"
      :label="$t('t-stepsreproduce')"
      v-model="issueSteps"
      :placeholder="$t('t-write-here')"
      :required="true"
      :rows="2"
    />

    <SelectComponent
      :options="selectBrowser.options"
      :selectedOption="selectedBrowser"
      :title="$t('t-selectbrowser')"
      v-model="selectedBrowser"
      :required="true"
      invalidFeedback="Select a browser"
    />

    <SelectComponent
      :options="selectDevice.options"
      :selectedOption="selectedDevice"
      :title="$t('t-selectdevice')"
      v-model="selectedDevice"
      :required="true"
      invalidFeedback="Select a device"
    />

    <Recaptcha class="mt-2" />

    <!-- Submit button -->
    <div class="text-muted mt-2">
      <button type="submit" class="btn btn-primary">
        {{ $t("t-submit") }}
      </button>
    </div>
  </div>
</template>
