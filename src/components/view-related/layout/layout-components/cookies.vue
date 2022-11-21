<script>
export default {
  name: "Cookies",
};
</script>

<template>
  <vue-cookie-accept-decline
    :debug="true"
    :disableDecline="false"
    :showPostponeButton="false"
    elementId="myPanel1"
    position="bottom-right"
    ref="myPanel1"
    transitionName="slideFromBottom"
    type="floating"
  >
    <template v-slot:message data-key="t-cookies-content">
      {{ $t("t-cookies-content") }}
      <a
        href="https://www.medicfollow.fr/fr/usage.html"
        target="_blank"
        rel="noreferrer noopener"
        data-key="t-cookies-infos"
        >{{ $t("t-cookies-infos") }}</a
      >
    </template>

    <template v-slot:declineContent data-key="t-cookies-decline">{{
      $t("t-cookies-decline")
    }}</template>

    <template v-slot:acceptContent data-key="t-cookies-accept">{{
      $t("t-cookies-accept")
    }}</template>
  </vue-cookie-accept-decline>
</template>
