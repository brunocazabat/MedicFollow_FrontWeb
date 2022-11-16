<script>
import recaptcha from "@/components/view-related/widgets/recaptchav2.vue";

import DragDropComponent from "@/components/view-related/drag-drop/drag-drop.vue";
import InputComponent from "@/components/view-related/input.vue";
import SelectComponent from "@/components/view-related/select.vue";

export default {
  components: {
    recaptcha,
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
            text: "Page d'accueil",
          },
          {
            value: "2",
            text: "Page de connexion",
          },
          {
            value: "3",
            text: "Page d'inscription",
          },
          {
            value: "4",
            text: "Page de réinitialisation du mot de passe",
          },
          {
            value: "5",
            text: "Page de réinitialisation du mot de passe réussie",
          },
          {
            value: "6",
            text: "Page de réinitialisation du mot de passe échouée",
          },
        ],
      },

      selectedOptionPageDoctor: {
        value: "1",
        text: "Page d'accueil",
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
            text: "Autre",
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
            text: "Ordinateur de bureau",
          },
          {
            value: "2",
            text: "Ordinateur portable",
          },
          {
            value: "3",
            text: "Tablette",
          },
          {
            value: "4",
            text: "Téléphone",
          },
          {
            value: "5",
            text: "Autre",
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
};
</script>

<template>
  <div class="row">
    <!-- ISSUE TITLE -->
    <div class="p-3 mb-0">
      <div class="col-md-6">
        <h3 class="font-size-14 mb-2 mt-0" data-key="t-whatwasissue">
          {{ $t("t-whatwasissue") }}
        </h3>
        <p class="text-muted mb-0">
          Write it as a title, for instance: I cannot login to Medic'Follow.
        </p>

        <InputComponent
          type="text"
          v-model="issueDesc"
          :placeholder="$t('t-write-here')"
          :required="true"
        />
      </div>
    </div>

    <div class="p-3">
      <SelectComponent
        :options="selectPageDoctor.options"
        :selectedOption="selectedOptionPageDoctor"
        :title="$t('t-pageofissue')"
        v-model="selectedOptionPageDoctor"
        :required="true"
        invalidFeedback="Please input the title of the page where you encountered the issue in
      this textarea"
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
        <h3 class="font-size-14 mb-3 mt-0" data-key="t-otherresults">
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
