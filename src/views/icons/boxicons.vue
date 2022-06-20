<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

export default {
  page: {
    title: "Boxicons",
    meta: [{ name: "description", content: appConfig.description }],
  },
  data() {
    return {
      title: "Boxicons",
      items: [
        {
          text: "Icons",
          href: "/",
        },
        {
          text: "Boxicons",
          active: true,
        },
      ],
    };
  },
  components: {
    Layout,
    PageHeader,
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
     <div class="row">
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-header">
                                        <h4 class="card-title">Examples</h4>
                                        <p class="text-muted mb-0">Use <code>&lt;i class="bx bx-**">&lt;/i></code> class.</p>
                                    </div>
                                    <div class="card-body">
                        
                                        <h5>Regular</h5>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-lemon"></em> bx bx-lemon
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-cable-car"></em> bx bx-cable-car
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-cricket-ball"></em> bx bx-cricket-ball
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-male-female"></em> bx bx-male-female
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-baguette"></em> bx bx-baguette
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-fork"></em> bx bx-fork
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-knife"></em> bx bx-knife
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-circle-half"></em> bx bx-circle-half
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-circle-three-quarter"></em> bx bx-circle-three-quarter
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-circle-quarter"></em> bx bx-circle-quarter
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-bowl-rice"></em> bx bx-bowl-rice
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-bowl-hot"></em> bx bx-bowl-hot
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-popsicle"></em> bx bx-popsicle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-cross"></em> bx bx-cross
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-scatter-chart"></em> bx bx-scatter-chart
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-money-withdraw"></em> bx bx-money-withdraw
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-candles"></em> bx bx-candles
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-math"></em> bx bx-math
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-party"></em> bx bx-party
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-leaf"></em> bx bx-leaf
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-injection"></em> bx bx-injection
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-expand-vertical"></em> bx bx-expand-vertical
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-expand-horizontal"></em> bx bx-expand-horizontal
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-collapse-vertical"></em> bx bx-collapse-vertical
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-collapse-horizontal"></em> bx bx-collapse-horizontal
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-collapse-alt"></em> bx bx-collapse-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-qr"></em> bx bx-qr
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-qr-scan"></em> bx bx-qr-scan
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-podcast"></em> bx bx-podcast
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-checkbox-minus"></em> bx bx-checkbox-minus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-speaker"></em> bx bx-speaker
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-registered"></em> bx bx-registered
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-phone-off"></em> bx bx-phone-off
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-buildings"></em> bx bx-buildings
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-store-alt"></em> bx bx-store-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-bar-chart-alt-2"></em> bx bx-bar-chart-alt-2
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-message-dots"></em> bx bx-message-dots
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-message-rounded-dots"></em> bx bx-message-rounded-dots
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-memory-card"></em> bx bx-memory-card
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-wallet-alt"></em> bx bx-wallet-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-slideshow"></em> bx bx-slideshow
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-message-square"></em> bx bx-message-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-message-square-dots"></em> bx bx-message-square-dots
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-book-content"></em> bx bx-book-content
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-chat"></em> bx bx-chat
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-edit-alt"></em> bx bx-edit-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-mouse-alt"></em> bx bx-mouse-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-bug-alt"></em> bx bx-bug-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-notepad"></em> bx bx-notepad
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-video-recording"></em> bx bx-video-recording
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-shape-square"></em> bx bx-shape-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-shape-triangle"></em> bx bx-shape-triangle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-ghost"></em> bx bx-ghost
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-mail-send"></em> bx bx-mail-send
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-code-alt"></em> bx bx-code-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-grid"></em> bx bx-grid
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-user-pin"></em> bx bx-user-pin
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-run"></em> bx bx-run
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-copy-alt"></em> bx bx-copy-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-transfer-alt"></em> bx bx-transfer-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-book-open"></em> bx bx-book-open
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-landscape"></em> bx bx-landscape
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-comment"></em> bx bx-comment
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-comment-dots"></em> bx bx-comment-dots
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-pyramid"></em> bx bx-pyramid"
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-cylinder"></em> bx bx-cylinder
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-lock-alt"></em> bx bx-lock-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-lock-open-alt"></em> bx bx-lock-open-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-left-arrow-alt"></em> bx bx-left-arrow-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-right-arrow-alt"></em> bx bx-right-arrow-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-up-arrow-alt"></em> bx bx-up-arrow-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-down-arrow-alt"></em> bx bx-down-arrow-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-shape-circle"></em> bx bx-shape-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-cycling"></em> bx bx-cycling
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-dna"></em> bx bx-dna
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-bowling-ball"></em> bx bx-bowling-ball
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-search-alt-2"></em> bx bx-search-alt-2
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-plus-medical"></em> bx bx-plus-medical
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-street-view"></em> bx bx-street-view
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-droplet"></em> bx bx-droplet
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-paint-roll"></em> bx bx-paint-roll
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-shield-alt-2"></em> bx bx-shield-alt-2
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-error-alt"></em> bx bx-error-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-square"></em> bx bx-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-square-rounded"></em> bx bx-square-rounded
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-polygon"></em> bx bx-polygon
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-cube-alt"></em> bx bx-cube-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-cuboid"></em> bx bx-cuboid
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-user-voice"></em> bx bx-user-voice
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-accessibility"></em> bx bx-accessibility
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-building-house"></em> bx bx-building-house
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-doughnut-chart"></em> bx bx-doughnut-chart
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-log-in-circle"></em> bx bx-log-in-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-log-out-circle"></em> bx bx-log-out-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-check-square"></em> bx bx-check-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-message-alt"></em> bx bx-message-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-message-alt-dots"></em> bx bx-message-alt-dots
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-no-entry"></em> bx bx-no-entry
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-palette"></em> bx bx-palette
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-basket"></em> bx bx-basket
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-purchase-tag-alt"></em> bx bx-purchase-tag-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-receipt"></em> bx bx-receipt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-line-chart"></em> bx bx-line-chart
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-map-pin"></em> bx bx-map-pin
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-hive"></em> bx bx-hive
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-band-aid"></em> bx bx-band-aid
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-credit-card-alt"></em> bx bx-credit-card-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-wifi-off"></em> bx bx-wifi-off
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-brightness-half"></em> bx bx-brightness-half
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-brightness"></em> bx bx-brightness
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-filter-alt"></em> bx bx-filter-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-dialpad-alt"></em> bx bx-dialpad-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-border-right"></em> bx bx-border-right
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-border-left"></em> bx bx-border-left
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-border-top"></em> bx bx-border-top
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-border-bottom"></em> bx bx-border-bottom
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-border-all"></em> bx bx-border-all
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-mobile-landscape"></em> bx bx-mobile-landscape
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-mobile-vibration"></em> bx bx-mobile-vibration
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-gas-pump"></em> bx bx-gas-pump
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-pie-chart-alt-2"></em> bx bx-pie-chart-alt-2
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-time-five"></em> bx bx-time-five
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-briefcase-alt-2"></em> bx bx-briefcase-alt-2
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-brush-alt"></em> bx bx-brush-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-customize"></em> bx bx-customize
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-radio"></em> bx bx-radio
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-printer"></em> bx bx-printer
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-sort-a-z"></em> bx bx-sort-a-z
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-sort-z-a"></em> bx bx-sort-z-a
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-conversation"></em> bx bx-conversation
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-exit"></em> bx bx-exit
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-extension"></em> bx bx-extension
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-face"></em> bx bx-face
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-file-find"></em> bx bx-file-find
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-label"></em> bx bx-label
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-check-shield"></em> bx bx-check-shield
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-border-radius"></em> bx bx-border-radius
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-add-to-queue"></em> bx bx-add-to-queue
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-archive-in"></em> bx bx-archive-in
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-archive-out"></em> bx bx-archive-out
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-alarm-add"></em> bx bx-alarm-add
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-space-bar"></em> bx bx-space-bar
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-image-alt"></em> bx bx-image-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-image-add"></em> bx bx-image-add
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-fridge"></em> bx bx-fridge
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-dish"></em> bx bx-dish
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-spa"></em> bx bx-spa
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-cake"></em> bx bx-cake
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-bolt-circle"></em> bx bx-bolt-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-tone"></em> bx bx-tone
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-bitcoin"></em> bx bx-bitcoin
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-lira"></em> bx bx-lira
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-ruble"></em> bx bx-ruble
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-rupee"></em> bx bx-rupee
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-euro"></em> bx bx-euro
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-pound"></em> bx bx-pound
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-won"></em> bx bx-won
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-yen"></em> bx bx-yen
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-shekel"></em> bx bx-shekel
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-health"></em> bx bx-health
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-clinic"></em> bx bx-clinic
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-male"></em> bx bx-male
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-female"></em> bx bx-female
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-male-sign"></em> bx bx-male-sign
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-female-sign"></em> bx bx-female-sign
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-food-tag"></em> bx bx-food-tag
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-food-menu"></em> bx bx-food-menu
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-meh-alt"></em> bx bx-meh-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-wink-tongue"></em> bx bx-wink-tongue
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-happy-alt"></em> bx bx-happy-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-cool"></em> bx bx-cool
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-tired"></em> bx bx-tired
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-smile"></em> bx bx-smile
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-angry"></em> bx bx-angry
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-happy-heart-eyes"></em> bx bx-happy-heart-eyes
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-dizzy"></em> bx bx-dizzy
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-wink-smile"></em> bx bx-wink-smile
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-confused"></em> bx bx-confused
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-sleepy"></em> bx bx-sleepy
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-shocked"></em> bx bx-shocked
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-happy-beaming"></em> bx bx-happy-beaming
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-meh-blank"></em> bx bx-meh-blank
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-laugh"></em> bx bx-laugh
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-upside-down"></em> bx bx-upside-down
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-diamond"></em> bx bx-diamond
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-align-left"></em> bx bx-align-left
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-align-middle"></em> bx bx-align-middle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-align-right"></em> bx bx-align-right
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-arrow-back"></em> bx bx-arrow-back
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-bell-minus"></em> bx bx-bell-minus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-bell-off"></em> bx bx-bell-off
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-bell-plus"></em> bx bx-bell-plus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-bell"></em> bx bx-bell
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-bookmark"></em> bx bx-bookmark
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-bookmarks"></em> bx bx-bookmarks
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-bullseye"></em> bx bx-bullseye
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-camera-off"></em> bx bx-camera-off
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-camera"></em> bx bx-camera
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-captions"></em> bx bx-captions
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-checkbox-checked"></em> bx bx-checkbox-checked
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-checkbox"></em> bx bx-checkbox
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-checkbox-square"></em> bx bx-checkbox-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-chevron-down"></em> bx bx-chevron-down
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-chevron-up"></em> bx bx-chevron-up
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-chevron-left"></em> bx bx-chevron-left
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-chevron-right"></em> bx bx-chevron-right
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-chevrons-down"></em> bx bx-chevrons-down
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-chevrons-up"></em> bx bx-chevrons-up
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-chevrons-right"></em> bx bx-chevrons-right
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-chevrons-left"></em> bx bx-chevrons-left
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-clipboard"></em> bx bx-clipboard
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-code-curly"></em> bx bx-code-curly
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-code"></em> bx bx-code
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-coffee"></em> bx bx-coffee
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-copy"></em> bx bx-copy
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-copyright"></em> bx bx-copyright
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-down-arrow-circle"></em> bx bx-down-arrow-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-error-circle"></em> bx bx-error-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-error"></em> bx bx-error
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-exit-fullscreen"></em> bx bx-exit-fullscreen
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-fast-forward-circle"></em> bx bx-fast-forward-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-fast-forward"></em> bx bx-fast-forward
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-first-page"></em> bx bx-first-page
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-folder-minus"></em> bx bx-folder-minus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-folder-plus"></em> bx bx-folder-plus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-folder"></em> bx bx-folder
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-fullscreen"></em> bx bx-fullscreen
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-hide"></em> bx bx-hide
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-image"></em> bx bx-image
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-info-circle"></em> bx bx-info-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-align-justify"></em> bx bx-align-justify
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-key"></em> bx bx-key
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-last-page"></em> bx bx-last-page
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-left-arrow-circle"></em> bx bx-left-arrow-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-left-down-arrow-circle"></em> bx bx-left-down-arrow-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-left-indent"></em> bx bx-left-indent
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-left-top-arrow-circle"></em> bx bx-left-top-arrow-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-menu"></em> bx bx-menu
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-microphone"></em> bx bx-microphone
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-minus-circle"></em> bx bx-minus-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-moon"></em> bx bx-moon
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-pause-circle"></em> bx bx-pause-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-pause"></em> bx bx-pause
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-play-circle"></em> bx bx-play-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-play"></em> bx bx-play
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-plus-circle"></em> bx bx-plus-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-question-mark"></em> bx bx-question-mark"
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-radio-circle-marked"></em> bx bx-radio-circle-marked
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-radio-circle"></em> bx bx-radio-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-rectangle"></em> bx bx-rectangle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-rewind"></em> bx bx-rewind
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-reset"></em> bx bx-reset
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-right-arrow-circle"></em> bx bx-right-arrow-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-right-down-arrow-circle"></em> bx bx-right-down-arrow-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-right-indent"></em> bx bx-right-indent
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-right-top-arrow-circle"></em> bx bx-right-top-arrow-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-rss"></em> bx bx-rss
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-search"></em> bx bx-search
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-show"></em> bx bx-show
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-skip-next"></em> bx bx-skip-next
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-skip-previous"></em> bx bx-skip-previous
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-stop-circle"></em> bx bx-stop-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-stop"></em> bx bx-stop
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-stopwatch"></em> bx bx-stopwatch
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-sync"></em> bx bx-sync
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-time"></em> bx bx-time
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-toggle-left"></em> bx bx-toggle-left
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-toggle-right"></em> bx bx-toggle-right
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-trending-down"></em> bx bx-trending-down
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-trending-up"></em> bx bx-trending-up
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-up-arrow-circle"></em> bx bx-up-arrow-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-vertical-center"></em> bx bx-vertical-center
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-video"></em> bx bx-video
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-volume-full"></em> bx bx-volume-full
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-volume-low"></em> bx bx-volume-low
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-volume-mute"></em> bx bx-volume-mute
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-volume"></em> bx bx-volume
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-x-circle"></em> bx bx-x-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-zoom-in"></em> bx bx-zoom-in
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-zoom-out"></em> bx bx-zoom-out
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-archive"></em> bx bx-archive
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-at"></em> bx bx-at
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-bar-chart-alt"></em> bx bx-bar-chart-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-bar-chart-square"></em> bx bx-bar-chart-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-bar-chart"></em> bx bx-bar-chart
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-basketball"></em> bx bx-basketball
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-block"></em> bx bx-block
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-book-bookmark"></em> bx bx-book-bookmark
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-book"></em> bx bx-book
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-bookmark-minus"></em> bx bx-bookmark-minus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-bookmark-plus"></em> bx bx-bookmark-plus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-briefcase"></em> bx bx-briefcase
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-broadcast"></em> bx bx-broadcast
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-building"></em> bx bx-building
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-bug"></em> bx bx-bug
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-bluetooth"></em> bx bx-bluetooth
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-bulb"></em> bx bx-bulb
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-buoy"></em> bx bx-buoy
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-calendar-plus"></em> bx bx-calendar-plus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-calendar-check"></em> bx bx-calendar-check
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-calendar-minus"></em> bx bx-calendar-minus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-calendar-x"></em> bx bx-calendar-x
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-calendar"></em> bx bx-calendar
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-chart"></em> bx bx-chart
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-cloud-download"></em> bx bx-cloud-download
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-cloud-upload"></em> bx bx-cloud-upload
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-cloud"></em> bx bx-cloud
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-terminal"></em> bx bx-terminal
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-crosshair"></em> bx bx-crosshair
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-compass"></em> bx bx-compass
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-data"></em> bx bx-data
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-desktop"></em> bx bx-desktop
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-directions"></em> bx bx-directions
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-dollar"></em> bx bx-dollar
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-dots-horizontal-rounded"></em> bx bx-dots-horizontal-rounded
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-dots-horizontal"></em> bx bx-dots-horizontal
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-dots-vertical-rounded"></em> bx bx-dots-vertical-rounded
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-dots-vertical"></em> bx bx-dots-vertical
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-download"></em> bx bx-download
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-envelope"></em> bx bx-envelope
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-gift"></em> bx bx-gift
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-globe"></em> bx bx-globe
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-devices"></em> bx bx-devices
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-headphone"></em> bx bx-headphone
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-heart"></em> bx bx-heart
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-home"></em> bx bx-home
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-laptop"></em> bx bx-laptop
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-layer"></em> bx bx-layer
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-link-alt"></em> bx bx-link-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-link"></em> bx bx-link
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-list-plus"></em> bx bx-list-plus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-list-ul"></em> bx bx-list-ul
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-list-minus"></em> bx bx-list-minus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-lock-open"></em> bx bx-lock-open
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-lock"></em> bx bx-lock
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-map-alt"></em> bx bx-map-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-map"></em> bx bx-map
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-message-rounded"></em> bx bx-message-rounded
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-message"></em> bx bx-message
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-mobile-alt"></em> bx bx-mobile-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-mobile"></em> bx bx-mobile
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-navigation"></em> bx bx-navigation
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-phone"></em> bx bx-phone
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-pie-chart"></em> bx bx-pie-chart
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-send"></em> bx bx-send
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-sidebar"></em> bx bx-sidebar
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-sitemap"></em> bx bx-sitemap
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-spreadsheet"></em> bx bx-spreadsheet
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-tab"></em> bx bx-tab
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-tag"></em> bx bx-tag
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-target-lock"></em> bx bx-target-lock
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-tennis-ball"></em> bx bx-tennis-ball
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-alarm"></em> bx bx-alarm
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-upload"></em> bx bx-upload
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-usb"></em> bx bx-usb
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-video-off"></em> bx bx-video-off
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-voicemail"></em> bx bx-voicemail
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-wifi"></em> bx bx-wifi
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-window-open"></em> bx bx-window-open
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-window"></em> bx bx-window
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-windows"></em> bx bx-windows
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-duplicate"></em> bx bx-duplicate
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-table"></em> bx bx-table
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-x"></em> bx bx-x
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-adjust"></em> bx bx-adjust
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-album"></em> bx bx-album
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-anchor"></em> bx bx-anchor
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-award"></em> bx bx-award
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-bold"></em> bx bx-bold
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-calculator"></em> bx bx-calculator
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-cart"></em> bx bx-cart
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-check"></em> bx bx-check
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-cloud-drizzle"></em> bx bx-cloud-drizzle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-cloud-light-rain"></em> bx bx-cloud-light-rain
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-cloud-lightning"></em> bx bx-cloud-lightning
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-cloud-rain"></em> bx bx-cloud-rain
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-cloud-snow"></em> bx bx-cloud-snow
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-cog"></em> bx bx-cog
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-columns"></em> bx bx-columns
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-credit-card"></em> bx bx-credit-card
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-crop"></em> bx bx-crop
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-cube"></em> bx bx-cube
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-cut"></em> bx bx-cut
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-detail"></em> bx bx-detail
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-shield-quarter"></em> bx bx-shield-quarter
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-edit"></em> bx bx-edit
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-file"></em> bx bx-file
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-filter"></em> bx bx-filter
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-font"></em> bx bx-font
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-git-branch"></em> bx bx-git-branch
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-git-commit"></em> bx bx-git-commit
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-git-compare"></em> bx bx-git-compare
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-git-merge"></em> bx bx-git-merge
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-git-pull-request"></em> bx bx-git-pull-request
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-git-repo-forked"></em> bx bx-git-repo-forked
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-group"></em> bx bx-group
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-hash"></em> bx bx-hash
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-heading"></em> bx bx-heading
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-home-alt"></em> bx bx-home-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-italic"></em> bx bx-italic
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-joystick"></em> bx bx-joystick
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-link-external"></em> bx bx-link-external
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-log-in"></em> bx bx-log-in
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-log-out"></em> bx bx-log-out
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-microphone-off"></em> bx bx-microphone-off
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-minus"></em> bx bx-minus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-mouse"></em> bx bx-mouse
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-move"></em> bx bx-move
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-music"></em> bx bx-music
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-notification"></em> bx bx-notification
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-package"></em> bx bx-package
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-paragraph"></em> bx bx-paragraph
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-paste"></em> bx bx-paste
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-pencil"></em> bx bx-pencil
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-pin"></em> bx bx-pin
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-plus"></em> bx bx-plus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-power-off"></em> bx bx-power-off
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-pulse"></em> bx bx-pulse
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-save"></em> bx bx-save
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-screenshot"></em> bx bx-screenshot
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-select-multiple"></em> bx bx-select-multiple
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-share-alt"></em> bx bx-share-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-share"></em> bx bx-share
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-shield-alt"></em> bx bx-shield-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-shield"></em> bx bx-shield
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-shopping-bag"></em> bx bx-shopping-bag
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-shuffle"></em> bx bx-shuffle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-sort"></em> bx bx-sort
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-star"></em> bx bx-star
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-sun"></em> bx bx-sun
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-text"></em> bx bx-text
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-trash"></em> bx bx-trash
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-trophy"></em> bx bx-trophy
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-underline"></em> bx bx-underline
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-user-check"></em> bx bx-user-check
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-user-circle"></em> bx bx-user-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-user-minus"></em> bx bx-user-minus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-user-plus"></em> bx bx-user-plus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-user-x"></em> bx bx-user-x
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-user"></em> bx bx-user
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-barcode"></em> bx bx-barcode
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-crown"></em> bx bx-crown
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-dislike"></em> bx bx-dislike
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-down-arrow"></em> bx bx-down-arrow
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-export"></em> bx bx-export
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-first-aid"></em> bx bx-first-aid
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-flag"></em> bx bx-flag
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-history"></em> bx bx-history
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-joystick-alt"></em> bx bx-joystick-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-left-arrow"></em> bx bx-left-arrow
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-like"></em> bx bx-like
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-list-check"></em> bx bx-list-check
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-poll"></em> bx bx-poll
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-radar"></em> bx bx-radar
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-redo"></em> bx bx-redo
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-reply-all"></em> bx bx-reply-all
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-reply"></em> bx bx-reply
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-repost"></em> bx bx-repost
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-revision"></em> bx bx-revision
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-right-arrow"></em> bx bx-right-arrow
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-subdirectory-left"></em> bx bx-subdirectory-left
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-subdirectory-right"></em> bx bx-subdirectory-right
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-support"></em> bx bx-support
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-timer"></em> bx bx-timer
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-undo"></em> bx bx-undo
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-up-arrow"></em> bx bx-up-arrow
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-phone-call"></em> bx bx-phone-call
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-aperture"></em> bx bx-aperture
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-film"></em> bx bx-film
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-folder-open"></em> bx bx-folder-open
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-task"></em> bx bx-task
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-server"></em> bx bx-server
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-battery"></em> bx bx-battery
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-calendar-alt"></em> bx bx-calendar-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-import"></em> bx bx-import
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-ruler"></em> bx bx-ruler
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-horizontal-center"></em> bx bx-horizontal-center
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-rotate-right"></em> bx bx-rotate-right
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-rename"></em> bx bx-rename
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-collapse"></em> bx bx-collapse
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-phone-incoming"></em> bx bx-phone-incoming
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-phone-outgoing"></em> bx bx-phone-outgoing
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-body"></em> bx bx-body
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-cast"></em> bx bx-cast
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-chip"></em> bx bx-chip
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-skip-next-circle"></em> bx bx-skip-next-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-skip-previous-circle"></em> bx bx-skip-previous-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-hdd"></em> bx bx-hdd
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-store"></em> bx bx-store
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-globe-alt"></em> bx bx-globe-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-upvote"></em> bx bx-upvote
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-downvote"></em> bx bx-downvote
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-news"></em> bx bx-news
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-pie-chart-alt"></em> bx bx-pie-chart-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-images"></em> bx bx-images
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-purchase-tag"></em> bx bx-purchase-tag
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-pen"></em> bx bx-pen
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-expand"></em> bx bx-expand
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-paperclip"></em> bx bx-paperclip
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-closet"></em> bx bx-closet
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-tv"></em> bx bx-tv
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-collection"></em> bx bx-collection
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-station"></em> bx bx-station
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-wallet"></em> bx bx-wallet
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-briefcase-alt"></em> bx bx-briefcase-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-hourglass"></em> bx bx-hourglass
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-carousel"></em> bx bx-carousel
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-infinite"></em> bx bx-infinite
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-plug"></em> bx bx-plug
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-notification-off"></em> bx bx-notification-off
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-window-close"></em> bx bx-window-close
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-command"></em> bx bx-command
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-grid-alt"></em> bx bx-grid-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-trash-alt"></em> bx bx-trash-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-chalkboard"></em> bx bx-chalkboard
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-loader"></em> bx bx-loader
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-slider"></em> bx bx-slider
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-paper-plane"></em> bx bx-paper-plane
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-selection"></em> bx bx-selection
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-world"></em> bx bx-world
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-dock-bottom"></em> bx bx-dock-bottom
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-dock-right"></em> bx bx-dock-right
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-dock-top"></em> bx bx-dock-top
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-dock-left"></em> bx bx-dock-left
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-layout"></em> bx bx-layout
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-alarm-off"></em> bx bx-alarm-off
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-wrench"></em> bx bx-wrench
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-loader-circle"></em> bx bx-loader-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-loader-alt"></em> bx bx-loader-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-car"></em> bx bx-car
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-cart-alt"></em> bx bx-cart-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-happy"></em> bx bx-happy
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-meh"></em> bx bx-meh
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-sad"></em> bx bx-sad
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-slider-alt"></em> bx bx-slider-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-certification"></em> bx bx-certification
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-rocket"></em> bx bx-rocket
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-check-circle"></em> bx bx-check-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-bus"></em> bx bx-bus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-check-double"></em> bx bx-check-double
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-dumbbell"></em> bx bx-dumbbell
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-bot"></em> bx bx-bot
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-area"></em> bx bx-area
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-bed"></em> bx bx-bed
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-bath"></em> bx bx-bath
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-train"></em> bx bx-train
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-taxi"></em> bx bx-taxi
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-movie"></em> bx bx-movie
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-hotel"></em> bx bx-hotel
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-planet"></em> bx bx-planet
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-list-ol"></em> bx bx-list-ol
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-video-plus"></em> bx bx-video-plus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-menu-alt-left"></em> bx bx-menu-alt-left
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-menu-alt-right"></em> bx bx-menu-alt-right
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-box"></em> bx bx-box
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-restaurant"></em> bx bx-restaurant
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-swim"></em> bx bx-swim
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-water"></em> bx bx-water
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-wind"></em> bx bx-wind
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-dialpad"></em> bx bx-dialpad
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-handicap"></em> bx bx-handicap
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-font-size"></em> bx bx-font-size
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-code-block"></em> bx bx-code-block
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-photo-album"></em> bx bx-photo-album
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-strikethrough"></em> bx bx-strikethrough
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-file-blank"></em> bx bx-file-blank
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-highlight"></em> bx bx-highlight
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-font-color"></em> bx bx-font-color
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-fingerprint"></em> bx bx-fingerprint
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-transfer"></em> bx bx-transfer
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-circle"></em> bx bx-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-ball"></em> bx bx-ball
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-football"></em> bx bx-football
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-dollar-circle"></em> bx bx-dollar-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-search-alt"></em> bx bx-search-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-analyse"></em> bx bx-analyse
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-disc"></em> bx bx-disc
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-equalizer"></em> bx bx-equalizer
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-stats"></em> bx bx-stats
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-move-horizontal"></em> bx bx-move-horizontal
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-move-vertical"></em> bx bx-move-vertical
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-grid-horizontal"></em> bx bx-grid-horizontal
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-grid-vertical"></em> bx bx-grid-vertical
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-grid-small"></em> bx bx-grid-small
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-badge"></em> bx bx-badge
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-id-card"></em> bx bx-id-card
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-sort-up"></em> bx bx-sort-up
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-sort-down"></em> bx bx-sort-down
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-note"></em> bx bx-note
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-test-tube"></em> bx bx-test-tube
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-help-circle"></em> bx bx-help-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-card"></em> bx bx-card
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-rewind-circle"></em> bx bx-rewind-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-magnet"></em> bx bx-magnet
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-calendar-event"></em> bx bx-calendar-event
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-caret-left"></em> bx bx-caret-left
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-caret-up"></em> bx bx-caret-up
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-caret-right"></em> bx bx-caret-right
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-caret-down"></em> bx bx-caret-down
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-show-alt"></em> bx bx-show-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-badge-check"></em> bx bx-badge-check
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-rotate-left"></em> bx bx-rotate-left
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-brush"></em> bx bx-brush
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-unlink"></em> bx bx-unlink
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-paint"></em> bx bx-paint
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-joystick-button"></em> bx bx-joystick-button
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-font-family"></em> bx bx-font-family
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-repeat"></em> bx bx-repeat
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-walk"></em> bx bx-walk
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-money"></em> bx bx-money
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-home-circle"></em> bx bx-home-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-location-plus"></em> bx bx-location-plus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-arch"></em> bx bx-arch
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-atom"></em> bx bx-atom
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-baseball"></em> bx bx-baseball
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-beer"></em> bx bx-beer
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-bible"></em> bx bx-bible
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-bomb"></em> bx bx-bomb
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-bus-school"></em> bx bx-bus-school
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-cabinet"></em> bx bx-cabinet
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-calendar-edit"></em> bx bx-calendar-edit
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-coffee-togo"></em> bx bx-coffee-togo
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-pointer"></em> bx bx-pointer
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-microchip"></em> bx bx-microchip
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-heart-circle"></em> bx bx-heart-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-heart-square"></em> bx bx-heart-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-home-heart"></em> bx bx-home-heart
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-info-square"></em> bx bx-info-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-layer-plus"></em> bx bx-layer-plus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-layer-minus"></em> bx bx-layer-minus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-recycle"></em> bx bx-recycle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-traffic-cone"></em> bx bx-traffic-cone
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-wifi-2"></em> bx bx-wifi-2
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-wifi-1"></em> bx bx-wifi-1
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-wifi-0"></em> bx bx-wifi-0
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-mask"></em> bx bx-mask
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-low-vision"></em> bx bx-low-vision
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-been-here"></em> bx bx-been-here
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-current-location"></em> bx bx-current-location
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-arrow-from-top"></em> bx bx-arrow-from-top
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-arrow-from-bottom"></em> bx bx-arrow-from-bottom
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-arrow-from-left"></em> bx bx-arrow-from-left
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-arrow-from-right"></em> bx bx-arrow-from-right
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-arrow-to-right"></em> bx bx-arrow-to-right
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-arrow-to-left"></em> bx bx-arrow-to-left
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-arrow-to-top"></em> bx bx-arrow-to-top
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-arrow-to-bottom"></em> bx bx-arrow-to-bottom
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-book-reader"></em> bx bx-book-reader
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-scan"></em> bx bx-scan
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-calendar-week"></em> bx bx-calendar-week
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-glasses"></em> bx bx-glasses
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-glasses-alt"></em> bx bx-glasses-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-border-none"></em> bx bx-border-none
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-border-inner"></em> bx bx-border-inner
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-dice-1"></em> bx bx-dice-1
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-dice-2"></em> bx bx-dice-2
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-dice-3"></em> bx bx-dice-3
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-dice-4"></em> bx bx-dice-4
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-dice-5"></em> bx bx-dice-5
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-dice-6"></em> bx bx-dice-6
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-webcam"></em> bx bx-webcam
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-spray-can"></em> bx bx-spray-can
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-sticker"></em> bx bx-sticker
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-tachometer"></em> bx bx-tachometer
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-game"></em> bx bx-game
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-abacus"></em> bx bx-abacus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-alarm-snooze"></em> bx bx-alarm-snooze
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-alarm-exclamation"></em> bx bx-alarm-exclamation
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-medal"></em> bx bx-medal
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-task-x"></em> bx bx-task-x
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-barcode-reader"></em> bx bx-barcode-reader
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-blanket"></em> bx bx-blanket
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-bone"></em> bx bx-bone
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-bong"></em> bx bx-bong
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-book-alt"></em> bx bx-book-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-book-heart"></em> bx bx-book-heart
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-book-add"></em> bx bx-book-add
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-bracket"></em> bx bx-bracket
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-brain"></em> bx bx-brain
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-border-outer"></em> bx bx-border-outer
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-braille"></em> bx bx-braille
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-window-alt"></em> bx bx-window-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-calendar-heart"></em> bx bx-calendar-heart
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-wine"></em> bx bx-wine
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-vial"></em> bx bx-vial
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-color-fill"></em> bx bx-color-fill
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-capsule"></em> bx bx-capsule
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-eraser"></em> bx bx-eraser
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-drink"></em> bx bx-drink
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-cctv"></em> bx bx-cctv
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-chair"></em> bx bx-chair
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-network-chart"></em> bx bx-network-chart
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-vector"></em> bx bx-vector
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-calendar-exclamation"></em> bx bx-calendar-exclamation
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-calendar-star"></em> bx bx-calendar-star
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-camera-home"></em> bx bx-camera-home
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-camera-movie"></em> bx bx-camera-movie
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-caret-right-circle"></em> bx bx-caret-right-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-caret-left-circle"></em> bx bx-caret-left-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-caret-up-circle"></em> bx bx-caret-up-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-caret-down-circle"></em> bx bx-caret-down-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-caret-right-square"></em> bx bx-caret-right-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-caret-up-square"></em> bx bx-caret-up-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-caret-left-square"></em> bx bx-caret-left-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-caret-down-square"></em> bx bx-caret-down-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-shield-x"></em> bx bx-shield-x
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-line-chart-down"></em> bx bx-line-chart-down
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-chevron-down-circle"></em> bx bx-chevron-down-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-chevron-up-circle"></em> bx bx-chevron-up-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-chevron-left-circle"></em> bx bx-chevron-left-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-chevron-right-circle"></em> bx bx-chevron-right-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-chevron-down-square"></em> bx bx-chevron-down-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-chevron-up-square"></em> bx bx-chevron-up-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-chevron-left-square"></em> bx bx-chevron-left-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-chevron-right-square"></em> bx bx-chevron-right-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-church"></em> bx bx-church
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-coin"></em> bx bx-coin
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-coin-stack"></em> bx bx-coin-stack
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-unite"></em> bx bx-unite
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-minus-front"></em> bx bx-minus-front
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-intersect"></em> bx bx-intersect
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-exclude"></em> bx bx-exclude
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-minus-back"></em> bx bx-minus-back
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-merge"></em> bx bx-merge
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-trim"></em> bx bx-trim
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-outline"></em> bx bx-outline
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-meteor"></em> bx bx-meteor
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-refresh"></em> bx bx-refresh
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-home-smile"></em> bx bx-home-smile
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-envelope-open"></em> bx bx-envelope-open
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-message-alt-add"></em> bx bx-message-alt-add
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-message-alt-check"></em> bx bx-message-alt-check
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-message-alt-error"></em> bx bx-message-alt-error
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-message-alt-x"></em> bx bx-message-alt-x
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-message-alt-minus"></em> bx bx-message-alt-minus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-message-alt-edit"></em> bx bx-message-alt-edit
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-message-alt-detail"></em> bx bx-message-alt-detail
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-message-rounded-check"></em> bx bx-message-rounded-check
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-message-rounded-error"></em> bx bx-message-rounded-error
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-message-rounded-x"></em> bx bx-message-rounded-x
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-message-rounded-minus"></em> bx bx-message-rounded-minus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-message-rounded-edit"></em> bx bx-message-rounded-edit
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-message-rounded-add"></em> bx bx-message-rounded-add
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-message-rounded-detail"></em> bx bx-message-rounded-detail
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-message-check"></em> bx bx-message-check
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-message-error"></em> bx bx-message-error
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-message-x"></em> bx bx-message-x
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-message-minus"></em> bx bx-message-minus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-message-edit"></em> bx bx-message-edit
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-message-add"></em> bx bx-message-add
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-message-detail"></em> bx bx-message-detail
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-message-square-check"></em> bx bx-message-square-check
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-message-square-error"></em> bx bx-message-square-error
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-message-square-x"></em> bx bx-message-square-x
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-message-square-minus"></em> bx bx-message-square-minus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-message-square-edit"></em> bx bx-message-square-edit
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-message-square-add"></em> bx bx-message-square-add
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-message-square-detail"></em> bx bx-message-square-detail
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-comment-check"></em> bx bx-comment-check
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-comment-error"></em> bx bx-comment-error
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-comment-x"></em> bx bx-comment-x
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-comment-edit"></em> bx bx-comment-edit
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-comment-minus"></em> bx bx-comment-minus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-comment-add"></em> bx bx-comment-add
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-comment-detail"></em> bx bx-comment-detail
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-cookie"></em> bx bx-cookie
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-credit-card-front"></em> bx bx-credit-card-front
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-door-open"></em> bx bx-door-open
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-donate-heart"></em> bx bx-donate-heart
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-donate-blood"></em> bx bx-donate-blood
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-shape-polygon"></em> bx bx-shape-polygon
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-bookmark-heart"></em> bx bx-bookmark-heart
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-sort-alt-2"></em> bx bx-sort-alt-2
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-category"></em> bx bx-category
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-category-alt"></em> bx bx-category-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-bookmark-alt"></em> bx bx-bookmark-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-bookmark-alt-plus"></em> bx bx-bookmark-alt-plus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-bookmark-alt-minus"></em> bx bx-bookmark-alt-minus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-tag-alt"></em> bx bx-tag-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-movie-play"></em> bx bx-movie-play
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-expand-alt"></em> bx bx-expand-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-library"></em> bx bx-library
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bx-trip"></em> bx bx-trip
                                            </div>
                                        </div>
                                        <!--Regular end row -->
                        
                                        <h5 class="mt-5">Solid Icons</h5>
                                        <p class="text-muted mb-0">Use class <code>&lt;i class="bx bxs-**">&lt;/i></code></p>

                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-lemon"></em> bx bxs-lemon
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-cable-car"></em> bx bxs-cable-car
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-cricket-ball"></em> bx bxs-cricket-ball
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-tree-alt"></em> bx bxs-tree-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-invader"></em> bx bxs-invader
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-baguette"></em> bx bxs-baguette
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-circle-half"></em> bx bxs-circle-half
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-circle-three-quarter"></em> bx bxs-circle-three-quarter
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-circle-quarter"></em> bx bxs-circle-quarter
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-bowl-rice"></em> bx bxs-bowl-rice
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-bowl-hot"></em> bx bxs-bowl-hot
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-popsicle"></em> bx bxs-popsicle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-party"></em> bx bxs-party
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-leaf"></em> bx bxs-leaf
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-injection"></em> bx bxs-injection
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-dog"></em> bx bxs-dog
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-cat"></em> bx bxs-cat
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-hand"></em> bx bxs-hand
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-checkbox-minus"></em> bx bxs-checkbox-minus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-speaker"></em> bx bxs-speaker
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-registered"></em> bx bxs-registered
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-phone-off"></em> bx bxs-phone-off
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-buildings"></em> bx bxs-buildings
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-store-alt"></em> bx bxs-store-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-bar-chart-alt-2"></em> bx bxs-bar-chart-alt-2
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-message-dots"></em> bx bxs-message-dots
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-message-rounded-dots"></em> bx bxs-message-rounded-dots
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-devices"></em> bx bxs-devices
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-memory-card"></em> bx bxs-memory-card
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-wallet-alt"></em> bx bxs-wallet-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-bank"></em> bx bxs-bank
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-slideshow"></em> bx bxs-slideshow
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-message-square"></em> bx bxs-message-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-message-square-dots"></em> bx bxs-message-square-dots
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-book-content"></em> bx bxs-book-content
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-chat"></em> bx bxs-chat
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-edit-alt"></em> bx bxs-edit-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-mouse-alt"></em> bx bxs-mouse-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-bug-alt"></em> bx bxs-bug-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-notepad"></em> bx bxs-notepad
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-video-recording"></em> bx bxs-video-recording
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-direction-left"></em> bx bxs-direction-left
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-ghost"></em> bx bxs-ghost
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-quote-single-left"></em> bx bxs-quote-single-left
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-quote-single-right"></em> bx bxs-quote-single-right
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-user-pin"></em> bx bxs-user-pin
                                            </div>
                        
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-copy-alt"></em> bx bxs-copy-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-file-doc"></em> bx bxs-file-doc
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-file-html"></em> bx bxs-file-html
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-comment-detail"></em> bx bxs-comment-detail
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-comment-add"></em> bx bxs-comment-add
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-file-css"></em> bx bxs-file-css
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-file-js"></em> bx bxs-file-js
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-file-json"></em> bx bxs-file-json
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-file-md"></em> bx bxs-file-md
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-file-txt"></em> bx bxs-file-txt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-file-png"></em> bx bxs-file-png
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-file-jpg"></em> bx bxs-file-jpg
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-file-gif"></em> bx bxs-file-gif
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-analyse"></em> bx bxs-analyse
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-plane-take-off"></em> bx bxs-plane-take-off
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-plane-land"></em> bx bxs-plane-land
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-parking"></em> bx bxs-parking
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-id-card"></em> bx bxs-id-card
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-adjust-alt"></em> bx bxs-adjust-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-landscape"></em> bx bxs-landscape
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-traffic"></em> bx bxs-traffic
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-comment"></em> bx bxs-comment
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-comment-dots"></em> bx bxs-comment-dots
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-wine"></em> bx bxs-wine
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-pyramid"></em> bx bxs-pyramid
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-cylinder"></em> bx bxs-cylinder
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-graduation"></em> bx bxs-graduation
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-lock-alt"></em> bx bxs-lock-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-lock-open-alt"></em> bx bxs-lock-open-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-hourglass-top"></em> bx bxs-hourglass-top
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-hourglass-bottom"></em> bx bxs-hourglass-bottom
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-bowling-ball"></em> bx bxs-bowling-ball
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-search-alt-2"></em> bx bxs-search-alt-2
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-droplet-half"></em> bx bxs-droplet-half
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-paint-roll"></em> bx bxs-paint-roll
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-shield-alt-2"></em> bx bxs-shield-alt-2
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-error-alt"></em> bx bxs-error-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-square"></em> bx bxs-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-square-rounded"></em> bx bxs-square-rounded
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-polygon"></em> bx bxs-polygon
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-cube-alt"></em> bx bxs-cube-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-cuboid"></em> bx bxs-cuboid
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-user-voice"></em> bx bxs-user-voice
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-building-house"></em> bx bxs-building-house
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-doughnut-chart"></em> bx bxs-doughnut-chart
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-circle"></em> bx bxs-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-log-in-circle"></em> bx bxs-log-in-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-log-out-circle"></em> bx bxs-log-out-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-log-in"></em> bx bxs-log-in
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-log-out"></em> bx bxs-log-out
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-notification"></em> bx bxs-notification
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-notification-off"></em> bx bxs-notification-off
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-check-square"></em> bx bxs-check-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-message-alt"></em> bx bxs-message-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-message-alt-dots"></em> bx bxs-message-alt-dots
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-no-entry"></em> bx bxs-no-entry
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-traffic-barrier"></em> bx bxs-traffic-barrier
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-component"></em> bx bxs-component
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-plane-alt"></em> bx bxs-plane-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-palette"></em> bx bxs-palette
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-basket"></em> bx bxs-basket
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-purchase-tag-alt"></em> bx bxs-purchase-tag-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-receipt"></em> bx bxs-receipt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-map-pin"></em> bx bxs-map-pin
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-band-aid"></em> bx bxs-band-aid
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-credit-card-alt"></em> bx bxs-credit-card-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-credit-card"></em> bx bxs-credit-card
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-paint"></em> bx bxs-paint
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-brightness-half"></em> bx bxs-brightness-half
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-brightness"></em> bx bxs-brightness
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-rectangle"></em> bx bxs-rectangle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-right-arrow"></em> bx bxs-right-arrow
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-left-arrow"></em> bx bxs-left-arrow
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-up-arrow"></em> bx bxs-up-arrow
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-down-arrow"></em> bx bxs-down-arrow
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-right-top-arrow-circle"></em> bx bxs-right-top-arrow-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-right-down-arrow-circle"></em> bx bxs-right-down-arrow-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-left-top-arrow-circle"></em> bx bxs-left-top-arrow-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-left-down-arrow-circle"></em> bx bxs-left-down-arrow-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-institution"></em> bx bxs-institution
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-school"></em> bx bxs-school
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-chalkboard"></em> bx bxs-chalkboard
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-skip-previous-circle"></em> bx bxs-skip-previous-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-skip-next-circle"></em> bx bxs-skip-next-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-data"></em> bx bxs-data
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-mobile"></em> bx bxs-mobile
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-folder-minus"></em> bx bxs-folder-minus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-bell-plus"></em> bx bxs-bell-plus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-bell-minus"></em> bx bxs-bell-minus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-search"></em> bx bxs-search
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-zoom-in"></em> bx bxs-zoom-in
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-zoom-out"></em> bx bxs-zoom-out
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-grid"></em> bx bxs-grid
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-user-x"></em> bx bxs-user-x
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-user-check"></em> bx bxs-user-check
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-compass"></em> bx bxs-compass
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-stopwatch"></em> bx bxs-stopwatch
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-timer"></em> bx bxs-timer
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-time"></em> bx bxs-time
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-pie-chart-alt-2"></em> bx bxs-pie-chart-alt-2
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-time-five"></em> bx bxs-time-five
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-bookmarks"></em> bx bxs-bookmarks
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-bookmark-minus"></em> bx bxs-bookmark-minus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-briefcase-alt-2"></em> bx bxs-briefcase-alt-2
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-calendar"></em> bx bxs-calendar
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-calendar-alt"></em> bx bxs-calendar-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-calendar-plus"></em> bx bxs-calendar-plus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-calendar-minus"></em> bx bxs-calendar-minus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-calendar-x"></em> bx bxs-calendar-x
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-calendar-check"></em> bx bxs-calendar-check
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-calendar-event"></em> bx bxs-calendar-event
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-customize"></em> bx bxs-customize
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-carousel"></em> bx bxs-carousel
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-rewind-circle"></em> bx bxs-rewind-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-fast-forward-circle"></em> bx bxs-fast-forward-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-mobile-vibration"></em> bx bxs-mobile-vibration
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-quote-alt-left"></em> bx bxs-quote-alt-left
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-quote-alt-right"></em> bx bxs-quote-alt-right
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-layout"></em> bx bxs-layout
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-brush-alt"></em> bx bxs-brush-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-exit"></em> bx bxs-exit
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-extension"></em> bx bxs-extension
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-file-find"></em> bx bxs-file-find
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-face"></em> bx bxs-face
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-label"></em> bx bxs-label
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-check-shield"></em> bx bxs-check-shield
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-add-to-queue"></em> bx bxs-add-to-queue
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-archive-in"></em> bx bxs-archive-in
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-archive-out"></em> bx bxs-archive-out
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-alarm-add"></em> bx bxs-alarm-add
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-image-add"></em> bx bxs-image-add
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-fridge"></em> bx bxs-fridge
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-dish"></em> bx bxs-dish
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-spa"></em> bx bxs-spa
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-cake"></em> bx bxs-cake
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-city"></em> bx bxs-city
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-bolt-circle"></em> bx bxs-bolt-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-caret-up-circle"></em> bx bxs-caret-up-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-caret-down-circle"></em> bx bxs-caret-down-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-caret-left-circle"></em> bx bxs-caret-left-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-caret-right-circle"></em> bx bxs-caret-right-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-tone"></em> bx bxs-tone
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-baby-carriage"></em> bx bxs-baby-carriage
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-hand-up"></em> bx bxs-hand-up
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-hand-right"></em> bx bxs-hand-right
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-hand-down"></em> bx bxs-hand-down
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-hand-left"></em> bx bxs-hand-left
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-clinic"></em> bx bxs-clinic
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-offer"></em> bx bxs-offer
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-food-menu"></em> bx bxs-food-menu
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-camera-plus"></em> bx bxs-camera-plus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-business"></em> bx bxs-business
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-angry"></em> bx bxs-angry
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-happy-heart-eyes"></em> bx bxs-happy-heart-eyes
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-dizzy"></em> bx bxs-dizzy
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-wink-smile"></em> bx bxs-wink-smile
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-smile"></em> bx bxs-smile
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-meh"></em> bx bxs-meh
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-meh-alt"></em> bx bxs-meh-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-confused"></em> bx bxs-confused
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-sleepy"></em> bx bxs-sleepy
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-sad"></em> bx bxs-sad
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-happy"></em> bx bxs-happy
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-shocked"></em> bx bxs-shocked
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-happy-beaming"></em> bx bxs-happy-beaming
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-tired"></em> bx bxs-tired
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-cool"></em> bx bxs-cool
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-meh-blank"></em> bx bxs-meh-blank
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-laugh"></em> bx bxs-laugh
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-happy-alt"></em> bx bxs-happy-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-upside-down"></em> bx bxs-upside-down
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-wink-tongue"></em> bx bxs-wink-tongue
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-comment-error"></em> bx bxs-comment-error
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-vial"></em> bx bxs-vial
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-adjust"></em> bx bxs-adjust
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-alarm"></em> bx bxs-alarm
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-alarm-off"></em> bx bxs-alarm-off
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-album"></em> bx bxs-album
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-archive"></em> bx bxs-archive
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-camera"></em> bx bxs-camera
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-camera-off"></em> bx bxs-camera-off
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-folder"></em> bx bxs-folder
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-folder-plus"></em> bx bxs-folder-plus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-award"></em> bx bxs-award
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-bar-chart-square"></em> bx bxs-bar-chart-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-barcode"></em> bx bxs-barcode
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-battery"></em> bx bxs-battery
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-battery-charging"></em> bx bxs-battery-charging
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-battery-full"></em> bx bxs-battery-full
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-bell"></em> bx bxs-bell
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-bell-off"></em> bx bxs-bell-off
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-bolt"></em> bx bxs-bolt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-book"></em> bx bxs-book
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-book-bookmark"></em> bx bxs-book-bookmark
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-bookmark"></em> bx bxs-bookmark
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-bookmark-plus"></em> bx bxs-bookmark-plus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-book-open"></em> bx bxs-book-open
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-bookmark-star"></em> bx bxs-bookmark-star
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-briefcase"></em> bx bxs-briefcase
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-briefcase-alt"></em> bx bxs-briefcase-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-bug"></em> bx bxs-bug
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-building"></em> bx bxs-building
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-bulb"></em> bx bxs-bulb
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-buoy"></em> bx bxs-buoy
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-calculator"></em> bx bxs-calculator
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-captions"></em> bx bxs-captions
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-car"></em> bx bxs-car
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-cart-alt"></em> bx bxs-cart-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-cart"></em> bx bxs-cart
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-chart"></em> bx bxs-chart
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-chip"></em> bx bxs-chip
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-cloud-download"></em> bx bxs-cloud-download
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-cloud-upload"></em> bx bxs-cloud-upload
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-cloud"></em> bx bxs-cloud
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-coffee"></em> bx bxs-coffee
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-cog"></em> bx bxs-cog
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-collection"></em> bx bxs-collection
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-contact"></em> bx bxs-contact
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-copy"></em> bx bxs-copy
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-coupon"></em> bx bxs-coupon
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-crown"></em> bx bxs-crown
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-cube"></em> bx bxs-cube
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-detail"></em> bx bxs-detail
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-discount"></em> bx bxs-discount
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-dislike"></em> bx bxs-dislike
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-dock-bottom"></em> bx bxs-dock-bottom
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-dock-left"></em> bx bxs-dock-left
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-dock-right"></em> bx bxs-dock-right
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-dock-top"></em> bx bxs-dock-top
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-down-arrow-circle"></em> bx bxs-down-arrow-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-download"></em> bx bxs-download
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-downvote"></em> bx bxs-downvote
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-drink"></em> bx bxs-drink
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-droplet"></em> bx bxs-droplet
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-duplicate"></em> bx bxs-duplicate
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-eject"></em> bx bxs-eject
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-envelope"></em> bx bxs-envelope
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-error-circle"></em> bx bxs-error-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-error"></em> bx bxs-error
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-file-image"></em> bx bxs-file-image
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-file"></em> bx bxs-file
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-filter-alt"></em> bx bxs-filter-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-first-aid"></em> bx bxs-first-aid
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-flag-alt"></em> bx bxs-flag-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-flag"></em> bx bxs-flag
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-gift"></em> bx bxs-gift
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-grid-alt"></em> bx bxs-grid-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-group"></em> bx bxs-group
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-hdd"></em> bx bxs-hdd
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-heart"></em> bx bxs-heart
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-hide"></em> bx bxs-hide
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-home"></em> bx bxs-home
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-hot"></em> bx bxs-hot
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-hourglass"></em> bx bxs-hourglass
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-image"></em> bx bxs-image
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-inbox"></em> bx bxs-inbox
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-info-circle"></em> bx bxs-info-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-joystick-alt"></em> bx bxs-joystick-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-joystick"></em> bx bxs-joystick
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-layer"></em> bx bxs-layer
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-left-arrow-circle"></em> bx bxs-left-arrow-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-like"></em> bx bxs-like
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-lock-open"></em> bx bxs-lock-open
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-lock"></em> bx bxs-lock
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-map-alt"></em> bx bxs-map-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-map"></em> bx bxs-map
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-message-rounded"></em> bx bxs-message-rounded
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-message"></em> bx bxs-message
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-microphone-off"></em> bx bxs-microphone-off
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-microphone"></em> bx bxs-microphone
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-minus-circle"></em> bx bxs-minus-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-moon"></em> bx bxs-moon
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-mouse"></em> bx bxs-mouse
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-music"></em> bx bxs-music
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-navigation"></em> bx bxs-navigation
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-news"></em> bx bxs-news
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-package"></em> bx bxs-package
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-paper-plane"></em> bx bxs-paper-plane
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-paste"></em> bx bxs-paste
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-pen"></em> bx bxs-pen
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-pencil"></em> bx bxs-pencil
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-phone-call"></em> bx bxs-phone-call
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-phone-incoming"></em> bx bxs-phone-incoming
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-phone-outgoing"></em> bx bxs-phone-outgoing
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-phone"></em> bx bxs-phone
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-pie-chart-alt"></em> bx bxs-pie-chart-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-pie-chart"></em> bx bxs-pie-chart
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-pin"></em> bx bxs-pin
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-playlist"></em> bx bxs-playlist
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-plug"></em> bx bxs-plug
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-plus-circle"></em> bx bxs-plus-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-printer"></em> bx bxs-printer
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-purchase-tag"></em> bx bxs-purchase-tag
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-quote-left"></em> bx bxs-quote-left
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-quote-right"></em> bx bxs-quote-right
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-radio"></em> bx bxs-radio
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-rename"></em> bx bxs-rename
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-report"></em> bx bxs-report
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-right-arrow-circle"></em> bx bxs-right-arrow-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-ruler"></em> bx bxs-ruler
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-save"></em> bx bxs-save
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-sort-alt"></em> bx bxs-sort-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-select-multiple"></em> bx bxs-select-multiple
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-send"></em> bx bxs-send
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-server"></em> bx bxs-server
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-share-alt"></em> bx bxs-share-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-share"></em> bx bxs-share
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-shield"></em> bx bxs-shield
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-shopping-bag-alt"></em> bx bxs-shopping-bag-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-shopping-bag"></em> bx bxs-shopping-bag
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-show"></em> bx bxs-show
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-spreadsheet"></em> bx bxs-spreadsheet
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-star"></em> bx bxs-star
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-store"></em> bx bxs-store
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-sun"></em> bx bxs-sun
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-t-shirt"></em> bx bxs-t-shirt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-tag-x"></em> bx bxs-tag-x
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-tag"></em> bx bxs-tag
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-tennis-ball"></em> bx bxs-tennis-ball
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-terminal"></em> bx bxs-terminal
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-to-top"></em> bx bxs-to-top
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-toggle-left"></em> bx bxs-toggle-left
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-toggle-right"></em> bx bxs-toggle-right
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-torch"></em> bx bxs-torch
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-trash-alt"></em> bx bxs-trash-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-trash"></em> bx bxs-trash
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-trophy"></em> bx bxs-trophy
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-truck"></em> bx bxs-truck
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-up-arrow-circle"></em> bx bxs-up-arrow-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-upvote"></em> bx bxs-upvote
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-user-circle"></em> bx bxs-user-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-user-detail"></em> bx bxs-user-detail
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-user-minus"></em> bx bxs-user-minus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-user-plus"></em> bx bxs-user-plus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-user"></em> bx bxs-user
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-video-off"></em> bx bxs-video-off
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-video"></em> bx bxs-video
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-videos"></em> bx bxs-videos
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-volume-full"></em> bx bxs-volume-full
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-volume-low"></em> bx bxs-volume-low
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-volume-mute"></em> bx bxs-volume-mute
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-volume"></em> bx bxs-volume
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-wallet"></em> bx bxs-wallet
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-watch-alt"></em> bx bxs-watch-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-watch"></em> bx bxs-watch
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-widget"></em> bx bxs-widget
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-wrench"></em> bx bxs-wrench
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-x-circle"></em> bx bxs-x-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-zap"></em> bx bxs-zap
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-folder-open"></em> bx bxs-folder-open
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-battery-low"></em> bx bxs-battery-low
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-conversation"></em> bx bxs-conversation
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-dashboard"></em> bx bxs-dashboard
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-file-plus"></em> bx bxs-file-plus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-certification"></em> bx bxs-certification
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-rocket"></em> bx bxs-rocket
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-check-circle"></em> bx bxs-check-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-checkbox"></em> bx bxs-checkbox
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-checkbox-checked"></em> bx bxs-checkbox-checked
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-star-half"></em> bx bxs-star-half
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-bus"></em> bx bxs-bus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-bot"></em> bx bxs-bot
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-area"></em> bx bxs-area
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-bed"></em> bx bxs-bed
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-bath"></em> bx bxs-bath
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-train"></em> bx bxs-train
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-taxi"></em> bx bxs-taxi
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-movie"></em> bx bxs-movie
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-planet"></em> bx bxs-planet
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-video-plus"></em> bx bxs-video-plus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-box"></em> bx bxs-box
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-key"></em> bx bxs-key
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-photo-album"></em> bx bxs-photo-album
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-bell-ring"></em> bx bxs-bell-ring
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-file-blank"></em> bx bxs-file-blank
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-edit"></em> bx bxs-edit
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-ball"></em> bx bxs-ball
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-film"></em> bx bxs-film
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-dollar-circle"></em> bx bxs-dollar-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-skull"></em> bx bxs-skull
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-image-alt"></em> bx bxs-image-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-microphone-alt"></em> bx bxs-microphone-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-x-square"></em> bx bxs-x-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-plus-square"></em> bx bxs-plus-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-minus-square"></em> bx bxs-minus-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-disc"></em> bx bxs-disc
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-flame"></em> bx bxs-flame
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-badge"></em> bx bxs-badge
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-note"></em> bx bxs-note
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-help-circle"></em> bx bxs-help-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-card"></em> bx bxs-card
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-magnet"></em> bx bxs-magnet
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-ambulance"></em> bx bxs-ambulance
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-left-arrow-square"></em> bx bxs-left-arrow-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-up-arrow-square"></em> bx bxs-up-arrow-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-down-arrow-square"></em> bx bxs-down-arrow-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-right-arrow-square"></em> bx bxs-right-arrow-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-user-badge"></em> bx bxs-user-badge
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-gas-pump"></em> bx bxs-gas-pump
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-landmark"></em> bx bxs-landmark
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-badge-check"></em> bx bxs-badge-check
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-coffee-alt"></em> bx bxs-coffee-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-brush"></em> bx bxs-brush
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-keyboard"></em> bx bxs-keyboard
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-megaphone"></em> bx bxs-megaphone
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-directions"></em> bx bxs-directions
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-direction-right"></em> bx bxs-direction-right
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-joystick-button"></em> bx bxs-joystick-button
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-flask"></em> bx bxs-flask
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-capsule"></em> bx bxs-capsule
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-color-fill"></em> bx bxs-color-fill
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-hotel"></em> bx bxs-hotel
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-magic-wand"></em> bx bxs-magic-wand
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-eraser"></em> bx bxs-eraser
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-cloud-rain"></em> bx bxs-cloud-rain
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-cloud-lightning"></em> bx bxs-cloud-lightning
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-eyedropper"></em> bx bxs-eyedropper
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-user-rectangle"></em> bx bxs-user-rectangle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-plane"></em> bx bxs-plane
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-tree"></em> bx bxs-tree
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-factory"></em> bx bxs-factory
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-ship"></em> bx bxs-ship
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-yin-yang"></em> bx bxs-yin-yang
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-file-pdf"></em> bx bxs-file-pdf
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-home-circle"></em> bx bxs-home-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-location-plus"></em> bx bxs-location-plus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-arch"></em> bx bxs-arch
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-badge-dollar"></em> bx bxs-badge-dollar
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-beer"></em> bx bxs-beer
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-bible"></em> bx bxs-bible
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-bomb"></em> bx bxs-bomb
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-bus-school"></em> bx bxs-bus-school
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-cabinet"></em> bx bxs-cabinet
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-calendar-edit"></em> bx bxs-calendar-edit
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-car-wash"></em> bx bxs-car-wash
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-car-garage"></em> bx bxs-car-garage
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-car-mechanic"></em> bx bxs-car-mechanic
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-car-crash"></em> bx bxs-car-crash
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-coffee-togo"></em> bx bxs-coffee-togo
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-chess"></em> bx bxs-chess
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-dryer"></em> bx bxs-dryer
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-washer"></em> bx bxs-washer
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-pointer"></em> bx bxs-pointer
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-microchip"></em> bx bxs-microchip
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-piano"></em> bx bxs-piano
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-file-export"></em> bx bxs-file-export
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-file-import"></em> bx bxs-file-import
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-flag-checkered"></em> bx bxs-flag-checkered
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-heart-circle"></em> bx bxs-heart-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-heart-square"></em> bx bxs-heart-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-home-heart"></em> bx bxs-home-heart
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-info-square"></em> bx bxs-info-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-layer-plus"></em> bx bxs-layer-plus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-layer-minus"></em> bx bxs-layer-minus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-traffic-cone"></em> bx bxs-traffic-cone
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-mask"></em> bx bxs-mask
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-low-vision"></em> bx bxs-low-vision
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-radiation"></em> bx bxs-radiation
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-been-here"></em> bx bxs-been-here
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-arrow-from-top"></em> bx bxs-arrow-from-top
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-arrow-from-bottom"></em> bx bxs-arrow-from-bottom
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-arrow-from-left"></em> bx bxs-arrow-from-left
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-arrow-from-right"></em> bx bxs-arrow-from-right
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-arrow-to-right"></em> bx bxs-arrow-to-right
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-arrow-to-left"></em> bx bxs-arrow-to-left
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-arrow-to-top"></em> bx bxs-arrow-to-top
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-arrow-to-bottom"></em> bx bxs-arrow-to-bottom
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-book-reader"></em> bx bxs-book-reader
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-edit-location"></em> bx bxs-edit-location
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-ev-station"></em> bx bxs-ev-station
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-shapes"></em> bx bxs-shapes
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-florist"></em> bx bxs-florist
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-pizza"></em> bx bxs-pizza
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-calendar-week"></em> bx bxs-calendar-week
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-dice-1"></em> bx bxs-dice-1
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-dice-2"></em> bx bxs-dice-2
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-dice-3"></em> bx bxs-dice-3
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-dice-4"></em> bx bxs-dice-4
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-dice-5"></em> bx bxs-dice-5
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-dice-6"></em> bx bxs-dice-6
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-webcam"></em> bx bxs-webcam
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-spray-can"></em> bx bxs-spray-can
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-file-archive"></em> bx bxs-file-archive
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-sticker"></em> bx bxs-sticker
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-tachometer"></em> bx bxs-tachometer
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-thermometer"></em> bx bxs-thermometer
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-game"></em> bx bxs-game
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-alarm-snooze"></em> bx bxs-alarm-snooze
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-alarm-exclamation"></em> bx bxs-alarm-exclamation
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-chevrons-left"></em> bx bxs-chevrons-left
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-chevrons-right"></em> bx bxs-chevrons-right
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-chevrons-up"></em> bx bxs-chevrons-up
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-chevrons-down"></em> bx bxs-chevrons-down
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-chevron-down"></em> bx bxs-chevron-down
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-chevron-up"></em> bx bxs-chevron-up
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-chevron-right"></em> bx bxs-chevron-right
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-chevron-left"></em> bx bxs-chevron-left
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-guitar-amp"></em> bx bxs-guitar-amp
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-up-arrow-alt"></em> bx bxs-up-arrow-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-down-arrow-alt"></em> bx bxs-down-arrow-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-left-arrow-alt"></em> bx bxs-left-arrow-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-right-arrow-alt"></em> bx bxs-right-arrow-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-medal"></em> bx bxs-medal
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-shopping-bags"></em> bx bxs-shopping-bags
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-baseball"></em> bx bxs-baseball
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-basketball"></em> bx bxs-basketball
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-blanket"></em> bx bxs-blanket
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-binoculars"></em> bx bxs-binoculars
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-bone"></em> bx bxs-bone
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-bong"></em> bx bxs-bong
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-book-alt"></em> bx bxs-book-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-book-heart"></em> bx bxs-book-heart
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-book-add"></em> bx bxs-book-add
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-brain"></em> bx bxs-brain
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-window-alt"></em> bx bxs-window-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-calendar-heart"></em> bx bxs-calendar-heart
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-cctv"></em> bx bxs-cctv
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-network-chart"></em> bx bxs-network-chart
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-vector"></em> bx bxs-vector
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-calendar-exclamation"></em> bx bxs-calendar-exclamation
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-calendar-star"></em> bx bxs-calendar-star
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-camera-home"></em> bx bxs-camera-home
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-camera-movie"></em> bx bxs-camera-movie
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-backpack"></em> bx bxs-backpack
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-cart-download"></em> bx bxs-cart-download
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-cart-add"></em> bx bxs-cart-add
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-car-battery"></em> bx bxs-car-battery
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-caret-right-square"></em> bx bxs-caret-right-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-caret-up-square"></em> bx bxs-caret-up-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-caret-left-square"></em> bx bxs-caret-left-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-caret-down-square"></em> bx bxs-caret-down-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-shield-x"></em> bx bxs-shield-x
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-chevron-down-circle"></em> bx bxs-chevron-down-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-chevron-up-circle"></em> bx bxs-chevron-up-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-chevron-left-circle"></em> bx bxs-chevron-left-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-chevron-right-circle"></em> bx bxs-chevron-right-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-chevron-down-square"></em> bx bxs-chevron-down-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-chevron-up-square"></em> bx bxs-chevron-up-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-chevron-left-square"></em> bx bxs-chevron-left-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-chevron-right-square"></em> bx bxs-chevron-right-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-church"></em> bx bxs-church
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-coin"></em> bx bxs-coin
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-coin-stack"></em> bx bxs-coin-stack
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-bullseye"></em> bx bxs-bullseye
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-meteor"></em> bx bxs-meteor
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-home-smile"></em> bx bxs-home-smile
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-envelope-open"></em> bx bxs-envelope-open
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-message-alt-add"></em> bx bxs-message-alt-add
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-message-alt-check"></em> bx bxs-message-alt-check
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-message-alt-error"></em> bx bxs-message-alt-error
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-message-alt-x"></em> bx bxs-message-alt-x
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-message-alt-minus"></em> bx bxs-message-alt-minus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-message-alt-edit"></em> bx bxs-message-alt-edit
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-message-alt-detail"></em> bx bxs-message-alt-detail
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-message-rounded-check"></em> bx bxs-message-rounded-check
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-message-rounded-error"></em> bx bxs-message-rounded-error
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-message-rounded-x"></em> bx bxs-message-rounded-x
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-message-rounded-minus"></em> bx bxs-message-rounded-minus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-message-rounded-edit"></em> bx bxs-message-rounded-edit
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-message-rounded-add"></em> bx bxs-message-rounded-add
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-message-rounded-detail"></em> bx bxs-message-rounded-detail
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-message-check"></em> bx bxs-message-check
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-message-error"></em> bx bxs-message-error
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-message-x"></em> bx bxs-message-x
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-message-minus"></em> bx bxs-message-minus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-message-edit"></em> bx bxs-message-edit
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-message-add"></em> bx bxs-message-add
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-message-detail"></em> bx bxs-message-detail
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-message-square-check"></em> bx bxs-message-square-check
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-message-square-error"></em> bx bxs-message-square-error
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-message-square-x"></em> bx bxs-message-square-x
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-message-square-minus"></em> bx bxs-message-square-minus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-message-square-edit"></em> bx bxs-message-square-edit
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-message-square-add"></em> bx bxs-message-square-add
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-message-square-detail"></em> bx bxs-message-square-detail
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-comment-check"></em> bx bxs-comment-check
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-comment-x"></em> bx bxs-comment-x
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-comment-edit"></em> bx bxs-comment-edit
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-comment-minus"></em> bx bxs-comment-minus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-cookie"></em> bx bxs-cookie
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-copyright"></em> bx bxs-copyright
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-credit-card-front"></em> bx bxs-credit-card-front
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-crop"></em> bx bxs-crop
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-diamond"></em> bx bxs-diamond
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-door-open"></em> bx bxs-door-open
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-donate-heart"></em> bx bxs-donate-heart
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-donate-blood"></em> bx bxs-donate-blood
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-bookmark-heart"></em> bx bxs-bookmark-heart
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-category"></em> bx bxs-category
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-category-alt"></em> bx bxs-category-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-bookmark-alt"></em> bx bxs-bookmark-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-bookmark-alt-plus"></em> bx bxs-bookmark-alt-plus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-bookmark-alt-minus"></em> bx bxs-bookmark-alt-minus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-face-mask"></em> bx bxs-face-mask
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-tv"></em> bx bxs-tv
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-tag-alt"></em> bx bxs-tag-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-movie-play"></em> bx bxs-movie-play
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-user-account"></em> bx bxs-user-account
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-virus"></em> bx bxs-virus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxs-virus-block"></em> bx bxs-virus-block
                                            </div>
                                        </div>
                                        <!--Solid Icons end row -->

                                        <h4 class="mt-5">Logos</h4>
                                        <p class="text-muted mb-0">Use class <code>&lt;i class="bx bl-**">&lt;/i></code></p>
                                        <div class="row icon-demo-content">                                        
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-meta"></em> bx bxl-meta
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-upwork"></em> bx bxl-upwork
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-netlify"></em> bx bxl-netlify
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-java"></em> bx bxl-java
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-heroku"></em> bx bxl-heroku
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-go-lang"></em> bx bxl-go-lang
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-gmail"></em> bx bxl-gmail
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-flask"></em> bx bxl-flask
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-99designs"></em> bx bxl-99designs
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-venmo"></em> bx bxl-venmo
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-docker"></em> bx bxl-docker
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-aws"></em> bx bxl-aws
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-tiktok"></em> bx bxl-tiktok
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-sketch"></em> bx bxl-sketch
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-steam"></em> bx bxl-steam
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-trip-advisor"></em> bx bxl-trip-advisor
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-visual-studio"></em> bx bxl-visual-studio
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-unity"></em> bx bxl-unity
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-php"></em> bx bxl-php
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-discord-alt"></em> bx bxl-discord-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-flutter"></em> bx bxl-flutter
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-mastodon"></em> bx bxl-mastodon
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-tailwind-css"></em> bx bxl-tailwind-css
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-instagram-alt"></em> bx bxl-instagram-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-facebook-circle"></em> bx bxl-facebook-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-jquery"></em> bx bxl-jquery
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-imdb"></em> bx bxl-imdb
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-pinterest-alt"></em> bx bxl-pinterest-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-adobe"></em> bx bxl-adobe
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-algolia"></em> bx bxl-algolia
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-audible"></em> bx bxl-audible
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-figma"></em> bx bxl-figma
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-etsy"></em> bx bxl-etsy
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-gitlab"></em> bx bxl-gitlab
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-patreon"></em> bx bxl-patreon
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-redbubble"></em> bx bxl-redbubble
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-facebook"></em> bx bxl-facebook
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-github"></em> bx bxl-github
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-google"></em> bx bxl-google
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-instagram"></em> bx bxl-instagram
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-twitter"></em> bx bxl-twitter
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-youtube"></em> bx bxl-youtube
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-whatsapp"></em> bx bxl-whatsapp
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-tumblr"></em> bx bxl-tumblr
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-behance"></em> bx bxl-behance
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-dribbble"></em> bx bxl-dribbble
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-vimeo"></em> bx bxl-vimeo
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-linkedin"></em> bx bxl-linkedin
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-bitcoin"></em> bx bxl-bitcoin
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-facebook-square"></em> bx bxl-facebook-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-google-plus"></em> bx bxl-google-plus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-google-plus-circle"></em> bx bxl-google-plus-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-linkedin-square"></em> bx bxl-linkedin-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-medium"></em> bx bxl-medium
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-medium-square"></em> bx bxl-medium-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-skype"></em> bx bxl-skype
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-slack-old"></em> bx bxl-slack-old
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-slack"></em> bx bxl-slack
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-twitch"></em> bx bxl-twitch
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-discord"></em> bx bxl-discord
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-reddit"></em> bx bxl-reddit
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-pinterest"></em> bx bxl-pinterest
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-blogger"></em> bx bxl-blogger
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-apple"></em> bx bxl-apple
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-android"></em> bx bxl-android
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-play-store"></em> bx bxl-play-store
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-windows"></em> bx bxl-windows
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-vk"></em> bx bxl-vk
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-pocket"></em> bx bxl-pocket
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-messenger"></em> bx bxl-messenger
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-500px"></em> bx bxl-500px
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-angular"></em> bx bxl-angular
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-codepen"></em> bx bxl-codepen
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-creative-commons"></em> bx bxl-creative-commons
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-digitalocean"></em> bx bxl-digitalocean
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-deviantart"></em> bx bxl-deviantart
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-discourse"></em> bx bxl-discourse
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-dropbox"></em> bx bxl-dropbox
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-drupal"></em> bx bxl-drupal
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-ebay"></em> bx bxl-ebay
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-amazon"></em> bx bxl-amazon
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-digg"></em> bx bxl-digg
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-unsplash"></em> bx bxl-unsplash
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-wikipedia"></em> bx bxl-wikipedia
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-sass"></em> bx bxl-sass
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-foursquare"></em> bx bxl-foursquare
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-invision"></em> bx bxl-invision
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-opera"></em> bx bxl-opera
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-airbnb"></em> bx bxl-airbnb
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-yelp"></em> bx bxl-yelp
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-quora"></em> bx bxl-quora
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-git"></em> bx bxl-git
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-html5"></em> bx bxl-html5
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-product-hunt"></em> bx bxl-product-hunt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-magento"></em> bx bxl-magento
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-stack-overflow"></em> bx bxl-stack-overflow
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-firefox"></em> bx bxl-firefox
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-javascript"></em> bx bxl-javascript
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-nodejs"></em> bx bxl-nodejs
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-kickstarter"></em> bx bxl-kickstarter
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-vuejs"></em> bx bxl-vuejs
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-bing"></em> bx bxl-bing
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-react"></em> bx bxl-react
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-periscope"></em> bx bxl-periscope
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-wordpress"></em> bx bxl-wordpress
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-telegram"></em> bx bxl-telegram
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-stripe"></em> bx bxl-stripe
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-edge"></em> bx bxl-edge
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-paypal"></em> bx bxl-paypal
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-internet-explorer"></em> bx bxl-internet-explorer
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-joomla"></em> bx bxl-joomla
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-dailymotion"></em> bx bxl-dailymotion
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-chrome"></em> bx bxl-chrome
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-baidu"></em> bx bxl-baidu
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-visa"></em> bx bxl-visa
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-mastercard"></em> bx bxl-mastercard
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-redux"></em> bx bxl-redux
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-bootstrap"></em> bx bxl-bootstrap
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-yahoo"></em> bx bxl-yahoo
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-microsoft"></em> bx bxl-microsoft
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-css3"></em> bx bxl-css3
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-jsfiddle"></em> bx bxl-jsfiddle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-shopify"></em> bx bxl-shopify
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-flickr"></em> bx bxl-flickr
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-less"></em> bx bxl-less
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-snapchat"></em> bx bxl-snapchat
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-soundcloud"></em> bx bxl-soundcloud
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-spotify"></em> bx bxl-spotify
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-trello"></em> bx bxl-trello
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-wix"></em> bx bxl-wix
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-mailchimp"></em> bx bxl-mailchimp
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-medium-old"></em> bx bxl-medium-old
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-squarespace"></em> bx bxl-squarespace
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-whatsapp-square"></em> bx bxl-whatsapp-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-flickr-square"></em> bx bxl-flickr-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-dev-to"></em> bx bxl-dev-to
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-zoom"></em> bx bxl-zoom
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-microsoft-teams"></em> bx bxl-microsoft-teams
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-blender"></em> bx bxl-blender
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-kubernetes"></em> bx bxl-kubernetes
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-google-cloud"></em> bx bxl-google-cloud
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-django"></em> bx bxl-django
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-spring-boot"></em> bx bxl-spring-boot
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-tux"></em> bx bxl-tux
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-markdown"></em> bx bxl-markdown
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-python"></em> bx bxl-python
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-ok-ru"></em> bx bxl-ok-ru
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-firebase"></em> bx bxl-firebase
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="bx bxl-c-plus-plus"></em> bx bxl-c-plus-plus
                                            </div>
                                        </div>
                                        <!--Logos end row -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- end row -->
    </Layout>
</template>
