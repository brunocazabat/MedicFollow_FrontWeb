<script>
import Slider from "@vueform/slider";
import recaptcha from "@/components/view-related/widgets/recaptchav2.vue";

import DragDropComponent from "@/components/view-related/drag-drop/drag-drop.vue";

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
          value: 60,
        },
      },
    };
  },
  components: {
    Slider,
    recaptcha,
    DragDropComponent,
  },
  methods: {
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
        <select class="form-select" id="chooseGenderSelect" required>
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

        <div class="mb-3" v-for="(slider, key) in doctorSliders" :key="key">
          <label for="sliderDashboard" class="form-label mb-4">{{
            slider.name
          }}</label>
          <div class="p-3">
            <Slider v-model="slider.value" />
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
          required
        ></textarea>
      </div>
    </div>

    <hr />

    <!-- FILE UPLOAD -->
    <div class="p-3 mb-3">
      <div class="col-md-12">
        <h3 class="font-size-14 mb-2 mt-0">
          {{ $t("t-questionuploaddoc") }}
        </h3>
        <p class="text-muted mb-4">{{ $t("t-uploadexample") }}</p>
        <DragDropComponent />
      </div>
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
          <input
            class="form-check-input"
            type="checkbox"
            id="feedbackGridCheck"
            required
          />
          <label class="form-check-label" for="feedbackGridCheck">
            {{ $t("t-havereadtou") }}*
          </label>
        </div>
      </div>
    </div>

    <recaptcha />

    <!-- Submit button -->
    <div class="p-3 col-12">
      <div class="text-muted">
        <button type="submit" class="btn btn-primary">
          {{ $t("t-submit") }}
        </button>
      </div>
    </div>
  </div>
</template>
