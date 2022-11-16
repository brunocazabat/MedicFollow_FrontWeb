<script>
import Slider from "@vueform/slider";
import axios from "axios";
import Swal from "sweetalert2";

import { AuthGetters } from "@/components/back-related/state/helpers";

import DragDropComponent from "@/components/view-related/drag-drop/drag-drop.vue";
import Recaptcha from "@/components/view-related/widgets/recaptchav2.vue";

export default {
  data() {
    return {
      // Doctor sliders with a name and a value for each
      doctorSliders: {
        dashboard: {
          name: `${this.$t("t-dashboardslider")}`,
          value: 50,
        },
        schedule: {
          name: `${this.$t("t-schedulesettings")}`,
          value: 50,
        },
        staffInput: {
          name: `${this.$t("t-staffinput")}`,
          value: 50,
        },
        chat: {
          name: `${this.$t("t-chatwithfamily")}`,
          value: 50,
        },
        managePatients: {
          name: `${this.$t("t-managepatients")}`,
          value: 50,
        },
        settings: {
          name: `${this.$t("t-settingsslider")}`,
          value: 50,
        },
        design: {
          name: `${this.$t("t-designslider")}`,
          value: 50,
        },
      },

      confianceSliders: {
        dashboard: {
          name: `${this.$t("t-dashboardslider")}`,
          value: 50,
        },
        patientInfo: {
          name: `${this.$t("t-visitsumslider")}`,
          value: 50,
        },
        schedule: {
          name: `${this.$t("t-appointments")}`,
          value: 50,
        },
        calendar: {
          name: `${this.$t("t-calslider")}`,
          value: 50,
        },
        chat: {
          name: `${this.$t("t-chatwithdoctor")}`,
          value: 50,
        },
        settings: {
          name: `${this.$t("t-settingsslider")}`,
          value: 50,
        },
        design: {
          name: `${this.$t("t-designslider")}`,
          value: 50,
        },
      },

      // File var
      file: [],

      // Suggestion vars
      email: "",
      country: "",
      gender: "",
      dob: "",
      suggestion: "",
    };
  },
  components: {
    Slider,
    Recaptcha,
    DragDropComponent,
  },
  methods: {
    ...AuthGetters,

    // Range and label slider set range
    callbackRange(val) {
      this.sliderWithLabel.rangeValue = val;
    },

    // Loading slider
    startLoad() {
      this.loader = setInterval(() => {
        this.loadingValue++;
        if (this.loadingValue === 100) {
          clearInterval(this.loader);
        }
      }, 100);
    },

    // Method to handle the file change
    handleFileChange(file) {
      console.log("File changed", file);
      this.file = file;
    },

    // Method to check if the user is a 'docteur'
    isDoctor() {
      if (this.getuserType() === "docteur") {
        return true;
      } else {
        return false;
      }
    },

    // Method to check if the user is a 'confiance'
    isConfiance() {
      if (this.getuserType() === "confiance") {
        return true;
      } else {
        return false;
      }
    },

    // Method to send the suggestion
    async sendSuggestion() {
      let url = `upload/suggest`;
      let fileBinaryArray = [];

      // Creating binary file array
      for (let i = 0; i < this.file.length; i++) {
        fileBinaryArray.push(this.file[i].binary);
      }
      console.log("fileBinaryArray", fileBinaryArray);

      let formData = new FormData();
      for (let i = 0; i < this.file.length; i++) {
        formData.append("file", this.file[i].binary);
      }

      console.log("formData", formData.getAll("file"));

      // let newFile = this.file[0].binary;
      // retrieving the binary of the newFile var
      //   let newFileBinary = newFile.slice(0, newFile.size, newFile.type);
      let newFileBinary = new File([this.file[0].binary], this.file[0].name, {
        type: this.file[0].type,
        lastModified: Date.now(),
      });

      console.log("newFileBinary", newFileBinary);

      // Create the form data
      const payload = {
        file: newFileBinary,
        suggest: `email: ${this.email}; country: ${this.country}; gender: ${this.gender}; dob: ${this.dob}; suggestion: ${this.suggestion}`,
      };

      // Send the suggestion
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
          console.log(error);
          // Swal.fire({
          //   title: this.$t("t-error"),
          //   text: this.$t("t-suggest-error"),
          //   icon: "error",
          //   confirmButtonText: "OK",
          // });
        });
    },
  },
};
</script>

