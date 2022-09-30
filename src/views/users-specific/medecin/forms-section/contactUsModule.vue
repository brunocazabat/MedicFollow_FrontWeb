<script>
export default {
  components: {},
}
</script>


<template>

  <div class="p-2">

    <!-- EMAIL ADDRESS   -->
    <div class="col-xl-4 mb-5">
      <div class="card">
        <div class="card-header">
          <em class="float-end text-primary me-2 ri-mail-line ri-2x"></em>
          <h3 class="card-title font-size-x-large" data-key="t-ouremail">{{$t("t-ouremail")}}:</h3>
          <p class="forceserif card-subtitle text-muted mb-2" data-key="t-emailanswerdelay">
            {{$t("t-emailanswerdelay")}}.</p>
        </div>
        <div class="card-body">
          <p class="forceserif font-size-medium">
            contact@medicfollow.fr
          </p>
        </div>
      </div>
    </div>

    <!-- PHONE NUMBER -->
    <div class="col-xl-4 mb-5">
      <div class="card">
        <div class="card-header">
          <em class="float-end text-primary me-2 ri-phone-line ri-2x"></em>
          <h3 class="card-title font-size-x-large" data-key="t-ourphonenbr">{{$t("t-ourphonenbr")}} <strong>(SMS
              ONLY)</strong>:</h3>
          <p class="forceserif card-subtitle text-muted mb-2" data-key="t-onlyanswersms">{{$t("t-onlyanswersms")}}</p>
        </div>
        <div class="card-body">
          <p class="forceserif font-size-medium">
            +33 7 64 85 22 23
          </p>
        </div>
      </div>
    </div>

    <!-- SEND US A MSESSAGE -->
    <div class="col-xl-4">
      <div class="card">
        <div class="card-header">
          <em class="float-end text-primary me-2 ri-chat-3-line ri-2x"></em>
          <h3 class="card-title font-size-x-large" data-key="t-sendusmessage">{{$t("t-sendusmessage")}}:</h3>
        </div>
        <div class="card-body">
          <textarea class="form-control mb-3" id="VertimeassageInput" rows="3"
            placeholder="Enter a message here..."></textarea>
          <button class="btn forceserif btn-primary" data-key="t-submit">{{$t("t-submit")}}</button>
        </div>
      </div>
    </div>

  </div>

</template>
