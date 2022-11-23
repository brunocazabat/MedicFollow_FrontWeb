<script>
import Slider from "@vueform/slider";
import recaptcha from "@/components/view-related/widgets/recaptchav2.vue";

export default {
  data() {
    return {
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
    recaptcha,
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
};
</script>

<template>
  <div class="row">
    <div class="p-3 mb-0">
      <h3 class="font-size-14 mb-2 mt-0" data-key="t-letusknowyou">
        {{ $t("t-letusknowyou") }}
      </h3>
      <p class="text-muted mb-2" data-key="t-bttrunderstandingtxt">
        {{ $t("t-bttrunderstandingtxt") }}
      </p>
    </div>

    <!-- EMAIL -->
    <!-- CHECK HOW TO MAKE SMALLER BOX -->
    <div class="mb-0 p-3 md-4">
      <div class="col-md-4">
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="feedbackEmailInput"
            placeholder="Enter your email"
            required
          />
          <label for="feedbackEmailInput" data-key="t-email">{{
            $t("t-email")
          }}</label>
        </div>
      </div>
    </div>

    <!-- COUNTRY -->
    <!-- CHECK HOW TO MAKE SMALLER BOX -->
    <div class="mb-0 p-3 md-4">
      <div class="col-md-4">
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="feedbackCountryInput"
            placeholder="Enter your country"
            required
          />
          <label for="feedbackCountryInput" data-key="t-country">{{
            $t("t-country")
          }}</label>
        </div>
      </div>
    </div>

    <!-- GENDER LIST -->
    <div class="mb-0 p-3">
      <div class="col-md-4">
        <label
          for="chooseGenderSelect"
          class="form-label"
          data-key="t-gender"
          >{{ $t("t-gender") }}</label
        >
        <select class="form-select" id="chooseGenderSelect" required>
          <option data-key="t-selectgender" selected>
            {{ $t("t-selectgender") }}
          </option>
          <option data-key="t-male" value="male">{{ $t("t-male") }}</option>
          <option data-key="t-female" value="female">
            {{ $t("t-female") }}
          </option>
          <option data-key="t-other" value="other">{{ $t("t-other") }}</option>
          <option data-key="t-prefernotsay" value="no-pref">
            {{ $t("t-prefernotsay") }}
          </option>
        </select>
      </div>
    </div>

    <!-- BIRTH DATE SELECTION -->
    <div class="mb-3 p-3">
      <div class="col-md-4">
        <label
          for="feedbackDateInput"
          class="form-label"
          data-key="t-birthdate"
          >{{ $t("t-birthdate") }}</label
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
    <div class="col-md-6 mb-3">
      <div class="p-3">
        <h3 class="font-size-14 mb-2 mt-0" data-key="t-areusatisfied">
          {{ $t("t-areusatisfied") }}
        </h3>
        <p class="text-muted mb-5" data-key="t-satisfactioneval">
          {{ $t("t-satisfactioneval") }}
        </p>

        <div class="mb-3">
          <label
            for="sliderDashboard"
            class="form-label mb-4"
            data-key="t-dashboardslider"
            >{{ $t("t-dashboardslider") }}</label
          >
          <div class="p-3">
            <Slider id="sliderDashboard" v-model="sliderDashVal" />
          </div>
        </div>

        <div class="mb-3">
          <label
            for="sliderMedSum"
            class="form-label mb-4"
            data-key="t-visitsumslider"
            >{{ $t("t-visitsumslider") }}</label
          >
          <div class="p-3">
            <Slider id="sliderMedSum" v-model="sliderMedSumVal" />
          </div>
        </div>

        <div class="mb-3">
          <label
            for="sliderCal"
            class="form-label mb-4"
            data-key="t-calslider"
            >{{ $t("t-calslider") }}</label
          >
          <div class="p-3">
            <Slider id="sliderCal" v-model="sliderCalVal" />
          </div>
        </div>

        <div class="mb-3">
          <label
            for="sliderSettings"
            class="form-label mb-4"
            data-key="t-settingsslider"
            >{{ $t("t-settingsslider") }}</label
          >
          <div class="p-3">
            <Slider id="sliderSettings" v-model="sliderSettingsVal" />
          </div>
        </div>

        <div class="mb-3">
          <label
            for="sliderWaiting"
            class="form-label mb-4"
            data-key="t-waitingslider"
            >{{ $t("t-waitingslider") }}</label
          >
          <div class="p-3">
            <Slider id="sliderWaiting" v-model="sliderWaitingVal" />
          </div>
        </div>

        <div class="mb-0">
          <label
            for="sliderDesign"
            class="form-label mb-4"
            data-key="t-designslider"
            >{{ $t("t-designslider") }}</label
          >
          <div class="p-3">
            <Slider id="sliderDesign" v-model="sliderDesignVal" />
          </div>
        </div>
      </div>
    </div>

    <hr />

    <!-- HOW CAN WE IMPROVE OUR SERVICE -->
    <div class="p-3 mb-3">
      <div class="col-md-6">
        <h3 class="font-size-14 mb-2 mt-0" data-key="t-howcanweimprove">
          {{ $t("t-howcanweimprove") }}
        </h3>
        <p class="text-muted mb-4" data-key="t-feedbackinfomsg">
          {{ $t("t-feedbackinfomsg") }}
        </p>
        <textarea
          class="form-control"
          id="feedbackImproveInput"
          rows="3"
          placeholder="Write here..."
          required
        ></textarea>
      </div>
    </div>

    <hr />

    <!-- FILE UPLOAD -->
    <div class="p-3 mb-3">
      <div class="col-md-4">
        <h3 class="font-size-14 mb-2 mt-0" data-key="t-questionuploaddoc">
          {{ $t("t-questionuploaddoc") }}
        </h3>
        <p class="text-muted mb-4" data-key="t-uploadexample">
          {{ $t("t-uploadexample") }}
        </p>
        <input class="form-control" type="file" id="feedbackFileUpload" />
      </div>
    </div>

    <hr />

    <!-- Agree on ToU text -->
    <div class="p-3 mb-3 card-body">
      <p class="text-muted">
        By sending us a feedback, you are agreeing on using our
        <span class="fw-medium">Terms of Use</span>.
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
          <label
            class="form-check-label"
            for="feedbackGridCheck"
            data-key="t-havereadtou"
          >
            {{ $t("t-havereadtou") }}
          </label>
        </div>
      </div>
    </div>

    <recaptcha />

    <!-- Submit button -->
    <div class="p-3 col-12">
      <div class="text-muted">
        <button type="submit" class="btn btn-primary" data-key="t-submit">
          {{ $t("t-submit") }}
        </button>
      </div>
    </div>
  </div>
</template>