<template>
  <div class="row">
    <div class="p-3 mb-0">
      <h3 class="mb-2 mt-0">{{ $t("t-letusknowyou") }}</h3>
      <p class="text-muted mb-2">{{ $t("t-bttrunderstandingtxt") }}</p>
    </div>

    <div class="row">
      <!-- EMAIL -->
      <!-- CHECK HOW TO MAKE SMALLER BOX -->
      <div class="col-lg-6">
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="feedbackEmailInput"
            placeholder="Enter your email"
            v-model="email"
          />
          <label for="feedbackEmailInput">{{ $t("t-email") }}</label>
        </div>
      </div>

      <!-- COUNTRY -->
      <!-- CHECK HOW TO MAKE SMALLER BOX -->
      <div class="col-lg-6 mb-4">
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="feedbackCountryInput"
            placeholder="Enter your country"
            v-model="country"
            required
          />
          <label for="feedbackCountryInput">{{ $t("t-country") }}*</label>
        </div>
      </div>

      <!-- GENDER LIST -->
      <div class="col-lg-6">
        <label for="chooseGenderSelect" class="form-label"
          >{{ $t("t-gender") }}*</label
        >
        <select
          class="form-select"
          id="chooseGenderSelect"
          v-model="gender"
          required
        >
          <option selected>{{ $t("t-selectgender") }}</option>
          <option value="male">{{ $t("t-male") }}</option>
          <option value="female">{{ $t("t-female") }}</option>
          <option value="other">{{ $t("t-other") }}</option>
          <option value="no-pref">{{ $t("t-prefernotsay") }}</option>
        </select>
      </div>

      <!-- BIRTH DATE SELECTION -->
      <div class="col-lg-6 mb-4">
        <label for="feedbackDateInput" class="form-label"
          >{{ $t("t-birthdate") }}*</label
        >
        <input
          type="date"
          class="form-control"
          id="feedbackDateInput"
          v-model="dob"
          required
        />
      </div>
    </div>

    <hr />

    <!-- SATISFACTION SELECTION -->
    <div class="p-3 mb-3">
      <div class="">
        <h3 class="font-size-14 mb-2 mt-0">{{ $t("t-areusatisfied") }}</h3>
        <p class="text-muted mb-4">{{ $t("t-satisfactioneval") }}</p>

        <div v-if="isDoctor() === true">
          <div class="mb-3" v-for="(slider, key) in doctorSliders" :key="key">
            <label for="label" class="form-label mb-4">{{ slider.name }}</label>
            <div class="p-3">
              <Slider v-model="slider.value" />
            </div>
          </div>
        </div>

        <div v-else-if="isConfiance() === true">
          <div
            class="mb-3"
            v-for="(slider, key) in confianceSliders"
            :key="key"
          >
            <label for="label" class="form-label mb-4">{{ slider.name }}</label>
            <div class="p-3">
              <Slider v-model="slider.value" />
            </div>
          </div>
        </div>

        <!-- Change for more sliders when available in the BackEnd -->
        <div v-else>
          <div
            class="mb-3"
            v-for="(slider, key) in confianceSliders"
            :key="key"
          >
            <label for="label" class="form-label mb-4">{{ slider.name }}</label>
            <div class="p-3">
              <Slider v-model="slider.value" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr />

    <!-- HOW CAN WE IMPROVE OUR SERVICE -->
    <div class="p-3 mb-3">
      <div class="col-md-12">
        <h3 class="font-size-14 mb-2 mt-0">{{ $t("t-howcanweimprove") }}</h3>
        <p class="text-muted mb-4">{{ $t("t-feedbackinfomsg") }}</p>
        <textarea
          class="form-control"
          rows="3"
          :placeholder="$t('t-write-here')"
          v-model="suggestion"
          required
        ></textarea>
      </div>
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
    <div class="p-3 mb-3 card-body">
      <p class="text-muted">
        {{ $t("t-agreeingontou") }}
      </p>
      <!-- Agree on ToU check box -->
      <div class="col-12">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" required />
          <label class="form-check-label" for="feedbackGridCheck">
            {{ $t("t-havereadtou") }}*
          </label>
        </div>
      </div>
    </div>

    <Recaptcha />

    <!-- Submit button -->
    <div class="p-3 col-12">
      <div class="text-muted">
        <button
          type="submit"
          class="btn btn-primary"
          v-on:click="sendSuggestion()"
        >
          {{ $t("t-submit") }}
        </button>
      </div>
    </div>
  </div>
</template>
