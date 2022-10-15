<script>
import Slider from "@vueform/slider";
import recaptcha from "@/components/widgets/recaptchav2.vue";

export default {
  data() {
    return {
      sliderDashVal: 50,
      sliderMedSumVal: 50,
      sliderCalVal: 50,
      sliderSettingsVal: 50,
      sliderWaitingVal: 50,
      sliderDesignVal: 50,
      sliderFamilyChatVal: 50,
    };
  },
  components: {
    Slider,
    recaptcha
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
      <h3 class="mb-2 mt-0">{{ $t("t-letusknowyou") }}</h3>
      <p class="text-muted mb-2">{{ $t("t-bttrunderstandingtxt") }}</p>
    </div>

    <div class="row">

      <!-- EMAIL -->
      <!-- CHECK HOW TO MAKE SMALLER BOX -->
      <div class=" col-lg-6">
        <div class="form-floating">
          <input type="text" class="form-control" id="feedbackEmailInput" placeholder="Enter your email" />
          <label for="feedbackEmailInput">{{ $t("t-email") }}</label>
        </div>
      </div>

      <!-- COUNTRY -->
      <!-- CHECK HOW TO MAKE SMALLER BOX -->
      <div class=" col-lg-6 mb-4">
        <div class="form-floating">
          <input type="text" class="form-control" id="feedbackCountryInput" placeholder="Enter your country" required />
          <label for="feedbackCountryInput">{{ $t("t-country") }}*</label>
        </div>
      </div>

      <!-- GENDER LIST -->
      <div class="col-lg-6">
        <label for="chooseGenderSelect" class="form-label">{{ $t("t-gender")
        }}*</label>
        <select class="form-select" id="chooseGenderSelect" required>
          <option selected>{{ $t("t-selectgender") }}</option>
          <option value="male">{{ $t("t-male") }}</option>
          <option value="female">{{ $t("t-female") }}</option>
          <option value="other">{{ $t("t-other") }}</option>
          <option value="no-pref">{{ $t("t-prefernotsay") }}</option>
        </select>
      </div>

      <!-- BIRTH DATE SELECTION -->
      <div class=" col-lg-6 mb-4">
        <label for="feedbackDateInput" class="form-label">{{ $t("t-birthdate")
        }}*</label>
        <input type="date" class="form-control" id="feedbackDateInput" required>
      </div>

    </div>

    <hr>

    <!-- SATISFACTION SELECTION -->
    <div class="p-3 mb-3">
      <div class="">
        <h3 class="font-size-14 mb-2 mt-0">{{ $t("t-areusatisfied") }}</h3>
        <p class="text-muted mb-4">{{ $t("t-satisfactioneval") }}</p>

        <div class="mb-3">
          <label for="sliderDashboard" class="form-label mb-4">{{
          $t("t-home")
          }}</label>
          <div class="p-3">
            <Slider id="sliderDashboard" v-model="sliderDashVal" />
          </div>
        </div>

        <div class="mb-3">
          <label for="sliderMedSum" class="form-label mb-4">{{
          $t("t-schedulesettings")
          }}</label>
          <div class="p-3">
            <Slider id="sliderMedSum" v-model="sliderMedSumVal" />
          </div>
        </div>

        <div class="mb-3">
          <label for="sliderCal" class="form-label mb-4">{{ $t("t-staffinput")
          }}</label>
          <div class="p-3">
            <Slider id="sliderCal" v-model="sliderCalVal" />
          </div>
        </div>

        <div class="mb-3">
          <label for="sliderFamilyChat" class="form-label mb-4">{{
          $t("t-chatwithfamily")
          }}</label>
          <div class="p-3">
            <Slider id="sliderFamilyChat" v-model="sliderFamilyChatVal" />
          </div>
        </div>

        <div class="mb-3">
          <label for="sliderWaiting" class="form-label mb-4">{{
          $t("t-managepatients")
          }}</label>
          <div class="p-3">
            <Slider id="sliderWaiting" v-model="sliderWaitingVal" />
          </div>
        </div>

        <div class="mb-3">
          <label for="sliderSettings" class="form-label mb-4">{{
          $t("t-settingsslider")
          }}</label>
          <div class="p-3">
            <Slider id="sliderSettings" v-model="sliderSettingsVal" />
          </div>
        </div>

        <div class="mb-0">
          <label for="sliderDesign" class="form-label mb-4">{{
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
      <div class="col-md-12">
        <h3 class="font-size-14 mb-2 mt-0">{{ $t("t-howcanweimprove") }}</h3>
        <p class="text-muted mb-4">{{ $t("t-feedbackinfomsg") }}</p>
        <textarea class="form-control" id="feedbackImproveInput" rows="3" placeholder="Write here..."
          required></textarea>
      </div>
    </div>

    <hr>

    <!-- FILE UPLOAD -->
    <div class="p-3 mb-3">
      <div class="col-md-12">
        <h3 class="font-size-14 mb-2 mt-0">
          {{ $t("t-questionuploaddoc") }}
        </h3>
        <p class="text-muted mb-4">{{ $t("t-uploadexample") }}</p>
        <input class="form-control" type="file" id="feedbackFileUpload">
      </div>
    </div>

    <hr>

    <!-- Agree on ToU text -->
    <div class="p-3 mb-3 card-body">
      <p class="text-muted">
        {{$t("t-agreeingontou")}}
      </p>
      <!-- Agree on ToU check box -->
      <div class="col-12">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="feedbackGridCheck" required />
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
