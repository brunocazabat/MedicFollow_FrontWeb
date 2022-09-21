<script>
import recaptcha from "@/components/widgets/recaptchav2.vue";

export default {
  components: {
    recaptcha
  },
};
</script>


<template>
  <div class="row">

    <!-- ISSUE TITLE -->
    <div class="p-3 mb-0">
      <div class="col-md-6">
        <h3 class="font-size-14 mb-2 mt-0" data-key="t-whatwasissue">{{ $t("t-whatwasissue") }}</h3>
        <p class="text-muted mb-2">Write it as a title, for instance: I cannot login to Medic'Follow.</p>
        <input type="text" class="form-control" id="bugIssueInput" placeholder="Write the issue here..." required />
        <div class="invalid-feedback">
          Please input your issue here.
        </div>
      </div>
    </div>

    <!-- PAGE OF THE ISSUE -->
    <div class="p-3 mb-0">
      <div class="col-md-6">
        <label for="bugPageInput" class="form-label" data-key="t-pageofissue">{{ $t("t-pageofissue")
        }}</label>
        <input type="text" class="form-control" rows="3" id="bugPageInput" placeholder="Write the page here..."
          required />
        <div class="invalid-feedback">
          Please input the title of the page where you encountered the issue in this textarea.
        </div>
      </div>
    </div>

    <!-- ISSUE STEPS TO REPRODUCE -->
    <div class="p-3 mb-0">
      <div class="col-md-6">
        <label for="bugStepsInput" class="form-label" data-key="t-stepsreproduce">{{
        $t("t-stepsreproduce") }}</label>
        <textarea type="text" class="form-control" rows="3" id="bugStepsInput" placeholder="Write the steps here..."
          required></textarea>
        <div class="invalid-feedback">
          Please input the steps to reproduce the issue in this textarea.
        </div>
      </div>
    </div>

    <!-- EXPECTED RESULT -->
    <div class="p-3 mb-0">
      <div class="col-md-6">
        <label for="bugExpectedInput" class="form-label" data-key="t-expectedresult">{{
        $t("t-expectedresult") }}</label>
        <input type="text" class="form-control" id="bugExpectedInput" placeholder="Write the expected result here..."
          required />
        <div class="invalid-feedback">
          Please input the expected result here.
        </div>
      </div>
    </div>

    <!-- RESULT OBTAINED -->
    <div class="p-3 mb-3">
      <div class="col-md-6">
        <label for="bugExpectedInput" class="form-label" data-key="t-resultgot">{{ $t("t-resultgot")
        }}</label>
        <input type="text" class="form-control" id="bugExpectedInput" placeholder="Write the obtained result here..."
          required />
        <div class="invalid-feedback">
          Please input the obtained result here.
        </div>
      </div>
    </div>

    <hr>

    <!-- SUBTITLE -->
    <div class="p-3 mb-0">
      <div class="col-md-6">
        <h3 class="font-size-14 mb-3 mt-0" data-key="t-otherresults">{{ $t("t-otherresults") }}</h3>
      </div>
    </div>

    <!-- WHICH BROWSER ARE YOU USING -->
    <div class="mb-0 p-3">
      <div class="col-md-4">
        <label for="chooseBrowserSelect" class="form-label" data-key="t-selectbrowser">{{
        $t("t-selectbrowser") }}</label>
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
        <label for="chooseDeviceSelect" class="form-label" data-key="t-selectdevice">{{
        $t("t-selectdevice") }}</label>
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
        <p class="text-muted" data-key="t-emailwarning">{{ $t("t-emailwarning") }}</p>
      </div>
    </div>

    <hr>

    <!-- FILE UPLOAD -->
    <div class="p-3 mb-3">
      <div class="col-md-4">
        <h3 class="font-size-14 mb-2 mt-0" data-key="t-questionuploaddoc">
          {{ $t("t-questionuploaddoc") }}
        </h3>
        <p class="text-muted mb-4" data-key="t-uploadquestionexample">
          {{ $t("t-uploadquestionexample") }}
        </p>
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
          <label class="form-check-label" for="bugGridCheck" data-key="t-readandacceptedtou">
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
        <button type="submit" class="btn btn-primary" data-key="t-submit">
          {{ $t("t-submit") }}
        </button>
      </div>
    </div>

  </div>
</template>
