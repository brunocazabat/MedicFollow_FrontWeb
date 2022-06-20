<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

export default {
  page: {
    title: "Line Awesome",
    meta: [{ name: "description", content: appConfig.description }],
  },
  data() {
    return {
      title: "Line Awesome",
      items: [
        {
          text: "Icons",
          href: "/",
        },
        {
          text: "Line Awesome",
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
    <div class="row icon-demo-content">
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-header">
                                        <h4 class="card-title">Examples</h4>
                                        <p class="text-muted mb-0">Use <code>&lt;i class="lab la-*-*">&lt;/i></code> class.</p>
                                    </div>
                                    <div class="card-body">
                                        <h6 class="text-uppercase text-muted fw-semibold">Accessibility</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-accessible-icon"></em> lab la-accessible-icon
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-american-sign-language-interpreting"></em> las la-american-sign-language-interpreting
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-assistive-listening-systems"></em> las la-assistive-listening-systems
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-audio-description"></em> las la-audio-description
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-blind"></em> las la-blind
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-braille"></em> las la-braille
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-closed-captioning"></em> las la-closed-captioning
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-deaf"></em> las la-deaf
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-low-vision"></em> las la-low-vision
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-phone-volume"></em> las la-phone-volume
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-question-circle"></em> las la-question-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sign-language"></em> las la-sign-language
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tty"></em> las la-tty
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-universal-access"></em> las la-universal-acces
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-wheelchair"></em> las la-wheelchair
                                            </div>
                                        </div>
                                        <!-- end row -->

                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Alert</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bell"></em> las la-bell
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bell-slash"></em> las la-bell-slash
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-exclamation"></em> las la-exclamation
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-exclamation-circle"></em> las la-exclamation-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-exclamation-triangle"></em> las la-exclamation-triangle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-radiation"></em> las la-radiation
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-radiation-alt"></em> las la-radiation-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-skull-crossbones"></em> las la-skull-crossbones
                                            </div>
                                        </div>
                                        <!-- end row -->

                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Animals</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cat"></em> las la-cat
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-crow"></em> las la-crow
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dog"></em> las la-dog
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dove"></em> las la-dove
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dragon"></em> las la-dragon
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-feather"></em> las la-feather
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-feather-alt"></em> las la-feather-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-fish"></em> las la-fish
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-frog"></em> las la-frog
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hippo"></em> las la-hippo
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-horse"></em> las la-horse
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-horse-head"></em> las la-horse-head
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-kiwi-bird"></em> las la-kiwi-bird
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-otter"></em> las la-otter
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-paw"></em> las la-paw
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-spider"></em> las la-spider
                                            </div>
                                        </div>
                                        <!-- end row -->

                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Arrows</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-angle-double-down"></em>las la-angle-double-down
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-angle-double-left"></em>las la-angle-double-left
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-angle-double-right"></em>las la-angle-double-right
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-angle-double-up"></em>las la-angle-double-up
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-angle-down"></em>las la-angle-down
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-angle-left"></em>las la-angle-left
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-angle-right"></em>las la-angle-right
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-angle-up"></em>las la-angle-up
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-arrow-alt-circle-down"></em>las la-arrow-alt-circle-down
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-arrow-alt-circle-left"></em>las la-arrow-alt-circle-left
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-arrow-alt-circle-right"></em>las la-arrow-alt-circle-right
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-arrow-alt-circle-up"></em>las la-arrow-alt-circle-up
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-arrow-circle-down"></em> las la-arrow-circle-down
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-arrow-circle-left"></em> las la-arrow-circle-left
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-arrow-circle-right"></em> las la-arrow-circle-right
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-arrow-circle-up"></em> las la-arrow-circle-up
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-arrow-down"></em> las la-arrow-down
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-arrow-left"></em> las la-arrow-left
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-arrow-right"></em> las la-arrow-righ
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-arrow-up"></em> las la-arrow-up
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-arrows-alt"></em> las la-arrows-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-arrows-alt-h"></em> las la-arrows-alt-h
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-arrows-alt-v"></em> las la-arrows-alt-v
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-caret-down"></em> las la-caret-down
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-caret-left"></em> las la-caret-left
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6"> 
                                                <em class="las la-caret-right"></em> las la-caret-right
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-caret-square-down"></em> las la-caret-square-down
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-caret-square-left"></em> las la-caret-square-left
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-caret-square-right"></em> las la-caret-square-right
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-caret-square-up"></em> las la-caret-square-up
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-caret-up"></em> las la-caret-up
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cart-arrow-down"></em> las la-cart-arrow-down
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-chart-line"></em> las la-chart-line
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-chevron-circle-down"></em> las la-chevron-circle-down
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-chevron-circle-left"></em> las la-chevron-circle-left
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-chevron-circle-right"></em> las la-chevron-circle-right
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-chevron-circle-up"></em> las la-chevron-circle-up
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-chevron-down"></em> las la-chevron-down
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-chevron-left"></em> las la-chevron-left
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-chevron-right"></em> las la-chevron-right
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-chevron-up"></em> las la-chevron-up
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cloud-download-alt"></em> las la-cloud-download-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cloud-upload-alt"></em> las la-cloud-upload-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-compress-arrows-alt"></em> las la-compress-arrows-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6"> 
                                                <em class="las la-download"></em> las la-download
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-exchange-alt"></em> las la-exchange-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-expand-arrows-alt"></em> las la-expand-arrows-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-external-link-alt"></em> las la-external-link-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-external-link-square-alt"></em> las la-external-link-square-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hand-point-down"></em> las la-hand-point-down
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6"> 
                                                <em class="las la-hand-point-left"></em> las la-hand-point-left
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hand-point-right"></em> las la-hand-point-right
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hand-point-up"></em> las la-hand-point-up
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hand-pointer"></em> las la-hand-pointer
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-history"></em> las la-history
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-level-down-alt"></em> las la-level-down-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-level-up-alt"></em> las la-level-up-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-location-arrow"></em> las la-location-arrow
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-long-arrow-alt-down"></em> las la-long-arrow-alt-down
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-long-arrow-alt-left"></em> las la-long-arrow-alt-left
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-long-arrow-alt-right"></em> las la-long-arrow-alt-right
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-long-arrow-alt-up"></em> las la-long-arrow-alt-up
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-mouse-pointer"></em> las la-mouse-pointer
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-play"></em> las la-play
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-random"></em> las la-random
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-recycle"></em> las la-recycle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-redo"></em> las la-redo
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-redo-alt"></em> las la-redo-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-reply"></em> las la-reply
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-reply-all"></em> las la-reply-all
                                            </div> 
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-retweet"></em> las la-retweet
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-share"></em> las la-share
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-share-square"></em> las la-share-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sign-in-alt"></em> las la-sign-in-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sign-out-alt"></em> las la-sign-out-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sort"></em> las la-sort
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sort-alpha-down"></em> las la-sort-alpha-down
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sort-alpha-down-alt"></em> las la-sort-alpha-down-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sort-alpha-up"></em> las la-sort-alpha-up
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sort-alpha-up-alt"></em> las la-sort-alpha-up-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sort-amount-down"></em> las la-sort-amount-down
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sort-amount-down-alt"></em> las la-sort-amount-down-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sort-amount-up"></em> las la-sort-amount-up
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sort-amount-up-alt"></em> las la-sort-amount-up-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6"> 
                                                <em class="las la-sort-down"></em> las la-sort-down
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sort-numeric-down"></em> las la-sort-numeric-down
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sort-numeric-down-alt"></em> las la-sort-numeric-down-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sort-numeric-up"></em> las la-sort-numeric-up
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sort-numeric-up-alt"></em> las la-sort-numeric-up-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sort-up"></em> las la-sort-up
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sync"></em> las la-sync
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sync-alt"></em> las la-sync-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-text-height"></em> las la-text-height
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-text-width"></em> las la-text-width
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-undo"></em> las la-undo
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-undo-alt"></em> las la-undo-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-upload"></em> las la-upload
                                            </div>
                                        </div>
                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Audio & Video</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-audio-description"></em> las la-audio-description
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-backward"></em> las la-backward
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-broadcast-tower"></em> las la-broadcast-tower
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-circle"></em> las la-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-closed-captioning"></em> las la-closed-captioning
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-compress"></em> las la-compress
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-compress-arrows-alt"></em> las la-compress-arrows-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-eject"></em> las la-eject
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-expand"></em> las la-expand
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-expand-arrows-alt"></em> las la-expand-arrows-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-fast-backward"></em> las la-fast-backward
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-fast-forward"></em> las la-fast-forward
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-file-audio"></em> las la-file-audio
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-file-video"></em> las la-file-video
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-film"></em> las la-film
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-forward"></em> las la-forward
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-headphones"></em> las la-headphones
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-microphone"></em> las la-microphone
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-microphone-alt"></em> las la-microphone-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-microphone-alt-slash"></em> las la-microphone-alt-slash
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-microphone-slash"></em> las la-microphone-slash
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-music"></em> las la-music
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-pause"></em> las la-pause
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-pause-circle"></em> las la-pause-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-phone-volume"></em> las la-phone-volume
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-photo-video"></em> las la-photo-video
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-play"></em> las la-play
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-play-circle"></em> las la-play-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-podcast"></em> las la-podcast
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-random"></em> las la-random
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-redo"></em> las la-redo
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-redo-alt"></em> las la-redo-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-rss"></em> las la-rss
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-rss-square"></em> las la-rss-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-step-backward"></em> las la-step-backward
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-step-forward"></em> las la-step-forward
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-stop"></em> las la-stop
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-stop-circle"></em> las la-stop-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sync"></em> las la-sync
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sync-alt"></em> las la-sync-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tv"></em> las la-tv
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-undo"></em> las la-undo
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-undo-alt"></em> las la-undo-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-video"></em> las la-video
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-volume-down"></em> las la-volume-down
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-volume-mute"></em> las la-volume-mute
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-volume-off"></em> las la-volume-off
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-volume-up"></em> las la-volume-up
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-youtube"></em> lab la-youtube
                                            </div>
                                        </div>
                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Automotive</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-air-freshener"></em> las la-air-freshener
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-ambulance"></em> las la-ambulance
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bus"></em> las la-bus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bus-alt"></em> las la-bus-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-car"></em> las la-car
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-car-alt"></em> las la-car-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-car-battery"></em> las la-car-battery
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-car-crash"></em> las la-car-crash
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-car-side"></em> las la-car-side
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-charging-station"></em> las la-charging-station
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-gas-pump"></em> las la-gas-pump
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-motorcycle"></em> las la-motorcycle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-oil-can"></em> las la-oil-can
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-shuttle-van"></em> las la-shuttle-van
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tachometer-alt"></em> las la-tachometer-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-taxi"></em> las la-taxi
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-truck"></em> las la-truck
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-truck-monster"></em> las la-truck-monster
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-truck-pickup"></em> las la-truck-pickup
                                            </div>
                                        </div>
                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Autumn</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-apple-alt"></em> las la-apple-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-campground"></em> las la-campground
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cloud-sun"></em> las la-cloud-sun
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-drumstick-bite"></em> las la-drumstick-bite
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-football-ball"></em> las la-football-ball
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hiking"></em> las la-hiking
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-mountain"></em> las la-mountain
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tractor"></em> las la-tractor
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tree"></em> las la-tree
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-wind"></em> las la-wind
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-wine-bottle"></em> las la-wine-bottle
                                            </div>
                                        </div>
                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Beverage</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-beer"></em> las la-beer
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-blender"></em> las la-blender
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cocktail"></em> las la-cocktail
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-coffee"></em> las la-coffee
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-flask"></em> las la-flask
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6"> 
                                                <em class="las la-glass-cheers"></em> las la-glass-cheers
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-glass-martini"></em> las la-glass-martini
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-glass-martini-alt"></em> las la-glass-martini-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-glass-whiskey"></em> las la-glass-whiskey
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-mug-hot"></em> las la-mug-hot
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-wine-bottle"></em> las la-wine-bottle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-wine-glass"></em> las la-wine-glas
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-wine-glass-alt"></em>las la-wine-glass-alt
                                            </div>
                                        </div>
                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Brand Icons</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-500px"></em> lab la-500px
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-accusoft"></em> lab la-accusoft
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-adn"></em> lab la-adn
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-adobe"></em> lab la-adobe
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-adversal"></em> lab la-adversa
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-affiliatetheme"></em> lab la-affiliatetheme
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-airbnb"></em> lab la-airbnb
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-algolia"></em> lab la-algolia
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-amazon"></em> lab la-amazon
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-amilia"></em> lab la-amilia
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-android"></em> lab la-android
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-angellist"></em> lab la-angellist
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-angrycreative"></em> lab la-angrycreative
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-angular"></em> lab la-angular
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-app-store"></em> lab la-app-store
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-app-store-ios"></em> lab la-app-store-ios
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-apper"></em> lab la-apper
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-apple"></em> lab la-apple
                                            </div> 
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-artstation"></em> lab la-artstation
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-asymmetrik"></em> lab la-asymmetrik
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-atlassian"></em> lab la-atlassian
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-audible"></em> lab la-audible
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-autoprefixer"></em> lab la-autoprefixer
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-avianex"></em> lab la-avianex
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6"> 
                                                <em class="lab la-aviato"></em> lab la-aviato
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-aws"></em> lab la-aws
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-bandcamp"></em> lab la-bandcamp
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-battle-net"></em> lab la-battle-net
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-behance"></em> lab la-behance
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-behance-square"></em> lab la-behance-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-bimobject"></em> lab la-bimobject
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-bitbucket"></em> lab la-bitbucket
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-bity"></em> lab la-bity
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-black-tie"></em> lab la-black-tie
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-blackberry"></em> lab la-blackberry
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-blogger"></em> lab la-blogger
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-blogger-b"></em> lab la-blogger-b
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6"> 
                                                <em class="lab la-bootstrap"></em> lab la-bootstrap
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-buffer"></em> lab la-buffer
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-buromobelexperte"></em> lab la-buromobelexperte
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-buy-n-large"></em> lab la-buy-n-large
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-buysellads"></em> lab la-buysellads
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-canadian-maple-leaf"></em> lab la-canadian-maple-leaf
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-centercode"></em> lab la-centercode
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-centos"></em> lab la-centos
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-chrome"></em> lab la-chrome
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-chromecast"></em> lab la-chromecast
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-cloudscale"></em> lab la-cloudscale
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-cloudsmith"></em> lab la-cloudsmith
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-cloudversify"></em> lab la-cloudversify
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-codepen"></em> lab la-codepen
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-codiepie"></em> lab la-codiepie
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-confluence"></em> lab la-confluence
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-connectdevelop"></em> lab la-connectdevelop
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-contao"></em> lab la-contao
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-cotton-bureau"></em> lab la-cotton-bureau
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6"> 
                                                <em class="lab la-cpanel"></em> lab la-cpanel
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-creative-commons"></em>lab la-creative-commons
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-creative-commons-by"></em>lab la-creative-commons-by
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-creative-commons-nc"></em>lab la-creative-commons-nc
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-creative-commons-nc-eu"></em>lab la-creative-commons-nc-eu
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-creative-commons-nc-jp"></em>lab la-creative-commons-nc-jp
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-creative-commons-nd"></em>lab la-creative-commons-nd
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-creative-commons-pd"></em>lab la-creative-commons-pd
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-creative-commons-pd-alt"></em>lab la-creative-commons-pd-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-creative-commons-remix"></em>lab la-creative-commons-remix
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-creative-commons-sa"></em>lab la-creative-commons-sa
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-creative-commons-sampling"></em>lab la-creative-commons-sampling
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-creative-commons-sampling-plus"></em>lab la-creative-commons-sampling-plus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-creative-commons-share"></em>lab la-creative-commons-share
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-creative-commons-zero"></em>lab la-creative-commons-zero
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-css3"></em> lab la-css3
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-css3-alt"></em> lab la-css3-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-cuttlefish"></em> lab la-cuttlefish
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-dashcube"></em> lab la-dashcube
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-delicious"></em> lab la-delicious
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-deploydog"></em> lab la-deploydog
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-deskpro"></em> lab la-deskpro
                                            </div> 
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-dev"></em> lab la-dev
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-deviantart"></em> lab la-deviantart
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-dhl"></em> lab la-dhl
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-diaspora"></em> lab la-diaspora
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-digg"></em> lab la-digg
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-digital-ocean"></em> lab la-digital-ocean
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-discord"></em> lab la-discord
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-discourse"></em> lab la-discourse
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-dochub"></em> lab la-dochub
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-docker"></em> lab la-docker
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-draft2digital"></em> lab la-draft2digital
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-dribbble"></em> lab la-dribbble
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6"> 
                                                <em class="lab la-dribbble-square"></em> lab la-dribbble-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-dropbox"></em> lab la-dropbox
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-drupal"></em> lab la-drupal
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-dyalog"></em> lab la-dyalog
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-earlybirds"></em> lab la-earlybirds
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-ebay"></em> lab la-ebay
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-edge"></em> lab la-edge
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-elementor"></em> lab la-elementor
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-ello"></em> lab la-ello
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-ember"></em> lab la-ember
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-empire"></em> lab la-empire
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-envira"></em> lab la-envira
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-erlang"></em> lab la-erlang
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-etsy"></em> lab la-etsy
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-evernote"></em> lab la-evernote
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-expeditedssl"></em> lab la-expeditedssl
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-facebook"></em> lab la-facebook
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-facebook-f"></em> lab la-facebook-k
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-facebook-messenger"></em> lab la-facebook-messenger
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-facebook-square"></em> lab la-facebook-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-fedex"></em> lab la-fedex
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-fedora"></em> lab la-fedora
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-figma"></em> lab la-figma
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-firefox"></em> lab la-firefox
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-first-order"></em> lab la-first-order
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-first-order-alt"></em> lab la-first-order-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-firstdraft"></em> lab la-firstdraft
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6"> 
                                                <em class="lab la-flickr"></em> lab la-flickr
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-flipboard"></em> lab la-flipboard
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-fly"></em> lab la-fly
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-font-awesome"></em> lab la-font-awesome
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-font-awesome-alt"></em> lab la-font-awesome-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-font-awesome-flag"></em> lab la-font-awesome-flog
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-fonticons"></em> lab la-fonticons
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-fonticons-fi"></em> lab la-fonticons-fi
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-fort-awesome"></em> lab la-fort-awesome
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-fort-awesome-alt"></em> lab la-fort-awesome-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-forumbee"></em> lab la-forumbee
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-foursquare"></em> lab la-foursquare
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-free-code-camp"></em> lab la-free-code-camp
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-freebsd"></em> lab la-freebsd
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-fulcrum"></em> lab la-fulcrum
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-get-pocket"></em> lab la-get-pocket
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-git"></em> lab la-git
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-git-alt"></em>lab la-git-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-git-square"></em> lab la-git-square
                                            </div> 
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-github"></em>lab la-github
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-github-alt"></em>lab la-github-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-github-square"></em>lab la-github-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-gitkraken"></em>lab la-gitkraken
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-gitlab"></em> lab la-gitlab
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-gitter"></em> lab la-gitter
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-glide"></em> lab la-glide
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-glide-g"></em> lab la-glide-g
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-gofore"></em> lab la-gofore
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-goodreads"></em> lab la-goodreads
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6"> 
                                                <em class="lab la-goodreads-g"></em> lab la-goodreads-v
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-google"></em> lab la-google
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-google-drive"></em>lab la-google-drive
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-google-play"></em>lab la-google-play
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-google-plus"></em>lab la-google-plus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-google-plus-g"></em>lab la-google-plus-g
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-google-plus-square"></em>lab la-google-plus-squar
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-gratipay"></em> lab la-gratipay
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-grav"></em> lab la-grav
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-gripfire"></em> lab la-gripfire
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-grunt"></em> lab la-grunt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-gulp"></em> lab la-gulp
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-hacker-news"></em> lab la-hacker-news
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-hacker-news-square"></em> lab la-hacker-news-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-hackerrank"></em> lab la-hackerrank
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-hips"></em> lab la-hips
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-hire-a-helper"></em> lab la-hire-a-helper
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-hooli"></em> lab la-hooli
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-hornbill"></em> lab la-hornbill
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-hotjar"></em> lab la-hotjar
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-houzz"></em> lab la-houzz
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-html5"></em> lab la-html5
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-hubspot"></em> lab la-hubspot
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-imdb"></em>  lab la-imdb
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-instagram"></em> lab la-instagram
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-intercom"></em> lab la-intercom
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-internet-explorer"></em> lab la-internet-explorer
                                            </div> 
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-invision"></em> lab la-invisio
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-ioxhost"></em> lab la-ioxhost
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-itch-io"></em> lab la-itch-io
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-itunes"></em> lab la-itunes
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-itunes-note"></em> lab la-itunes-note
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-java"></em> lab la-java
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-jenkins"></em> lab la-jenkins
                                            </div> 
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-jira"></em> lab la-jira
                                            </div> 
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-joget"></em> lab la-joget
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-joomla"></em> lab la-joomla
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-js"></em> lab la-js
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-js-square"></em> lab la-js-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-jsfiddle"></em> lab la-jsfiddle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-kaggle"></em> lab la-kaggle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-keybase"></em> lab la-keybase
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-keycdn"></em> lab la-keycdn
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6"> 
                                                <em class="lab la-kickstarter"></em> lab la-kickstarter
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-kickstarter-k"></em> lab la-kickstarter-
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-korvue"></em> lab la-korvue
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-laravel"></em> lab la-laravel
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-lastfm"></em> lab la-lastfm
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-lastfm-square"></em> lab la-lastfm-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-leanpub"></em> lab la-leanpub
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-less"></em> lab la-less
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-line"></em> lab la-line
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-linkedin"></em> lab la-linkedin
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-linkedin-in"></em> lab la-linkedin-in
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-linode"></em> lab la-linode
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-linux"></em> lab la-linux
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-lyft"></em> lab la-lyft
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-magento"></em> lab la-magento
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-mailchimp"></em> lab la-mailchimp
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-mandalorian"></em> lab la-mandalorian
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-markdown"></em> lab la-markdown
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-mastodon"></em> lab la-mastodon
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-maxcdn"></em> lab la-maxcdn
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-mdb"></em> lab la-mdb
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-medapps"></em> lab la-medapps
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-medium"></em> lab la-medium
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-medium-m"></em> lab la-medium-m
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-medrt"></em> lab la-medrt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-meetup"></em> lab la-meetup
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-megaport"></em> lab la-megaport
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-mendeley"></em> lab la-mendeley
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-microsoft"></em> lab la-microsoft
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-mix"></em> lab la-mix
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-mixcloud"></em> lab la-mixclou
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-mizuni"></em> lab la-mizuni
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-modx"></em> lab la-modx
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-monero"></em> lab la-monero
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-neos"></em> lab la-neos
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-nimblr"></em> lab la-nimblr
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-node"></em> lab la-node
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-node-js"></em> lab la-node-js
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-npm"></em> lab la-npm
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-ns8"></em> lab la-ns8
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-nutritionix"></em> lab la-nutritionix
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-odnoklassniki"></em> lab la-odnoklassniki
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-odnoklassniki-square"></em> lab la-odnoklassniki-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-opencart"></em> lab la-opencart
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-openid"></em> lab la-openid
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-opera"></em> lab la-opera
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-optin-monster"></em> lab la-optin-monster
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-orcid"></em> lab la-orcid
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-osi"></em> lab la-osi
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-page4"></em> lab la-page4
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-pagelines"></em> lab la-pagelines
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-palfed"></em> lab la-palfed
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-patreon"></em> lab la-patreon
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-periscope"></em> lab la-periscope
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-phabricator"></em> lab la-phabricator
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-phoenix-framework"></em> lab la-phoenix-framework
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6"> 
                                                <em class="lab la-phoenix-squadron"></em> lab la-phoenix-squadron
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-php"></em> lab la-php
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-pied-piper"></em> lab la-pied-piper
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-pied-piper-alt"></em> lab la-pied-piper-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-pied-piper-hat"></em> lab la-pied-piper-hat
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-pied-piper-pp"></em> lab la-pied-piper-pp
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-pinterest"></em> lab la-pinterest
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-pinterest-p"></em> lab la-pinterest-p
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-pinterest-square"></em> lab la-pinterest-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-product-hunt"></em> lab la-product-hunt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-pushed"></em> lab la-pushed
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-python"></em> lab la-python
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-qq"></em> lab la-qq
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-quinscape"></em> lab la-quinscape
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-quora"></em> lab la-quora
                                            </div> 
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-r-project"></em> lab la-r-project
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-raspberry-pi"></em> lab la-raspberry-p
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-ravelry"></em> lab la-ravelry
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-react"></em> lab la-react
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-reacteurope"></em> lab la-reacteurope
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-readme"></em> lab la-readme
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-rebel"></em> lab la-rebel
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-red-river"></em> lab la-red-river
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-reddit"></em> lab la-reddit
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-reddit-alien"></em>lab la-reddit-alien
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-reddit-square"></em>lab la-reddit-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-redhat"></em>lab la-redhat
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-renren"></em>lab la-renren
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-researchgate"></em> lab la-researchgate
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-resolving"></em> lab la-resolving
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-rev"></em> lab la-rev
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-rocketchat"></em> lab la-rocketchat
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-rockrms"></em> lab la-rockrms
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-safari"></em> lab la-safari
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-salesforce"></em> lab la-salesforce
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-sass"></em> lab la-sass
                                            </div> 
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-schlix"></em> lab la-schlix
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-scribd"></em> lab la-scribd
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6"> 
                                                <em class="lab la-searchengin"></em> lab la-searchengin
                                            </div> 
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-sellcast"></em> lab la-sellcast
                                            </div> 
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-sellsy"></em> lab la-sells
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-servicestack"></em> lab la-servicestack
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6"> 
                                                <em class="lab la-shirtsinbulk"></em> lab la-shirtsinbulk
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-shopware"></em> lab la-shopware
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-simplybuilt"></em> lab la-simplybuilt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-sith"></em> lab la-sith
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-sketch"></em> lab la-sketch
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-skyatlas"></em> lab la-skyatlas
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-skype"></em> lab la-skype
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-slack"></em> lab la-slack
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-slack-hash"></em> lab la-slack-has
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-slideshare"></em> lab la-slideshare
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-snapchat"></em> lab la-snapchat
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-snapchat-ghost"></em> lab la-snapchat-ghos
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-snapchat-square"></em> lab la-snapchat-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-sourcetree"></em> lab la-sourcetree
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-speakap"></em> lab la-speakap
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-speaker-deck"></em> lab la-speaker-deck
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-squarespace"></em> lab la-squarespace
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-stack-exchange"></em> lab la-stack-exchange
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-stack-overflow"></em> lab la-stack-overflow
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-stackpath"></em> lab la-stackpath
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-staylinked"></em> lab la-staylinked
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-sticker-mule"></em> lab la-sticker-mule
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-strava"></em> lab la-strava
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-studiovinari"></em> lab la-studiovinari
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-stumbleupon"></em> lab la-stumbleupon
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-stumbleupon-circle"></em> lab la-stumbleupon-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-superpowers"></em> lab la-superpowers
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-supple"></em> lab la-supple
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-suse"></em> lab la-suse
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-swift"></em> lab la-swift
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-symfony"></em> lab la-symfony
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-teamspeak"></em> lab la-teamspeak
                                            </div> 
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-telegram"></em> lab la-telegram
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-telegram-plane"></em> lab la-telegram-plane
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-tencent-weibo"></em> lab la-tencent-weibo
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-the-red-yeti"></em> lab la-the-red-yeti
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-themeco"></em> lab la-themeco
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-themeisle"></em> lab la-themeisle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-think-peaks"></em> lab la-think-peaks
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-trade-federation"></em> lab la-trade-federation
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-trello"></em> lab la-trello
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-tripadvisor"></em> lab la-tripadvisor
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-tumblr"></em> lab la-tumblr
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-tumblr-square"></em> lab la-tumblr-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-twitter"></em>lab la-twitter
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-twitter-square"></em>lab la-twitter-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-typo3"></em> lab la-typo3
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-uber"></em> lab la-uber
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-ubuntu"></em> lab la-ubuntu
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-uikit"></em> lab la-uikit
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-umbraco"></em> lab la-umbraco
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-uniregistry"></em> lab la-uniregistry
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-untappd"></em> lab la-untappd
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-ups"></em> lab la-ups
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-usb"></em> lab la-usb
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-usps"></em> lab la-usps
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-ussunnah"></em> lab la-ussunnah
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-vaadin"></em> lab la-vaadin
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-viacoin"></em> lab la-viacoin
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-viadeo"></em> lab la-viadeo
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-viadeo-square"></em> lab la-viadeo-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-viber"></em> lab la-viber
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-vimeo"></em> lab la-vimeo
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-vimeo-square"></em> lab la-vimeo-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-vimeo-v"></em> lab la-vimeo-v
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-vine"></em> lab la-vine
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-vk"></em> lab la-vk
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-vnv"></em> lab la-vnv
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-vuejs"></em> lab la-vuejs
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-waze"></em> lab la-waze
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-weebly"></em> lab la-weebly
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-weibo"></em> lab la-weibo
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-weixin"></em> lab la-weixin
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-whatsapp"></em> lab la-whatsapp
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-whatsapp-square"></em> lab la-whatsapp-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-whmcs"></em> lab la-whmcs
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-wikipedia-w"></em> lab la-wikipedia-w
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-windows"></em> lab la-windows
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-wix"></em> lab la-wix
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-wolf-pack-battalion"></em> lab la-wolf-pack-battalion
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-wordpress"></em> lab la-wordpress
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-wordpress-simple"></em> lab la-wordpress-simple
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-wpbeginner"></em> lab la-wpbeginner
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-wpexplorer"></em> lab la-wpexplorer
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-wpforms"></em> lab la-wpforms
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-wpressr"></em> lab la-wpressr
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-xing"></em> lab la-xing
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-xing-square"></em> lab la-xing-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-y-combinator"></em> lab la-y-combinator
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-yahoo"></em> lab la-yahoo
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-yammer"></em> lab la-yammer
                                            </div> 
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-yandex"></em> lab la-yandex
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-yandex-international"></em> lab la-yandex-international
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-yarn"></em> lab la-yarn
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-yelp"></em> lab la-yelp
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-yoast"></em> lab la-yoast
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-youtube-square"></em> lab la-youtube-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-zhihu"></em> lab la-zhihu
                                            </div>
                                        </div>
                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Buildings</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-archway"></em> las la-archway
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-building"></em> las la-building
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-campground"></em> las la-campgroun
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-church"></em> las la-church
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-city"></em> las la-city
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-clinic-medical"></em> las la-clinic-medical
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dungeon"></em> las la-dungeon
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-gopuram"></em> las la-gopuram
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-home"></em> las la-home
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hospital"></em> las la-hospital
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hospital-alt"></em> las la-hospital-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hotel"></em> las la-hotel
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-house-damage"></em> las la-house-damage
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-igloo"></em> las la-igloo
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-industry"></em> las la-industry
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-kaaba"></em> las la-kaaba
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-landmark"></em> las la-landmark
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-monument"></em> las la-monument
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-mosque"></em> las la-mosque
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-place-of-worship"></em> las la-place-of-worship
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-school"></em> las la-school
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-store"></em> las la-store
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-store-alt"></em> las la-store-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-synagogue"></em> las la-synagogue
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-torii-gate"></em> las la-torii-gate
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-university"></em> las la-university
                                            </div> 
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-vihara"></em> las la-vihara
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-warehouse"></em> las la-warehouse
                                            </div>
                                        </div>
                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Business</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-address-book"></em> las la-address-book
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-address-card"></em> las la-address-card
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-archive"></em> las la-archive
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-balance-scale"></em> las la-balance-scale
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-balance-scale-left"></em> las la-balance-scale-left
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-balance-scale-right"></em> las la-balance-scale-right
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-birthday-cake"></em> las la-birthday-cake
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-book"></em> las la-book
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-briefcase"></em> las la-briefcase
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-building"></em> las la-building
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bullhorn"></em> las la-bullhorn
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bullseye"></em> las la-bullseye
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-business-time"></em> las la-business-tim
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-calculator"></em> las la-calculator
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-calendar"></em> las la-calendar
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6"> 
                                                <em class="las la-calendar-alt"></em> las la-calendar-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-certificate"></em> las la-certificate
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-chart-area"></em> las la-chart-area
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-chart-bar"></em> las la-chart-ba
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-chart-line"></em> las la-chart-line
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-chart-pie"></em> las la-chart-pie
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-city"></em> las la-city
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-clipboard"></em> las la-clipboard
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-coffee"></em> las la-coffee
                                            </div> 
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-columns"></em> las la-columns
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-compass"></em> las la-compass
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-copy"></em> las la-copy
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-copyright"></em> las la-copyright
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cut"></em> las la-cut
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-edit"></em> las la-edit
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-envelope"></em> las la-envelop
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-envelope-open"></em> las la-envelope-open
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-envelope-square"></em> las la-envelope-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-eraser"></em> las la-eraser
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-fax"></em> las la-fax
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-file"></em> las la-file
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-file-alt"></em> las la-file-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-folder"></em> las la-folder
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-folder-minus"></em> las la-folder-minus"
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-folder-open"></em> las la-folder-open
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-folder-plus"></em> las la-folder-plus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6"> 
                                                <em class="las la-glasses"></em> las la-glasses
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-globe"></em> las la-globe
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6"> 
                                                <em class="las la-highlighter"></em> las la-highlighter
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-industry"></em> las la-industry
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-landmark"></em> las la-landmark
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-marker"></em> las la-marker
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-paperclip"></em> las la-paperclip
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-paste"></em> las la-paste
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-pen"></em> las la-pen
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6"> 
                                                <em class="las la-pen-alt"></em> las la-pen
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-pen-fancy"></em> las la-pen-fancy
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-pen-nib"></em> las la-pen-nib
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-pen-square"></em> las la-pen-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-pencil-alt"></em> las la-pencil-alt
                                            </div> 
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-percent"></em> las la-percent
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-phone"></em> las la-phone
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-phone-alt"></em> las la-phone-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-phone-slash"></em> las la-phone-slash
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-phone-square"></em> las la-phone-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-phone-square-alt"></em> las la-phone-square-alt
                                            </div> 
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-phone-volume"></em> las la-phone-volume
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-print"></em> las la-print
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-project-diagram"></em> las la-project-diagram
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-registered"></em> las la-registered
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-save"></em> las la-save
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sitemap"></em> las la-sitemap
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-socks"></em> las la-socks
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sticky-note"></em> las la-sticky-not
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-stream"></em> las la-stream
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-table"></em> las la-table
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tag"></em> las la-tag
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tags"></em> las la-tags
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tasks"></em> las la-tasks
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-thumbtack"></em> las la-thumbtack
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-trademark"></em> las la-trademark
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-wallet"></em> las la-wallet
                                            </div>
                                        </div>
                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Camping</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-binoculars"></em> las la-binoculars
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-campground"></em> las la-campground
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-compass"></em>  las la-compass
                                            </div> 
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-fire"></em> las la-fire
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6"> las la-fire-alt
                                                <em class="las la-fire-alt"></em>
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-first-aid"></em> las la-first-aid
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-frog"></em> las la-frog
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hiking"></em> las la-hiking
                                            </div> 
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-map"></em> las la-map
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6"> 
                                                <em class="las la-map-marked"></em> las la-map-marked
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-map-signs"></em> las la-map-signs
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-mountain"></em> las la-mountain
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-route"></em> las la-route
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-toilet-paper"></em> las la-toilet-paper
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tree"></em> las la-tree
                                            </div>
                                        </div>
                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Charity</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dollar-sign"></em> las la-dollar-sign
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-donate"></em> las la-donate
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dove"></em> las la-dove
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-gift"></em> las la-gift
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-globe"></em> las la-globe
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hand-holding-heart"></em> las la-hand-holding-heart
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hand-holding-usd"></em> las la-hand-holding-usd
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hands-helping"></em> las la-hands-helping
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-handshake"></em> las la-handshake
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-heart"></em> las la-heart
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-leaf"></em> las la-leaf
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-parachute-box"></em> las la-parachute-box
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-piggy-bank"></em> las la-piggy-bank
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-ribbon"></em> las la-ribbon
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-seedling"></em> las la-seedling
                                            </div>
                                        </div>
                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Chat</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-comment"></em> las la-comment
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-comment-alt"></em> las la-comment-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-comment-dots"></em> las la-comment-dots
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-comment-medical"></em> las la-comment-medical
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-comment-slash"></em> las la-comment-slash
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-comments"></em> las la-comments
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-frown"></em> las la-frown
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-icons"></em> las la-icons
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-meh"></em> las la-meh
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-phone"></em> las la-phone
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-phone-alt"></em> las la-phone-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-phone-slash"></em> las la-phone-slash
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-poo"></em> las la-poo
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-quote-left"></em> las la-quote-left
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-quote-right"></em> las la-quote-right
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-smile"></em> las la-smile
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sms"></em> las la-sms
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-video"></em> las la-video
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-video-slash"></em> las la-video-slash
                                            </div>
                                        </div>
                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Chess</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-chess"></em> las la-chess
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-chess-bishop"></em> las la-chess-bishop
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-chess-board"></em> las la-chess-board
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-chess-king"></em> las la-chess-king
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-chess-knight"></em> las la-chess-knight
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-chess-pawn"></em> las la-chess-pawn
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-chess-queen"></em> las la-chess-queen
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-chess-rook"></em> las la-chess-rook
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-square-full"></em> las la-square-full
                                            </div>
                                        </div>
                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Childhood</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-apple-alt"></em> las la-apple-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-baby"></em> las la-baby
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-baby-carriage"></em> las la-baby-carriage
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bath"></em> las la-bath
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-biking"></em> las la-biking
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-birthday-cake"></em> las la-birthday-cake
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cookie"></em> las la-cookie
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cookie-bite"></em> las la-cookie-bite
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-gamepad"></em> las la-gamepad
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-ice-cream"></em> las la-ice-cream
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-mitten"></em> las la-mitten
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-robot"></em> las la-robot
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-school"></em> las la-school
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-shapes"></em> las la-shapes
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-snowman"></em> las la-snowman
                                            </div>
                                        </div>
                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Clothing</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-graduation-cap"></em> las la-graduation-cap
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hat-cowboy"></em> las la-hat-cowboy
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hat-cowboy-side"></em> las la-hat-cowboy-side
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hat-wizard"></em> las la-hat-wizard
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-mitten"></em> las la-mitten
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-shoe-prints"></em> las la-shoe-prints
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-socks"></em> las la-socks
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tshirt"></em> las la-tshirt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-user-tie"></em> las la-user-tie
                                            </div>
                                        </div>
                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Code</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-archive"></em> las la-archive
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-barcode"></em> las la-barcode
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bath"></em> las la-bath
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bug"></em> las la-bug
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-code"></em> las la-code
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-code-branch"></em> las la-code-branch
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-coffee"></em> las la-coffee
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-file"></em> las la-file
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-file-alt"></em> las la-file-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-file-code"></em> las la-file-code
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-filter"></em> las la-filter
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-fire-extinguisher"></em> las la-fire-extinguisher
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-folder"></em> las la-folder
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-folder-open"></em> las la-folder-open
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-keyboard"></em> las la-keyboard
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-laptop-code"></em> las la-laptop-code
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-microchip"></em> las la-microchip
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-project-diagram"></em> las la-project-diagram
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-qrcode"></em> las la-qrcode
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-shield-alt"></em> las la-shield-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sitemap"></em> las la-sitemap
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-stream"></em> las la-stream
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-terminal"></em> las la-terminal
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-user-secret"></em> las la-user-secret
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-window-close"></em> las la-window-close
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-window-maximize"></em> las la-window-maximize
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-window-minimize"></em> las la-window-minimize
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-window-restore"></em> las la-window-restore
                                            </div>
                                        </div>
                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Communication</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-address-book"></em> las la-address-book
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-address-card"></em> las la-address-card
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-american-sign-language-interpreting"></em> las la-american-sign-language-interpreting
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-assistive-listening-systems"></em> las la-assistive-listening-systems
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-at"></em> las la-at
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bell"></em> las la-bell
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bell-slash"></em> las la-bell-slash
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-bluetooth"></em> lab la-bluetooth
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-bluetooth-b"></em> lab la-bluetooth-b
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-broadcast-tower"></em> las la-broadcast-tower
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bullhorn"></em> las la-bullhorn
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-chalkboard"></em> las la-chalkboard
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-comment"></em> las la-comment
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-comment-alt"></em> las la-comment-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-comments"></em> las la-comments
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-envelope"></em> las la-envelope
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-envelope-open"></em> las la-envelope-open
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-envelope-square"></em> las la-envelope-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-fax"></em> las la-fax
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-inbox"></em> las la-inbox
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-language"></em> las la-language
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-microphone"></em> las la-microphone
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-microphone-alt"></em> las la-microphone-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-microphone-alt-slash"></em> las la-microphone-alt-slash
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-microphone-slash"></em> las la-microphone-slash
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-mobile"></em> las la-mobile
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-mobile-alt"></em> las la-mobile-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-paper-plane"></em> las la-paper-plane
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-phone"></em> las la-phone
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-phone-alt"></em> las la-phone-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-phone-slash"></em> las la-phone-slash
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-phone-square"></em> las la-phone-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-phone-square-alt"></em> las la-phone-square-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-phone-volume"></em> las la-phone-volume
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-rss"></em> las la-rss
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-rss-square"></em> las la-rss-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tty"></em> las la-tty
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-voicemail"></em> las la-voicemail
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-wifi"></em> las la-wifi
                                            </div>
                                        </div>
                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Computers</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-database"></em> las la-database
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-desktop"></em> las la-desktop
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-download"></em> las la-download
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-ethernet"></em> las la-ethernet
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hdd"></em> las la-hdd
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-headphones"></em> las la-headphones
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-keyboard"></em> las la-keyboard
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-laptop"></em> las la-laptop
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-memory"></em> las la-memory
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-microchip"></em> las la-microchip
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-mobile"></em> las la-mobile
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-mobile-alt"></em> las la-mobile-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-mouse"></em> las la-mouse
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-plug"></em> las la-plug
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-power-off"></em> las la-power-off
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-print"></em> las la-print
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-satellite"></em> las la-satellite
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-satellite-dish"></em> las la-satellite-dish
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-save"></em> las la-save
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sd-card"></em> las la-sd-card
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-server"></em> las la-server
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sim-card"></em> las la-sim-card
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-stream"></em> las la-stream
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tablet"></em> las la-tablet
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tablet-alt"></em> las la-tablet-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tv"></em> las la-tv
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-upload"></em> las la-upload
                                            </div>
                                        </div>
                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Construction</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-brush"></em> las la-brush
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-drafting-compass"></em> las la-drafting-compass
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dumpster"></em> las la-dumpster
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hammer"></em> las la-hammer
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hard-hat"></em> las la-hard-hat
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-paint-roller"></em> las la-paint-roller
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-pencil-alt"></em> las la-pencil-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-pencil-ruler"></em> las la-pencil-ruler
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-ruler"></em> las la-ruler
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-ruler-combined"></em> las la-ruler-combined
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-ruler-horizontal"></em> las la-ruler-horizontal
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-ruler-vertical"></em> las la-ruler-vertical
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-screwdriver"></em> las la-screwdriver
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-toolbox"></em> las la-toolbox
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tools"></em> las la-tools
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-truck-pickup"></em> las la-truck-pickup
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-wrench"></em> las la-wrench
                                            </div>
                                        </div>
                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Currency</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-bitcoin"></em> lab la-bitcoin
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-btc"></em> lab la-btc
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dollar-sign"></em> las la-dollar-sign
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-ethereum"></em> lab la-ethereum
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-euro-sign"></em> las la-euro-sign
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-gg"></em> lab la-gg
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-gg-circle"></em> lab la-gg-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hryvnia"></em> las la-hryvnia
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-lira-sign"></em> las la-lira-sign
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-money-bill"></em> las la-money-bill
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-money-bill-alt"></em> las la-money-bill-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-money-bill-wave"></em> las la-money-bill-wave
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-money-bill-wave-alt"></em> las la-money-bill-wave-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-money-check"></em> las la-money-check
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-money-check-alt"></em> las la-money-check-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-pound-sign"></em> las la-pound-sign
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-ruble-sign"></em> las la-ruble-sign
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-rupee-sign"></em> las la-rupee-sign
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-shekel-sign"></em> las la-shekel-sign
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tenge"></em> las la-tenge
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-won-sign"></em> las la-won-sign
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-yen-sign"></em> las la-yen-sign
                                            </div>
                                        </div>
                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Date & Time</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bell"></em> las la-bell
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bell-slash"></em> las la-bell-slash
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-calendar"></em> las la-calendar
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-calendar-alt"></em> las la-calendar-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-calendar-check"></em> las la-calendar-check
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-calendar-minus"></em> las la-calendar-minus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-calendar-plus"></em> las la-calendar-plus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-calendar-times"></em> las la-calendar-times
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-clock"></em> las la-clock
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hourglass"></em> las la-hourglass
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hourglass-end"></em> las la-hourglass-end
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hourglass-half"></em> las la-hourglass-half
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hourglass-start"></em> las la-hourglass-start
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-stopwatch"></em> las la-stopwatch
                                            </div>
                                        </div>
                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Design</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-adjust"></em> las la-adjust
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bezier-curve"></em> las la-bezier-curve
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-brush"></em> las la-brush
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-clone"></em> las la-clone
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-copy"></em> las la-copy
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-crop"></em> las la-crop
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-crop-alt"></em> las la-crop-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-crosshairs"></em> las la-crosshairs
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cut"></em> las la-cut
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-drafting-compass"></em> las la-drafting-compass
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-draw-polygon"></em> las la-draw-polygon
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-edit"></em> las la-edit
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-eraser"></em> las la-eraser
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-eye"></em> las la-eye
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-eye-dropper"></em> las la-eye-dropper
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-eye-slash"></em> las la-eye-slash
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-fill"></em> las la-fill
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-fill-drip"></em> las la-fill-drip
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-highlighter"></em> las la-highlighter
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-icons"></em> las la-icons
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-layer-group"></em> las la-layer-group
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-magic"></em> las la-magic
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-marker"></em> las la-marker
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-object-group"></em> las la-object-group
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-object-ungroup"></em> las la-object-ungroup
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-paint-brush"></em> las la-paint-brush
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-paint-roller"></em> las la-paint-roller
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-palette"></em> las la-palette
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-paste"></em> las la-paste
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-pen"></em> las la-pen
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-pen-alt"></em> las la-pen-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-pen-fancy"></em> las la-pen-fancy
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-pen-nib"></em> las la-pen-nib
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-pencil-alt"></em> las la-pencil-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-pencil-ruler"></em> las la-pencil-ruler
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-ruler-combined"></em> las la-ruler-combined
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-ruler-horizontal"></em> las la-ruler-horizontal
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-ruler-vertical"></em> las la-ruler-vertical
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-save"></em> las la-save
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-splotch"></em> las la-splotch
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-spray-can"></em> las la-spray-can
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-stamp"></em> las la-stamp
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-swatchbook"></em> las la-swatchbook
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tint"></em> las la-tint
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tint-slash"></em> las la-tint-slash
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-vector-square"></em> las la-vector-square
                                            </div>
                                        </div>

                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Editors</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-align-center"></em> las la-align-center
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-align-justify"></em> las la-align-justify
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-align-left"></em> las la-align-left
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-align-right"></em> las la-align-right
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bold"></em> las la-bold
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-border-all"></em> las la-border-all
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-border-none"></em> las la-border-none
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-border-style"></em> las la-border-style
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-clipboard"></em> las la-clipboard
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-clone"></em> las la-clone
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-columns"></em> las la-columns
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-copy"></em> las la-copy
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cut"></em> las la-cut
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-edit"></em> las la-edit
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-eraser"></em> las la-eraser
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-file"></em> las la-file
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-file-alt"></em> las la-file-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-font"></em> las la-font
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-glasses"></em> las la-glasses
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-heading"></em> las la-heading
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-highlighter"></em> las la-highlighter
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-i-cursor"></em> las la-i-cursor
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-icons"></em> las la-icons
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-indent"></em> las la-indent
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-italic"></em> las la-italic
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-link"></em> las la-link
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-list"></em> las la-list
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-list-alt"></em> las la-list-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-list-ol"></em> las la-list-ol
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-list-ul"></em> las la-list-ul
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-marker"></em> las la-marker
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-outdent"></em> las la-outdent
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-paper-plane"></em> las la-paper-plane
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-paperclip"></em> las la-paperclip
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-paragraph"></em> las la-paragraph
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-paste"></em> las la-paste
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-pen"></em> las la-pen
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-pen-alt"></em> las la-pen-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-pen-fancy"></em> las la-pen-fancy
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-pen-nib"></em> las la-pen-nib
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-pencil-alt"></em> las la-pencil-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-print"></em> las la-print
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-quote-left"></em> las la-quote-left
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-quote-right"></em> las la-quote-right
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-reply-all"></em> las la-reply-all
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-screwdriver"></em> las la-screwdriver
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-share"></em> las la-share
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-spell-check"></em> las la-spell-check
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-strikethrough"></em> las la-strikethrough
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-subscript"></em> las la-subscript
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sync"></em> las la-sync
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-text-width"></em> las la-text-width
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-th"></em> las la-th
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-th-large"></em> las la-th-large
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-th-list"></em> las la-th-list
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tools"></em> las la-tools
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-trash"></em> las la-trash
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-trash-alt"></em> las la-trash-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-trash-restore"></em> las la-trash-restore
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-trash-restore-alt"></em> las la-trash-restore-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-underline"></em> las la-underline
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6"><em class="las la-undo"></em>
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-undo-alt"></em> las la-undo-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-unlink"></em> las la-unlink
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-wrench"></em> las la-wrench
                                            </div>
                                        </div>

                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Education</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-apple-alt"></em> las la-apple-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-atom"></em> las la-atom
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-award"></em> las la-award
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bell"></em> las la-bell
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bell-slash"></em> las la-bell-slash
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-book-open"></em> las la-book-open
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-book-reader"></em> las la-book-reader
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-chalkboard"></em> las la-chalkboard
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-chalkboard-teacher"></em> las la-chalkboard-teacher
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-graduation-cap"></em> las la-graduation-cap
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-laptop-code"></em> las la-laptop-code
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-microscope"></em> las la-microscope
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-music"></em> las la-music
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-school"></em> las la-school
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-shapes"></em> las la-shapes
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-theater-masks"></em> las la-theater-masks
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-user-graduate"></em> las la-user-graduate
                                            </div>
                                        </div>

                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Emoji</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-angry"></em> las la-angry
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dizzy"></em> las la-dizzy
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-flushed"></em> las la-flushed
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-frown"></em> las la-frown
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-frown-open"></em> las la-frown-open
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-grimace"></em> las la-grimace
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-grin"></em> las la-grin
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-grin-alt"></em> las la-grin-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-grin-beam"></em> las la-grin-beam
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-grin-beam-sweat"></em> las la-grin-beam-sweat
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-grin-hearts"></em> las la-grin-hearts
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-grin-squint"></em> las la-grin-squint
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-grin-squint-tears"></em> las la-grin-squint-tears
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-grin-stars"></em> las la-grin-stars
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-grin-tears"></em> las la-grin-tears
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-grin-tongue"></em> las la-grin-tongue
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-grin-tongue-squint"></em> las la-grin-tongue-squint
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-grin-tongue-wink"></em> las la-grin-tongue-wink
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-grin-wink"></em> las la-grin-wink
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-kiss"></em> las la-kiss
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-kiss-beam"></em> las la-kiss-beam
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-kiss-wink-heart"></em> las la-kiss-wink-heart
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-laugh"></em> las la-laugh
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-laugh-beam"></em> las la-laugh-beam
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-meh-rolling-eyes"></em> las la-meh-rolling-eyes
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sad-cry"></em> las la-sad-cry
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sad-tear"></em> las la-sad-tear
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-smile"></em> las la-smile
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-smile-beam"></em> las la-smile-beam
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-smile-wink"></em> las la-smile-wink
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-surprise"></em> las la-surprise
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tired"></em> las la-tired
                                            </div>
                                        </div>

                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Energy</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-atom"></em> las la-atom
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-battery-empty"></em> las la-battery-empty
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-battery-full"></em> las la-battery-full
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-battery-half"></em> las la-battery-half
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-battery-quarter"></em> las la-battery-quarter
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-battery-three-quarters"></em> las la-battery-three-quarters
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-broadcast-tower"></em> las la-broadcast-tower
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-burn"></em> las la-burn
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-charging-station"></em> las la-charging-station
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-fire"></em> las la-fire
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-fire-alt"></em> las la-fire-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-gas-pump"></em> las la-gas-pump
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-industry"></em> las la-industry
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-leaf"></em> las la-leaf
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-lightbulb"></em> las la-lightbulb
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-plug"></em> las la-plug
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-poop"></em> las la-poop
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-power-off"></em> las la-power-off
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-radiation"></em> las la-radiation
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-radiation-alt"></em> las la-radiation-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-seedling"></em> las la-seedling
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-solar-panel"></em> las la-solar-panel
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sun"></em> las la-sun
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-water"></em> las la-water
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-wind"></em> las la-wind
                                            </div>
                                        </div>

                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Files</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-archive"></em> las la-archive
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-clone"></em> las la-clone
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-copy"></em> las la-copy
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cut"></em> las la-cut
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-file"></em> las la-file
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-file-alt"></em> las la-file-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-file-archive"></em> las la-file-archive
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-file-audio"></em> las la-file-audio
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-file-code"></em> las la-file-code
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-file-excel"></em> las la-file-excel
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-file-image"></em> las la-file-image
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-file-pdf"></em> las la-file-pdf
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-file-powerpoint"></em> las la-file-powerpoint
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-file-video"></em> las la-file-video
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-file-word"></em> las la-file-word
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-folder"></em> las la-folder
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-folder-open"></em> las la-folder-open
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-paste"></em> las la-paste
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-photo-video"></em> las la-photo-video
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-save"></em> las la-save
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sticky-note"></em> las la-sticky-note
                                            </div>
                                        </div>

                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Finance</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-balance-scale"></em> las la-balance-scale
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-balance-scale-left"></em> las la-balance-scale-left
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-balance-scale-right"></em> las la-balance-scale-right
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-book"></em> las la-book
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cash-register"></em> las la-cash-register
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-chart-line"></em> las la-chart-line
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-chart-pie"></em> las la-chart-pie
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-coins"></em> las la-coins
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-comment-dollar"></em> las la-comment-dollar
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-comments-dollar"></em> las la-comments-dollar
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-credit-card"></em> las la-credit-card
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-donate"></em> las la-donate
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-file-invoice"></em> las la-file-invoice
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-file-invoice-dollar"></em> las la-file-invoice-dollar
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hand-holding-usd"></em> las la-hand-holding-usd
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-landmark"></em> las la-landmark
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-money-bill"></em> las la-money-bill
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-money-bill-alt"></em> las la-money-bill-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-money-bill-wave"></em> las la-money-bill-wave
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-money-bill-wave-alt"></em> las la-money-bill-wave-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-money-check"></em> las la-money-check
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-money-check-alt"></em> las la-money-check-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-percentage"></em> las la-percentage
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-piggy-bank"></em> las la-piggy-bank
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-receipt"></em> las la-receipt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-stamp"></em> las la-stamp
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-wallet"></em> las la-wallet
                                            </div>
                                        </div>

                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Fitness</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bicycle"></em> las la-bicycle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bacon"></em> las la-bacon
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bone"></em> las la-bone
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bread-slice"></em> las la-bread-slice
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-candy-cane"></em> las la-candy-cane
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-carrot"></em> las la-carrot
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cheese"></em> las la-cheese
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cloud-meatball"></em> las la-cloud-meatball
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cookie"></em> las la-cookie
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-drumstick-bite"></em> las la-drumstick-bite
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-egg"></em> las la-egg
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-fish"></em> las la-fish
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hamburger"></em> las la-hamburger
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hotdog"></em> las la-hotdog
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-ice-cream"></em> las la-ice-cream
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-lemon"></em> las la-lemon
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-pepper-hot"></em> las la-pepper-hot
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-pizza-slice"></em> las la-pizza-slice
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-seedling"></em> las la-seedling
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-stroopwafel"></em> las la-stroopwafel
                                            </div>
                                        </div>

                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Games</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-chess"></em> las la-chess
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-chess-bishop"></em> las la-chess-bishop
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-chess-board"></em> las la-chess-board
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-chess-king"></em> las la-chess-king
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-chess-knight"></em> las la-chess-knight
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-chess-pawn"></em> las la-chess-pawn
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-chess-queen"></em> las la-chess-queen
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-chess-rook"></em> las la-chess-rook
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dice"></em> las la-dice
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dice-d20"></em> las la-dice-d20
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dice-d6"></em> las la-dice-d6
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dice-five"></em> las la-dice-five
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dice-four"></em> las la-dice-four
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dice-one"></em> las la-dice-one
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dice-six"></em> las la-dice-six
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dice-three"></em> las la-dice-three
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dice-two"></em> las la-dice-two
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-gamepad"></em> las la-gamepad
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-ghost"></em> las la-ghost
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-headset"></em> las la-headset
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-heart"></em> las la-heart
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-playstation"></em> lab la-playstation
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-puzzle-piece"></em> las la-puzzle-piece
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-steam"></em> lab la-steam
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-steam-square"></em> lab la-steam-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-steam-symbol"></em> lab la-steam-symbol
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-twitch"></em> lab la-twitch
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-xbox"></em> lab la-xbox
                                            </div>
                                        </div>

                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Genders</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-genderless"></em> las la-genderless
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-mars"></em> las la-mars
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-mars-double"></em> las la-mars-double
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-mars-stroke"></em> las la-mars-stroke
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-mars-stroke-h"></em> las la-mars-stroke-h
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-mars-stroke-v"></em> las la-mars-stroke-v
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-mercury"></em> las la-mercury
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-neuter"></em> las la-neuter
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-transgender"></em> las la-transgender
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-transgender-alt"></em> las la-transgender-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-venus"></em> las la-venus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-venus-double"></em> las la-venus-double
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-venus-mars"></em> las la-venus-mars
                                            </div>
                                        </div>

                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Halloween</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-book-dead"></em> las la-book-dead
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-broom"></em> las la-broom
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cat"></em> las la-cat
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cloud-moon"></em> las la-cloud-moon
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-crow"></em> las la-crow
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-ghost"></em> las la-ghost
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hat-wizard"></em> las la-hat-wizard
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-mask"></em> las la-mask
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-skull-crossbones"></em> las la-skull-crossbones
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-spider"></em> las la-spider
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-toilet-paper"></em> las la-toilet-paper
                                            </div>
                                        </div>

                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Hands</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-allergies"></em> las la-allergies
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-fist-raised"></em> las la-fist-raised
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hand-holding"></em> las la-hand-holding
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hand-holding-heart"></em> las la-hand-holding-heart
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hand-holding-usd"></em> las la-hand-holding-usd
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hand-lizard"></em> las la-hand-lizard
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hand-middle-finger"></em> las la-hand-middle-finger
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hand-paper"></em> las la-hand-paper
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hand-peace"></em> las la-hand-peace
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hand-point-down"></em> las la-hand-point-down
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hand-point-left"></em> las la-hand-point-left
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hand-point-right"></em> las la-hand-point-right
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hand-point-up"></em> las la-hand-point-up
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hand-pointer"></em> las la-hand-pointer
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hand-rock"></em> las la-hand-rock
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hand-scissors"></em> las la-hand-scissors
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hand-spock"></em> las la-hand-spock
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hands"></em> las la-hands
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hands-helping"></em> las la-hands-helping
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-handshake"></em> las la-handshake
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-praying-hands"></em> las la-praying-hands
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-thumbs-down"></em> las la-thumbs-down
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-thumbs-up"></em> las la-thumbs-up
                                            </div>
                                        </div>

                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Health</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-accessible-icon"></em> lab la-accessible-icon
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-ambulance"></em> las la-ambulance
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-h-square"></em> las la-h-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-heart"></em> las la-heart
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-heartbeat"></em> las la-heartbeat
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hospital"></em> las la-hospital
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-medkit"></em> las la-medkit
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-plus-square"></em> las la-plus-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-prescription"></em> las la-prescription
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-stethoscope"></em> las la-stethoscope
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-user-md"></em> las la-user-md
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-wheelchair"></em> las la-wheelchair
                                            </div>
                                        </div>

                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Holiday</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-candy-cane"></em> las la-candy-cane
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-carrot"></em> las la-carrot
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cookie-bite"></em> las la-cookie-bite
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-gift"></em> las la-gift
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-gifts"></em> las la-gifts
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-glass-cheers"></em> las la-glass-cheers
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-holly-berry"></em> las la-holly-berry
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-mug-hot"></em> las la-mug-hot
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sleigh"></em> las la-sleigh
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-snowman"></em> las la-snowman
                                            </div>
                                        </div>

                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Hotel</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-baby-carriage"></em> las la-baby-carriage
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bath"></em> las la-bath
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bed"></em> las la-bed
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-briefcase"></em> las la-briefcase
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-car"></em> las la-car
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cocktail"></em> las la-cocktail
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-coffee"></em> las la-coffee
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-concierge-bell"></em> las la-concierge-bell
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dice"></em> las la-dice
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dice-five"></em> las la-dice-five
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-door-closed"></em> las la-door-closed
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-door-open"></em> las la-door-open
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dumbbell"></em> las la-dumbbell
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-glass-martini"></em> las la-glass-martini
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-glass-martini-alt"></em> las la-glass-martini-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hot-tub"></em> las la-hot-tub
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hotel"></em> las la-hotel
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-infinity"></em> las la-infinity
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-key"></em> las la-key
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-luggage-cart"></em> las la-luggage-cart
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-shower"></em> las la-shower
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-shuttle-van"></em> las la-shuttle-van
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-smoking"></em> las la-smoking
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-smoking-ban"></em> las la-smoking-ban
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-snowflake"></em> las la-snowflake
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-spa"></em> las la-spa
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-suitcase"></em> las la-suitcase
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-suitcase-rolling"></em> las la-suitcase-rolling
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-swimmer"></em> las la-swimmer
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-swimming-pool"></em> las la-swimming-pool
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tv"></em> las la-tv
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-umbrella-beach"></em> las la-umbrella-beach
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-utensils"></em> las la-utensils
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-wheelchair"></em> las la-wheelchair
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-wifi"></em> las la-wifi
                                            </div>
                                        </div>

                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Household</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bath"></em> las la-bath
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bed"></em> las la-bed
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">

                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-blender"></em> las la-blender
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-chair"></em> las la-chair
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-couch"></em> las la-couch
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-door-closed"></em> las la-door-closed
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-door-open"></em> las la-door-open
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dungeon"></em> las la-dungeon
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-fan"></em> las la-fan
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-shower"></em> las la-shower
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-toilet-paper"></em> las la-toilet-paper
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tv"></em> las la-tv
                                            </div>
                                        </div>

                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Images</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-adjust"></em> las la-adjust
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bolt"></em> las la-bolt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-camera"></em> las la-camera
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-camera-retro"></em> las la-camera-retro
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-chalkboard"></em> las la-chalkboard
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-clone"></em> las la-clone
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-compress"></em> las la-compress
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-compress-arrows-alt"></em> las la-compress-arrows-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-expand"></em> las la-expand
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-eye"></em> las la-eye
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-eye-dropper"></em> las la-eye-dropper
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-eye-slash"></em> las la-eye-slash
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-file-image"></em> las la-file-image
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-film"></em> las la-film
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-id-badge"></em> las la-id-badge
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-id-card"></em> las la-id-card
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-image"></em> las la-image
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-images"></em> las la-images
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-photo-video"></em> las la-photo-video
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-portrait"></em> las la-portrait
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sliders-h"></em> las la-sliders-h
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tint"></em> las la-tint
                                            </div>
                                        </div>

                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Interfaces</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-award"></em> las la-award
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-ban"></em> las la-ban
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-barcode"></em> las la-barcode
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bars"></em> las la-bars
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-beer"></em> las la-beer
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bell"></em> las la-bell
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bell-slash"></em> las la-bell-slash
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-blog"></em> las la-blog
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bug"></em> las la-bug
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bullhorn"></em> las la-bullhorn
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bullseye"></em> las la-bullseye
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-calculator"></em> las la-calculator
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-calendar"></em> las la-calendar
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-calendar-alt"></em> las la-calendar-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-calendar-check"></em> las la-calendar-check
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-calendar-minus"></em> las la-calendar-minus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-calendar-plus"></em> las la-calendar-plus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-calendar-times"></em> las la-calendar-times
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-certificate"></em> las la-certificate
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-check"></em> las la-check
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-check-circle"></em> las la-check-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-check-double"></em> las la-check-double
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-check-square"></em> las la-check-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-circle"></em> las la-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-clipboard"></em> las la-clipboard
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-clone"></em> las la-clone
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cloud-download-alt"></em> las la-cloud-download-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cloud-upload-alt"></em> las la-cloud-upload-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-coffee"></em> las la-coffee
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cog"></em> las la-cog
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cogs"></em> las la-cogs
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-copy"></em> las la-copy
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cut"></em> las la-cut
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-database"></em> las la-database
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dot-circle"></em> las la-dot-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-download"></em> las la-download
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-edit"></em> las la-edit
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-ellipsis-h"></em> las la-ellipsis-h
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-ellipsis-v"></em> las la-ellipsis-v
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-envelope"></em> las la-envelope
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-envelope-open"></em> las la-envelope-open
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-eraser"></em> las la-eraser
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-exclamation"></em> las la-exclamation
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-exclamation-circle"></em> las la-exclamation-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-exclamation-triangle"></em> las la-exclamation-triangle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-external-link-alt"></em> las la-external-link-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-external-link-square-alt"></em> las la-external-link-square-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-eye"></em> las la-eye
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-eye-slash"></em> las la-eye-slash
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-file"></em> las la-file
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-file-alt"></em> las la-file-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-file-download"></em> las la-file-download
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-file-export"></em> las la-file-export
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-file-import"></em> las la-file-import
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-file-upload"></em> las la-file-upload
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-filter"></em> las la-filter
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-fingerprint"></em> las la-fingerprint
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-flag"></em> las la-flag
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-flag-checkered"></em> las la-flag-checkered
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-folder"></em> las la-folder
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-folder-open"></em> las la-folder-open
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-frown"></em> las la-frown
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-glasses"></em> las la-glasses
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-grip-horizontal"></em> las la-grip-horizontal
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-grip-lines"></em> las la-grip-lines
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-grip-lines-vertical"></em> las la-grip-lines-vertical
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-grip-vertical"></em> las la-grip-vertical
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hashtag"></em> las la-hashtag
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-heart"></em> las la-heart
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-history"></em> las la-history
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-home"></em> las la-home
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-i-cursor"></em> las la-i-cursor
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-info"></em> las la-info
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-info-circle"></em> las la-info-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-language"></em> las la-language
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-magic"></em> las la-magic
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-marker"></em> las la-marker
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-medal"></em> las la-medal
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-meh"></em> las la-meh
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-microphone"></em> las la-microphone
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-microphone-alt"></em> las la-microphone-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-microphone-slash"></em> las la-microphone-slash
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-minus"></em> las la-minus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-minus-circle"></em> las la-minus-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-minus-square"></em> las la-minus-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-paste"></em> las la-paste
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-pen"></em> las la-pen
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-pen-alt"></em> las la-pen-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-pen-fancy"></em> las la-pen-fancy
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-pencil-alt"></em> las la-pencil-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-plus"></em> las la-plus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-plus-circle"></em> las la-plus-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-plus-square"></em> las la-plus-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-poo"></em> las la-poo
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-qrcode"></em> las la-qrcode
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-question"></em> las la-question
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-question"></em> las la-question
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-question-circle"></em> las la-question-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-quote-left"></em> las la-quote-left
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-quote-right"></em> las la-quote-right
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-redo"></em> las la-redo
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-redo-alt"></em> las la-redo-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-reply"></em> las la-reply
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-reply-all"></em> las la-reply-all
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-rss"></em> las la-rss
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-rss-square"></em> las la-rss-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-save"></em> las la-save
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-screwdriver"></em> las la-screwdriver
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-search"></em> las la-search
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-search-minus"></em> las la-search-minus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-search-plus"></em> las la-search-plus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-share"></em> las la-share
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-share-alt"></em> las la-share-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-share-alt-square"></em> las la-share-alt-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-share-square"></em> las la-share-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-shield-alt"></em> las la-shield-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sign-in-alt"></em> las la-sign-in-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sign-out-alt"></em> las la-sign-out-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-signal"></em> las la-signal
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sitemap"></em> las la-sitemap
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sliders-h"></em> las la-sliders-h
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-smile"></em> las la-smile
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sort"></em> las la-sort
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sort-alpha-down"></em> las la-sort-alpha-down
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sort-alpha-down-alt"></em> las la-sort-alpha-down-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sort-alpha-up"></em> las la-sort-alpha-up
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sort-alpha-up-alt"></em> las la-sort-alpha-up-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sort-amount-down"></em> las la-sort-amount-down
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sort-amount-down-alt"></em> las la-sort-amount-down-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sort-numeric-up"></em> las la-sort-numeric-up
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sort-numeric-up-alt"></em> las la-sort-numeric-up-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sort-up"></em> las la-sort-up
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-star"></em> las la-star
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-star-half"></em> las la-star-half
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sync"></em> las la-sync
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sync-alt"></em> las la-sync-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-thumbs-down"></em> las la-thumbs-down
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-thumbs-up"></em> las la-thumbs-up
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-times"></em> las la-times
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-times-circle"></em> las la-times-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-toggle-off"></em> las la-toggle-off
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-toggle-on"></em> las la-toggle-on
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tools"></em> las la-tools
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-trash"></em> las la-trash
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-trash-alt"></em> las la-trash-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-trash-restore"></em> las la-trash-restore
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-trash-restore-alt"></em> las la-trash-restore-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-trophy"></em> las la-trophy
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-undo"></em> las la-undo
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-undo-alt"></em> las la-undo-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-upload"></em> las la-upload
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-user"></em> las la-user
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-user-alt"></em> las la-user-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-user-circle"></em> las la-user-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-volume-down"></em> las la-volume-down
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-volume-mute"></em> las la-volume-mute
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-volume-off"></em> las la-volume-off
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-volume-up"></em> las la-volume-up
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-wifi"></em> las la-wifi
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-wrench"></em> las la-wrench
                                            </div>
                                        </div>

                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Logistics</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-box"></em> las la-box
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-boxes"></em> las la-boxes
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-clipboard-check"></em> las la-clipboard-check
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-clipboard-list"></em> las la-clipboard-list
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dolly"></em> las la-dolly
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dolly-flatbed"></em> las la-dolly-flatbed
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hard-hat"></em> las la-hard-hat
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-pallet"></em> las la-pallet
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-shipping-fast"></em> las la-shipping-fast
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-truck"></em> las la-truck
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-warehouse"></em> las la-warehouse
                                            </div>
                                        </div>

                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Maps</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-ambulance"></em> las la-ambulance
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-anchor"></em> las la-anchor
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-balance-scale"></em> las la-balance-scale
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-balance-scale-left"></em> las la-balance-scale-left
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-balance-scale-right"></em> las la-balance-scale-right
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bath"></em> las la-bath
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bed"></em> las la-bed
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-beer"></em> las la-beer
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bell"></em> las la-bell
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bell-slash"></em> las la-bell-slash
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bicycle"></em> las la-bicycle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-binoculars"></em> las la-binoculars
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-birthday-cake"></em> las la-birthday-cake
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-blind"></em> las la-blind
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bomb"></em> las la-bomb
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-book"></em> las la-book
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bookmark"></em> las la-bookmark
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-briefcase"></em> las la-briefcase
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-building"></em> las la-building
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-car"></em> las la-car
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-coffee"></em> las la-coffee
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-crosshairs"></em> las la-crosshairs
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-directions"></em> las la-directions
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dollar-sign"></em> las la-dollar-sign
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-draw-polygon"></em> las la-draw-polygon
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-eye"></em> las la-eye
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-eye-slash"></em> las la-eye-slash
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-fighter-jet"></em> las la-fighter-jet
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-fire"></em> las la-fire
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-fire-alt"></em> las la-fire-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-fire-extinguisher"></em> las la-fire-extinguisher
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-flag"></em> las la-flag
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-flag-checkered"></em> las la-flag-checkered
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-flask"></em> las la-flask
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-gamepad"></em> las la-gamepad
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-gavel"></em> las la-gavel
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-gift"></em> las la-gift
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-glass-martini"></em> las la-glass-martini
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-globe"></em> las la-globe
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-graduation-cap"></em> las la-graduation-cap
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-h-square"></em> las la-h-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-heart"></em> las la-heart
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-heartbeat"></em> las la-heartbeat
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-helicopter"></em> las la-helicopter
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-home"></em> las la-home
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hospital"></em> las la-hospital
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-image"></em> las la-image
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-images"></em> las la-images
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-industry"></em> las la-industry
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-info"></em> las la-info
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-info-circle"></em> las la-info-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-key"></em> las la-key
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-landmark"></em> las la-landmark
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-layer-group"></em> las la-layer-group
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-leaf"></em> las la-leaf
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-lemon"></em> las la-lemon
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-life-ring"></em> las la-life-ring
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-lightbulb"></em> las la-lightbulb
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-location-arrow"></em> las la-location-arrow
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-low-vision"></em> las la-low-vision
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-magnet"></em> las la-magnet
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-male"></em> las la-male
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-map"></em> las la-map
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-map-marker"></em> las la-map-marker
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-map-marker-alt"></em> las la-map-marker-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-map-pin"></em> las la-map-pin
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-map-signs"></em> las la-map-signs
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-medkit"></em> las la-medkit
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-money-bill"></em> las la-money-bill
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-money-bill-alt"></em> las la-money-bill-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-motorcycle"></em> las la-motorcycle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-music"></em> las la-music
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-newspaper"></em> las la-newspaper
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-parking"></em> las la-parking
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-paw"></em> las la-paw
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-phone"></em> las la-phone
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-phone-alt"></em> las la-phone-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-phone-square"></em> las la-phone-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-phone-square-alt"></em> las la-phone-square-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-phone-volume"></em> las la-phone-volume
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-plane"></em> las la-plane
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-plug"></em> las la-plug
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-plus"></em> las la-plus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-plus-square"></em> las la-plus-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-print"></em> las la-print
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-recycle"></em> las la-recycle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-restroom"></em> las la-restroom
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-road"></em> las la-road
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-rocket"></em> las la-rocket
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-route"></em> las la-route
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-search"></em> las la-search
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-search-minus"></em> las la-search-minus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-search-plus"></em> las la-search-plus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-ship"></em> las la-ship
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-shoe-prints"></em> las la-shoe-prints
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-shopping-bag"></em> las la-shopping-bag
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-shopping-basket"></em> las la-shopping-basket
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-shopping-cart"></em> las la-shopping-cart
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-shower"></em> las la-shower
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-snowplow"></em> las la-snowplow
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-street-view"></em> las la-street-view
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-subway"></em> las la-subway
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-suitcase"></em> las la-suitcase
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tag"></em> las la-tag
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tags"></em> las la-tags
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-taxi"></em> las la-taxi
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-thumbtack"></em> las la-thumbtack
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-ticket-alt"></em> las la-ticket-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tint"></em> las la-tint
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-traffic-light"></em> las la-traffic-light
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-train"></em> las la-train
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tram"></em> las la-tram
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tree"></em> las la-tree
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-trophy"></em> las la-trophy
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-truck"></em> las la-truck
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-truck"></em> las la-truck
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tty"></em> las la-tty
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-umbrella"></em> las la-umbrella
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-university"></em> las la-university
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-utensil-spoon"></em> las la-utensil-spoon
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-utensils"></em> las la-utensils
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-wheelchair"></em> las la-wheelchair
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-wifi"></em> las la-wifi
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-wine-glass"></em> las la-wine-glass
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-wrench"></em> las la-wrench
                                            </div>
                                        </div>

                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Maritime</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-anchor"></em> las la-anchor
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-binoculars"></em> las la-binoculars
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-compass"></em> las la-compass
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dharmachakra"></em> las la-dharmachakra
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-frog"></em> las la-frog
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-ship"></em> las la-ship
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-skull-crossbones"></em> las la-skull-crossbones
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-swimmer"></em> las la-swimmer
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-water"></em> las la-water
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-wind"></em> las la-wind
                                            </div>
                                        </div>

                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Marketing</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-ad"></em> las la-ad
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bullhorn"></em> las la-bullhorn
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bullseye"></em> las la-bullseye
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-comment-dollar"></em> las la-comment-dollar
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">3
                                                <em class="las la-comments-dollar"></em> las la-comments-dollar
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-envelope-open-text"></em> las la-envelope-open-text
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-funnel-dollar"></em> las la-funnel-dollar
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-lightbulb"></em> las la-lightbulb
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-mail-bulk"></em> las la-mail-bulk
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-poll"></em> las la-poll
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-poll-h"></em> las la-poll-h
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-search-dollar"></em> las la-search-dollar
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-search-location"></em> las la-search-location
                                            </div>
                                        </div>

                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Mathematics</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-calculator"></em> las la-calculator
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-divide"></em> las la-divide
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-equals"></em> las la-equals
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-greater-than"></em> las la-greater-than
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-greater-than-equal"></em> las la-greater-than-equal
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-infinity"></em> las la-infinity
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-less-than"></em> las la-less-than
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-less-than-equal"></em> las la-less-than-equal
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-minus"></em> las la-minus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-not-equal"></em> las la-not-equal
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-percentage"></em> las la-percentage
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-plus"></em> las la-plus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-square-root-alt"></em> las la-square-root-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-subscript"></em> las la-subscript
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-superscript"></em> las la-superscript
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-times"></em> las la-times
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-wave-square"></em> las la-wave-square
                                            </div>
                                        </div>

                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Medical</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-allergies"></em> las la-allergies
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-ambulance"></em> las la-ambulance
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-band-aid"></em> las la-band-aid
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-biohazard"></em> las la-biohazard
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bone"></em> las la-bone
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bong"></em> las la-bong
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-book-medical"></em> las la-book-medical
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-brain"></em> las la-brain
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-briefcase-medical"></em> las la-briefcase-medical
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-burn"></em> las la-burn
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cannabis"></em> las la-cannabis
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-capsules"></em> las la-capsules
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-clinic-medical"></em> las la-clinic-medical
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-comment-medical"></em> las la-comment-medical
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-crutch"></em> las la-crutch
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-diagnoses"></em> las la-diagnoses
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dna"></em> las la-dna
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-file-medical"></em> las la-file-medical
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-file-medical-alt"></em> las la-file-medical-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-file-prescription"></em> las la-file-prescription
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-first-aid"></em> las la-first-aid
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-heart"></em> las la-heart
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-heartbeat"></em> las la-heartbeat
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hospital"></em> las la-hospital
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hospital-alt"></em> las la-hospital-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hospital-symbol"></em> las la-hospital-symbol
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-id-card-alt"></em> las la-id-card-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-joint"></em> las la-joint
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-laptop-medical"></em> las la-laptop-medical
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-microscope"></em> las la-microscope
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-mortar-pestle"></em> las la-mortar-pestle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-notes-medical"></em> las la-notes-medical
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-pager"></em> las la-pager
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-pills"></em> las la-pills
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-plus"></em> las la-plus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-poop"></em> las la-poop
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-prescription"></em> las la-prescription
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-prescription-bottle"></em> las la-prescription-bottle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-prescription-bottle-alt"></em> las la-prescription-bottle-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-procedures"></em> las la-procedures
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-radiation"></em> las la-radiation
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-radiation-alt"></em> las la-radiation-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-smoking"></em> las la-smoking
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-smoking-ban"></em> las la-smoking-ban
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-star-of-life"></em> las la-star-of-life
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-stethoscope"></em> las la-stethoscope
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-syringe"></em> las la-syringe
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tablets"></em> las la-tablets
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-teeth"></em> las la-teeth
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-teeth-open"></em> las la-teeth-open
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-thermometer"></em> las la-thermometer
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tooth"></em> las la-tooth
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-user-md"></em> las la-user-md
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-user-nurse"></em> las la-user-nurse
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-vial"></em> las la-vial
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-vials"></em> las la-vials
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-weight"></em> las la-weight
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-x-ray"></em> las la-x-ray
                                            </div>
                                        </div>

                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Moving</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-archive"></em> las la-archive
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-box-open"></em> las la-box-open
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-couch"></em> las la-couch
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dolly"></em> las la-dolly
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-people-carry"></em> las la-people-carry
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-route"></em> las la-route
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sign"></em> las la-sign
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-suitcase"></em> las la-suitcase
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tape"></em> las la-tape
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-truck-loading"></em> las la-truck-loading
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-truck-moving"></em> las la-truck-moving
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-wine-glass"></em> las la-wine-glass
                                            </div>
                                        </div>

                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Music</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-drum"></em> las la-drum
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-drum-steelpan"></em> las la-drum-steelpan
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-file-audio"></em> las la-file-audio
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-guitar"></em> las la-guitar
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-headphones"></em> las la-headphones
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-headphones-alt"></em> las la-headphones-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-microphone"></em> las la-microphone
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-microphone-alt"></em> las la-microphone-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-microphone-alt-slash"></em> las la-microphone-alt-slash
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-microphone-slash"></em> las la-microphone-slash
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-music"></em> las la-music
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-napster"></em> lab la-napster
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-play"></em> las la-play
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-record-vinyl"></em> las la-record-vinyl
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sliders-h"></em> las la-sliders-h
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-soundcloud"></em> lab la-soundcloud
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-spotify"></em> lab la-spotify
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-volume-down"></em> las la-volume-down
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-volume-mute"></em> las la-volume-mute
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-volume-off"></em> las la-volume-off
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-volume-up"></em> las la-volume-up
                                            </div>
                                        </div>

                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Objects</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-ambulance"></em> las la-ambulance
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-anchor"></em> las la-anchor
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-archive"></em> las la-archive
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-award"></em> las la-award
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-baby-carriage"></em> las la-baby-carriage
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-balance-scale"></em> las la-balance-scale
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-balance-scale-left"></em> las la-balance-scale-left
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-balance-scale-right"></em> las la-balance-scale-right
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bath"></em> las la-bath
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bed"></em> las la-bed
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-beer"></em> las la-beer
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bell"></em> las la-bell
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bicycle"></em> las la-bicycle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-binoculars"></em> las la-binoculars
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-birthday-cake"></em> las la-birthday-cake
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-blender"></em> las la-blender
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bomb"></em> las la-bomb
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-book"></em> las la-book
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-book-dead"></em> las la-book-dead
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bookmark"></em> las la-bookmark
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-briefcase"></em> las la-briefcase
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-broadcast-tower"></em> las la-broadcast-tower
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bug"></em> las la-bug
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-building"></em> las la-building
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bullhorn"></em> las la-bullhorn
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bullseye"></em> las la-bullseye
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bus"></em> las la-bus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-calculator"></em> las la-calculator
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-calendar"></em> las la-calendar
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-calendar-alt"></em> las la-calendar-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-camera"></em> las la-camera
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-camera-retro"></em> las la-camera-retro
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-candy-cane"></em> las la-candy-cane
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-car"></em> las la-car
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-carrot"></em> las la-carrot
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-church"></em> las la-church
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-clipboard"></em> las la-clipboard
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cloud"></em> las la-cloud
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-coffee"></em> las la-coffee
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cog"></em> las la-cog
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cogs"></em> las la-cogs
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-compass"></em> las la-compass
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cookie"></em> las la-cookie
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cookie-bite"></em> las la-cookie-bite
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-copy"></em> las la-copy
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cube"></em> las la-cube
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cubes"></em> las la-cubes
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cut"></em> las la-cut
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dice"></em> las la-dice
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dice-d20"></em> las la-dice-d20
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dice-d6"></em> las la-dice-d6
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dice-five"></em> las la-dice-five
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dice-four"></em> las la-dice-four
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dice-one"></em> las la-dice-one
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dice-six"></em> las la-dice-six
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dice-three"></em> las la-dice-three
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dice-two"></em> las la-dice-two
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-digital-tachograph"></em> las la-digital-tachograph
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-door-closed"></em> las la-door-closed
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-door-open"></em> las la-door-open
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-drum"></em> las la-drum
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-drum-steelpan"></em> las la-drum-steelpan
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-envelope"></em> las la-envelope
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-envelope-open"></em> las la-envelope-open
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-eraser"></em> las la-eraser
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-eye"></em> las la-eye
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-eye-dropper"></em> las la-eye-dropper
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-fax"></em> las la-fax
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-feather"></em> las la-feather
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-feather-alt"></em> las la-feather-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-fighter-jet"></em> las la-fighter-jet
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-file"></em> las la-file
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-file-alt"></em> las la-file-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-file-prescription"></em> las la-file-prescription
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-film"></em> las la-film
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-fire"></em> las la-fire
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-fire-alt"></em> las la-fire-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-fire-extinguisher"></em> las la-fire-extinguisher
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-flag"></em> las la-flag
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-flag-checkered"></em> las la-flag-checkered
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-flask"></em> las la-flask
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-futbol"></em> las la-futbol
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-gamepad"></em> las la-gamepad
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-gavel"></em> las la-gavel
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-gem"></em> las la-gem
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-gift"></em> las la-gift
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-gifts"></em> las la-gifts
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-glass-cheers"></em> las la-glass-cheers
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-glass-martini"></em> las la-glass-martini
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-glass-whiskey"></em> las la-glass-whiskey
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-glasses"></em> las la-glasses
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-globe"></em> las la-globe
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-graduation-cap"></em> las la-graduation-cap
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-guitar"></em> las la-guitar
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hat-wizard"></em> las la-hat-wizard
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hdd"></em> las la-hdd
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-headphones"></em> las la-headphones
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-headphones-alt"></em> las la-headphones-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-headset"></em> las la-headset
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-heart"></em> las la-heart
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-heart-broken"></em> las la-heart-broken
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-helicopter"></em> las la-helicopter
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-highlighter"></em> las la-highlighter
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-holly-berry"></em> las la-holly-berry
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-home"></em> las la-home
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hospital"></em> las la-hospital
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hourglass"></em> las la-hourglass
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-igloo"></em> las la-igloo
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-image"></em> las la-image
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-images"></em> las la-images
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-industry"></em> las la-industry
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-key"></em> las la-key
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-keyboard"></em> las la-keyboard
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-laptop"></em> las la-laptop
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-leaf"></em> las la-leaf
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-lemon"></em> las la-lemon
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-life-ring"></em> las la-life-ring
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-lightbulb"></em> las la-lightbulb
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-lock"></em> las la-lock
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-lock-open"></em> las la-lock-open
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-magic"></em> las la-magic
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-magnet"></em> las la-magnet
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-map"></em> las la-map
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-map-marker"></em> las la-map-marker
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-map-marker-alt"></em> las la-map-marker-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-map-pin"></em> las la-map-pin
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-map-signs"></em> las la-map-signs
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-marker"></em> las la-marker
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-medal"></em> las la-medal
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-medkit"></em> las la-medkit
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-memory"></em> las la-memory
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-microchip"></em> las la-microchip
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-microphone"></em> las la-microphone
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-microphone-alt"></em> las la-microphone-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-mitten"></em> las la-mitten
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-mobile"></em> las la-mobile
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-mobile-alt"></em> las la-mobile-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-money-bill"></em> las la-money-bill
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-money-bill-alt"></em> las la-money-bill-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-money-check"></em> las la-money-check
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-money-check-alt"></em> las la-money-check-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-moon"></em> las la-moon
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-motorcycle"></em> las la-motorcycle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-mug-hot"></em> las la-mug-hot
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-newspaper"></em> las la-newspaper
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-paint-brush"></em> las la-paint-brush
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-paper-plane"></em> las la-paper-plane
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-paperclip"></em> las la-paperclip
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-paste"></em> las la-paste
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-paw"></em> las la-paw
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-pen"></em> las la-pen
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-phone"></em> las la-phone
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-phone-alt"></em> las la-phone-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-plane"></em> las la-plane
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-plug"></em> las la-plug
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-print"></em> las la-print
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-puzzle-piece"></em> las la-puzzle-piece
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-ring"></em> las la-ring
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-road"></em> las la-road
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-rocket"></em> las la-rocket
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-ruler-combined"></em> las la-ruler-combined
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-ruler-horizontal"></em> las la-ruler-horizontal
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-ruler-vertical"></em> las la-ruler-vertical
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-satellite"></em> las la-satellite
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-satellite-dish"></em> las la-satellite-dish
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-save"></em> las la-save
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-school"></em> las la-school
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-screwdriver"></em> las la-screwdriver
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-scroll"></em> las la-scroll
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sd-card"></em> las la-sd-card
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-search"></em> las la-search
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-shield-alt"></em> las la-shield-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-shopping-bag"></em> las la-shopping-bag
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-shopping-basket"></em> las la-shopping-basket
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-shopping-cart"></em> las la-shopping-cart
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-shower"></em> las la-shower
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sim-card"></em> las la-sim-card
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-skull-crossbones"></em> las la-skull-crossbones
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sleigh"></em> las la-sleigh
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-snowflake"></em> las la-snowflake
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-snowplow"></em> las la-snowplow
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-space-shuttle"></em> las la-space-shuttle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-star"></em> las la-star
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sticky-note"></em> las la-sticky-note
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-stopwatch"></em> las la-stopwatch
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-stroopwafel"></em> las la-stroopwafel
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-subway"></em> las la-subway
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-suitcase"></em> las la-suitcase
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sun"></em> las la-sun
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tablet"></em> las la-tablet
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tablet-alt"></em> las la-tablet-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tachometer-alt"></em> las la-tachometer-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tag"></em> las la-tag
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tags"></em> las la-tags
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-taxi"></em> las la-taxi
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-thumbtack"></em> las la-thumbtack
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-ticket-alt"></em> las la-ticket-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-toilet"></em> las la-toilet
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-toolbox"></em> las la-toolbox
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tools"></em> las la-tools
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-train"></em> las la-train
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tram"></em> las la-tram
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-trash"></em> las la-trash
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-trash-alt"></em> las la-trash-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tree"></em> las la-tree
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-trophy"></em> las la-trophy
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-truck"></em> las la-truck
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tv"></em> las la-tv
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-umbrella"></em> las la-umbrella
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-university"></em> las la-university
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-unlock"></em> las la-unlock
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-unlock-alt"></em> las la-unlock-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-utensil-spoon"></em> las la-utensil-spoon
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-utensils"></em> las la-utensils
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-wallet"></em> las la-wallet
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-weight"></em> las la-weight
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-wheelchair"></em> las la-wheelchair
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-wine-glass"></em> las la-wine-glass
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-wrench"></em> las la-wrench
                                            </div>
                                        </div>

                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Other</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-500px"></em> lab la-500px
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-accusoft"></em> lab la-accusoft
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-adn"></em> lab la-adn
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-adobe"></em> lab la-adobe
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-adversal"></em> lab la-adversal
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-affiliatetheme"></em> lab la-affiliatetheme
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-airbnb"></em> lab la-airbnb
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-algolia"></em> lab la-algolia
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-amazon"></em> lab la-amazon
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-amilia"></em> lab la-amilia
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-android"></em> lab la-android
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-angellist"></em> lab la-angellist
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-angrycreative"></em> lab la-angrycreative
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-angular"></em> lab la-angular
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-app-store"></em> lab la-app-store
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-app-store-ios"></em> lab la-app-store-ios
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-apper"></em> lab la-apper
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-apple"></em> lab la-apple
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-artstation"></em> lab la-artstation
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-asymmetrik"></em> lab la-asymmetrik
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-atlassian"></em> lab la-atlassian
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-audible"></em> lab la-audible
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-autoprefixer"></em> lab la-autoprefixer
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-avianex"></em> lab la-avianex
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-aviato"></em> lab la-aviato
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-aws"></em> lab la-aws
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-backspace"></em> las la-backspace
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-bandcamp"></em> lab la-bandcamp
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-battle-net"></em> lab la-battle-net
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-behance"></em> lab la-behance
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-behance-square"></em> lab la-behance-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-behance-square"></em> lab la-behance-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-bimobject"></em> lab la-bimobject
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-bitbucket"></em> lab la-bitbucket
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-bity"></em> lab la-bity
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-black-tie"></em> lab la-black-tie
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-blackberry"></em> lab la-blackberry
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-blender-phone"></em> las la-blender-phone
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-blogger"></em> lab la-blogger
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-blogger-b"></em> lab la-blogger-b
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-bootstrap"></em> lab la-bootstrap
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-buffer"></em> lab la-buffer
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-buromobelexperte"></em> lab la-buromobelexperte
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-buy-n-large"></em> lab la-buy-n-large
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-buysellads"></em> lab la-buysellads
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-canadian-maple-leaf"></em> lab la-canadian-maple-leaf
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-centercode"></em> lab la-centercode
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-centos"></em> lab la-centos
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-chrome"></em> lab la-chrome
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-chromecast"></em> lab la-chromecast
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-cloudscale"></em> lab la-cloudscale
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-cloudsmith"></em> lab la-cloudsmith
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-cloudversify"></em> lab la-cloudversify
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-codepen"></em> lab la-codepen
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-codiepie"></em> lab la-codiepie
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-confluence"></em> lab la-confluence
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-connectdevelop"></em> lab la-connectdevelop
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-contao"></em> lab la-contao
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-cotton-bureau"></em> lab la-cotton-bureau
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-cpanel"></em> lab la-cpanel
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-creative-commons"></em> lab la-creative-commons
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-creative-commons-by"></em> lab la-creative-commons-by
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-creative-commons-nc"></em> lab la-creative-commons-nc
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-creative-commons-nc-eu"></em> lab la-creative-commons-nc-eu
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-creative-commons-nc-jp"></em> lab la-creative-commons-nc-jp
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-creative-commons-nd"></em> lab la-creative-commons-nd
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-creative-commons-pd"></em> lab la-creative-commons-pd
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-creative-commons-pd-alt"></em> lab la-creative-commons-pd-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-creative-commons-remix"></em> lab la-creative-commons-remix
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-creative-commons-sa"></em> lab la-creative-commons-sa
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-creative-commons-sampling"></em> lab la-creative-commons-sampling
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-creative-commons-sampling-plus"></em> lab la-creative-commons-sampling-plus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-creative-commons-share"></em> lab la-creative-commons-share
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-creative-commons-zero"></em> lab la-creative-commons-zero
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-crown"></em> las la-crown
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-css3"></em> lab la-css3
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-css3-alt"></em> lab la-css3-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-cuttlefish"></em> lab la-cuttlefish
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-dashcube"></em> lab la-dashcube
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-delicious"></em> lab la-delicious
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-deploydog"></em> lab la-deploydog
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-deskpro"></em> lab la-deskpro
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-dev"></em> lab la-dev
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-deviantart"></em> lab la-deviantart
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-dhl"></em> lab la-dhl
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-diaspora"></em> lab la-diaspora
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-digg"></em> lab la-digg
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-digital-ocean"></em> lab la-digital-ocean
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-discord"></em> lab la-discord
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-discourse"></em> lab la-discourse
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-dochub"></em> lab la-dochub
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-docker"></em> lab la-docker
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-draft2digital"></em> lab la-draft2digital
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-dribbble"></em> lab la-dribbble
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-dribbble-square"></em> lab la-dribbble-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-dropbox"></em> lab la-dropbox
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-drupal"></em> lab la-drupal
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dumpster-fire"></em> las la-dumpster-fire
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-dyalog"></em> lab la-dyalog
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-earlybirds"></em> lab la-earlybirds
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-ebay"></em> lab la-ebay
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-edge"></em> lab la-edge
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-elementor"></em> lab la-elementor
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-ello"></em> lab la-ello
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-ember"></em> lab la-ember
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-empire"></em> lab la-empire
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-envira"></em> lab la-envira
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-erlang"></em> lab la-erlang
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-etsy"></em> lab la-etsy
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-evernote"></em> lab la-evernote
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-expeditedssl"></em> lab la-expeditedssl
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-facebook"></em> lab la-facebook
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-facebook-f"></em> lab la-facebook-f
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-facebook-messenger"></em> lab la-facebook-messenger
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-facebook-square"></em> lab la-facebook-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-fedex"></em> lab la-fedex
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-fedora"></em> lab la-fedora
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-figma"></em> lab la-figma
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-file-csv"></em> las la-file-csv
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-firefox"></em> lab la-firefox
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-first-order"></em> lab la-first-order
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-first-order-alt"></em> lab la-first-order-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-firstdraft"></em> lab la-firstdraft
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-flickr"></em> lab la-flickr
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-flipboard"></em> lab la-flipboard
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-fly"></em> lab la-fly
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-font-awesome"></em> lab la-font-awesome
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-font-awesome-alt"></em> lab la-font-awesome-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-font-awesome-flag"></em> lab la-font-awesome-flag
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-fonticons"></em> lab la-fonticons
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-fonticons-fi"></em> lab la-fonticons-fi
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-fort-awesome"></em> lab la-fort-awesome
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-fort-awesome-alt"></em> lab la-fort-awesome-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-forumbee"></em> lab la-forumbee
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-foursquare"></em> lab la-foursquare
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-free-code-camp"></em> lab la-free-code-camp
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-freebsd"></em> lab la-freebsd
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-fulcrum"></em> lab la-fulcrum
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-get-pocket"></em> lab la-get-pocket
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-git"></em> lab la-git
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-git-alt"></em> lab la-git-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-git-square"></em> lab la-git-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-gitlab"></em> lab la-gitlab
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-gitter"></em> lab la-gitter
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-glide"></em> lab la-glide
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-glide-g"></em> lab la-glide-g
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-gofore"></em> lab la-gofore
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-goodreads"></em> lab la-goodreads
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-goodreads-g"></em> lab la-goodreads-g
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-google"></em> lab la-google
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-google-drive"></em> lab la-google-drive
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-google-play"></em> lab la-google-play
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-google-plus"></em> lab la-google-plus
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-google-plus-g"></em> lab la-google-plus-g
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-google-plus-square"></em> lab la-google-plus-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-gratipay"></em> lab la-gratipay
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-grav"></em> lab la-grav
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-gripfire"></em> lab la-gripfire
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-grunt"></em> lab la-grunt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-gulp"></em> lab la-gulp
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-hacker-news"></em> lab la-hacker-news
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-hacker-news-square"></em> lab la-hacker-news-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-hackerrank"></em> lab la-hackerrank
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-hips"></em> lab la-hips
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-hire-a-helper"></em> lab la-hire-a-helper
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-hooli"></em> lab la-hooli
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-hornbill"></em> lab la-hornbill
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-hotjar"></em> lab la-hotjar
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-houzz"></em> lab la-houzz
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-html5"></em> lab la-html5
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-hubspot"></em> lab la-hubspot
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-imdb"></em> lab la-imdb
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-instagram"></em> lab la-instagram
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-intercom"></em> lab la-intercom
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-internet-explorer"></em> lab la-internet-explorer
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-invision"></em> lab la-invision
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-ioxhost"></em> lab la-ioxhost
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-itch-io"></em> lab la-itch-io
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-itunes"></em> lab la-itunes
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-itunes-note"></em> lab la-itunes-note
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-java"></em> lab la-java
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-jenkins"></em> lab la-jenkins
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-jira"></em> lab la-jira
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-joget"></em> lab la-joget
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-joomla"></em> lab la-joomla
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-js"></em> lab la-js
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-js-square"></em> lab la-js-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-jsfiddle"></em> lab la-jsfiddle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-kaggle"></em> lab la-kaggle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-keybase"></em> lab la-keybase
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-keycdn"></em> lab la-keycdn
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-kickstarter"></em> lab la-kickstarter
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-kickstarter-k"></em> lab la-kickstarter-k
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-korvue"></em> lab la-korvue
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-laravel"></em> lab la-laravel
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-lastfm"></em> lab la-lastfm
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-lastfm-square"></em> lab la-lastfm-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-leanpub"></em> lab la-leanpub
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-less"></em> lab la-less
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-line"></em> lab la-line
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-linkedin"></em> lab la-linkedin
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-linkedin-in"></em> lab la-linkedin-in
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-linode"></em> lab la-linode
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-linux"></em> lab la-linux
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-lyft"></em> lab la-lyft
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-magento"></em> lab la-magento
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-mailchimp"></em> lab la-mailchimp
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-mandalorian"></em> lab la-mandalorian
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-markdown"></em> lab la-markdown
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-mastodon"></em> lab la-mastodon
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-maxcdn"></em> lab la-maxcdn
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-mdb"></em> lab la-mdb
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-medapps"></em> lab la-medapps
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-medium"></em> lab la-medium
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-medium-m"></em> lab la-medium-m
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-medrt"></em> lab la-medrt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-meetup"></em> lab la-meetup
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-megaport"></em> lab la-megaport
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-mendeley"></em> lab la-mendeley
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-microsoft"></em> lab la-microsoft
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-microsoft"></em> lab la-microsoft
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-mix"></em> lab la-mix
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-mixcloud"></em> lab la-mixcloud
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-mizuni"></em> lab la-mizuni
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-modx"></em> lab la-modx
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-monero"></em> lab la-monero
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-neos"></em> lab la-neos
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-network-wired"></em> las la-network-wired
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-nimblr"></em> lab la-nimblr
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-node"></em> lab la-node
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-node-js"></em> lab la-node-js
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-npm"></em> lab la-npm
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-ns8"></em> lab la-ns8
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-nutritionix"></em> lab la-nutritionix
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-odnoklassniki"></em> lab la-odnoklassniki
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-odnoklassniki-square"></em> lab la-odnoklassniki-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-opencart"></em> lab la-opencart
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-openid"></em> lab la-openid
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-opera"></em> lab la-opera
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-optin-monster"></em> lab la-optin-monster
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-orcid"></em> lab la-orcid
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-osi"></em> lab la-osi
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-page4"></em> lab la-page4
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-pagelines"></em> lab la-pagelines
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-palfed"></em> lab la-palfed
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-patreon"></em> lab la-patreon
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-periscope"></em> lab la-periscope
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-phabricator"></em> lab la-phabricator
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-phoenix-framework"></em> lab la-phoenix-framework
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-phoenix-squadron"></em> lab la-phoenix-squadron
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-php"></em> lab la-php
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-pied-piper"></em> lab la-pied-piper
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-pied-piper-alt"></em> lab la-pied-piper-alt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-pied-piper-hat"></em> lab la-pied-piper-hat
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-pied-piper-pp"></em> lab la-pied-piper-pp
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-pinterest"></em> lab la-pinterest
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-pinterest-p"></em> lab la-pinterest-p
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-pinterest-square"></em> lab la-pinterest-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-product-hunt"></em> lab la-product-hunt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-pushed"></em> lab la-pushed
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-python"></em> lab la-python
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-qq"></em> lab la-qq
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-quinscape"></em> lab la-quinscape
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-quora"></em> lab la-quora
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-r-project"></em> lab la-r-project
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-raspberry-pi"></em> lab la-raspberry-pi
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-ravelry"></em> lab la-ravelry
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-react"></em> lab la-react
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-reacteurope"></em> lab la-reacteurope
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-readme"></em> lab la-readme
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-rebel"></em> lab la-rebel
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-red-river"></em> lab la-red-river
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-reddit"></em> lab la-reddit
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-reddit-alien"></em> lab la-reddit-alien
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-reddit-square"></em> lab la-reddit-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-redhat"></em> lab la-redhat
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-renren"></em> lab la-renren
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-replyd"></em> lab la-replyd
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-researchgate"></em> lab la-researchgate
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-resolving"></em> lab la-resolving
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-rev"></em> lab la-rev
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-rocketchat"></em> lab la-rocketchat
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-rockrms"></em> lab la-rockrms
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-safari"></em> lab la-safari
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-salesforce"></em> lab la-salesforce
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-sass"></em> lab la-sass
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-schlix"></em> lab la-schlix
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-scribd"></em> lab la-scribd
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-searchengin"></em> lab la-searchengin
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-sellcast"></em> lab la-sellcast
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-sellsy"></em> lab la-sellsy
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-servicestack"></em> lab la-servicestack
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-shirtsinbulk"></em> lab la-shirtsinbulk
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-shopware"></em> lab la-shopware
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-signature"></em> las la-signature
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-simplybuilt"></em> lab la-simplybuilt
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-sistrix"></em> lab la-sistrix
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-sith"></em> lab la-sith
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-sketch"></em> lab la-sketch
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-skull"></em> las la-skull
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-skyatlas"></em> lab la-skyatlas
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-skype"></em> lab la-skype
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-slack"></em> lab la-slack
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-slack-hash"></em> lab la-slack-hash
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-slideshare"></em> lab la-slideshare
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-snapchat"></em> lab la-snapchat
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-snapchat-ghost"></em> lab la-snapchat-ghost
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-snapchat-square"></em> lab la-snapchat-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-sourcetree"></em> lab la-sourcetree
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-speakap"></em> lab la-speakap
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-speaker-deck"></em> lab la-speaker-deck
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-squarespace"></em> lab la-squarespace
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-stack-exchange"></em> lab la-stack-exchange
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-stack-overflow"></em> lab la-stack-overflow
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-stackpath"></em> lab la-stackpath
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-staylinked"></em> lab la-staylinked
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-sticker-mule"></em> lab la-sticker-mule
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-strava"></em> lab la-strava
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-studiovinari"></em> lab la-studiovinari
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-stumbleupon"></em> lab la-stumbleupon
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-stumbleupon-circle"></em> lab la-stumbleupon-circle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-superpowers"></em> lab la-superpowers
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-supple"></em> lab la-supple
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-suse"></em> lab la-suse
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-swift"></em> lab la-swift
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-symfony"></em> lab la-symfony
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-teamspeak"></em> lab la-teamspeak
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-telegram"></em> lab la-telegram
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-telegram-plane"></em> lab la-telegram-plane
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-tencent-weibo"></em> lab la-tencent-weibo
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-the-red-yeti"></em> lab la-the-red-yeti
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-themeco"></em> lab la-themeco
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-themeisle"></em> lab la-themeisle
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-think-peaks"></em> lab la-think-peaks
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-trade-federation"></em> lab la-trade-federation
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-trello"></em> lab la-trello
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-tripadvisor"></em> lab la-tripadvisor
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-tumblr"></em> lab la-tumblr
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-tumblr-square"></em> lab la-tumblr-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-twitter"></em> lab la-twitter
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-twitter-square"></em> lab la-twitter-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-typo3"></em> lab la-typo3
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-uber"></em> lab la-uber
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-ubuntu"></em> lab la-ubuntu
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-uikit"></em> lab la-uikit
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-umbraco"></em> lab la-umbraco
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-uniregistry"></em> lab la-uniregistry
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-untappd"></em> lab la-untappd
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-ups"></em> lab la-ups
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-usb"></em> lab la-usb
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-usps"></em> lab la-usps
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-ussunnah"></em> lab la-ussunnah
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-vaadin"></em> lab la-vaadin
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-viacoin"></em> lab la-viacoin
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-viadeo"></em> lab la-viadeo
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-viadeo-square"></em> lab la-viadeo-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-viber"></em> lab la-viber
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-vimeo"></em> lab la-vimeo
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-vimeo-square"></em> lab la-vimeo-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-vimeo-v"></em> lab la-vimeo-v
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-vine"></em> lab la-vine
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-vk"></em> lab la-vk
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-vnv"></em> lab la-vnv
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-vr-cardboard"></em> las la-vr-cardboard
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-vuejs"></em> lab la-vuejs
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-waze"></em> lab la-waze
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-weebly"></em> lab la-weebly
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-weibo"></em> lab la-weibo
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-weight-hanging"></em> las la-weight-hanging
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-weixin"></em> lab la-weixin
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-whatsapp"></em> lab la-whatsapp
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-whatsapp-square"></em> lab la-whatsapp-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-whmcs"></em> lab la-whmcs
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-wikipedia-w"></em> lab la-wikipedia-w
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-windows"></em> lab la-windows
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-wix"></em> lab la-wix
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-wolf-pack-battalion"></em> lab la-wolf-pack-battalion
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-wordpress"></em> lab la-wordpress
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-wordpress-simple"></em> lab la-wordpress-simple
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-wpbeginner"></em> lab la-wpbeginner
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-wpexplorer"></em> lab la-wpexplorer
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-wpforms"></em> lab la-wpforms
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-wpressr"></em> lab la-wpressr
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-xing"></em> lab la-xing
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-xing-square"></em> lab la-xing-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-y-combinator"></em> lab la-y-combinator
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-yahoo"></em> lab la-yahoo
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-yammer"></em> lab la-yammer
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-yandex"></em> lab la-yandex
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-yandex-international"></em> lab la-yandex-international
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-yarn"></em> lab la-yarn
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-yelp"></em> lab la-yelp
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-yoast"></em> lab la-yoast
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-youtube-square"></em> lab la-youtube-square
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-zhihu"></em> lab la-zhihu
                                            </div>
                                        </div>


                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Payments & Shopping</h6>
                                        <div class="row icon-demo-content">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-alipay"></em> lab la-alipay
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-amazon-pay"></em> lab la-amazon-pay
                                            </div>
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-apple-pay"></em> lab la-apple-pay
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bell"></em> las la-bell
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-bitcoin"></em> lab la-bitcoin
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bookmark"></em> las la-bookmark
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-btc"></em> lab la-btc
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bullhorn"></em> las la-bullhorn
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-camera"></em> las la-camera
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-camera-retro"></em> las la-camera-retro
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cart-arrow-down"></em> las la-cart-arrow-down
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cart-plus"></em> las la-cart-plus
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-cc-amazon-pay"></em> lab la-cc-amazon-pay
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-cc-amex"></em> lab la-cc-amex
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-cc-apple-pay"></em> lab la-cc-apple-pay
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-cc-diners-club"></em> lab la-cc-diners-club
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-cc-discover"></em> lab la-cc-discover
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-cc-jcb"></em> lab la-cc-jcb
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-cc-mastercard"></em> lab la-cc-mastercard
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-cc-paypal"></em> lab la-cc-paypal
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-cc-stripe"></em> lab la-cc-stripe
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-cc-visa"></em> lab la-cc-visa
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-certificate"></em> las la-certificate
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-credit-card"></em> las la-credit-card
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-ethereum"></em> lab la-ethereum
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-gem"></em> las la-gem
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-gift"></em> las la-gift
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-google-wallet"></em> lab la-google-wallet
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-handshake"></em> las la-handshake
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-heart"></em> las la-heart
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-key"></em> las la-key
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-money-check"></em> las la-money-check
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-money-check-alt"></em> las la-money-check-alt
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-paypal"></em> lab la-paypal
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-receipt"></em> las la-receipt
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-shopping-bag"></em> las la-shopping-bag
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-shopping-basket"></em> las la-shopping-basket
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-shopping-cart"></em> las la-shopping-cart
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-star"></em> las la-star
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-stripe"></em> lab la-stripe
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-stripe-s"></em> lab la-stripe-s
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tag"></em> las la-tag
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tags"></em> las la-tags
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-thumbs-down"></em> las la-thumbs-down
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-thumbs-up"></em> las la-thumbs-up
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-trophy"></em> las la-trophy
                                            </div>
                                        </div>

                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Political</h6>
                                        <div class="row">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-award"></em> las la-award
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-balance-scale"></em> las la-balance-scale
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-balance-scale-left"></em> las la-balance-scale-left
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-balance-scale-right"></em> las la-balance-scale-right
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bullhorn"></em> las la-bullhorn
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-check-double"></em> las la-check-double
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-democrat"></em> las la-democrat
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-donate"></em> las la-donate
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dove"></em> las la-dove
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-fist-raised"></em> las la-fist-raised
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-flag-usa"></em> las la-flag-usa
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-handshake"></em> las la-handshake
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-person-booth"></em> las la-person-booth
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-piggy-bank"></em> las la-piggy-bank
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-republican"></em> las la-republican
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-vote-yea"></em> las la-vote-yea
                                            </div> 
                                        </div>

                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Religion</h6>
                                        <div class="row">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-ankh"></em> las la-ankh
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-atom"></em> las la-atom
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bible"></em> las la-bible
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-church"></em> las la-church
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cross"></em> las la-cross
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dharmachakra"></em> las la-dharmachakra
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dove"></em> las la-dove
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-gopuram"></em> las la-gopuram
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hamsa"></em> las la-hamsa
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hanukiah"></em> las la-hanukiah
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-haykal"></em> las la-haykal
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-jedi"></em> las la-jedi
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-journal-whills"></em> las la-journal-whills
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-kaaba"></em> las la-kaaba
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-khanda"></em> las la-khanda
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-menorah"></em> las la-menorah
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-mosque"></em> las la-mosque
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-om"></em> las la-om
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-pastafarianism"></em> las la-pastafarianism
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-peace"></em> las la-peace
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-place-of-worship"></em> las la-place-of-worship
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-pray"></em> las la-pray
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-praying-hands"></em> las la-praying-hands
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-quran"></em> las la-quran
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-star-and-crescent"></em> las la-star-and-crescent
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-star-of-david"></em> las la-star-of-david
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-synagogue"></em> las la-synagogue
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-torah"></em> las la-torah
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-torii-gate"></em> las la-torii-gate
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-vihara"></em> las la-vihara
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-yin-yang"></em> las la-yin-yang
                                            </div>
                                        </div>


                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Science</h6>
                                        <div class="row">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-atom"></em> las la-atom
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-biohazard"></em> las la-biohazard
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-brain"></em> las la-brain
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-burn"></em> las la-burn
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-capsules"></em> las la-capsules
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-clipboard-check"></em> las la-clipboard-check
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dna"></em> las la-dna
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-eye-dropper"></em> las la-eye-dropper
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-filter"></em> las la-filter
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-fire"></em> las la-fire
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-fire-alt"></em> las la-fire-alt
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-flask"></em> las la-flask
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-frog"></em> las la-frog
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-magnet"></em> las la-magnet
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-microscope"></em> las la-microscope
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-mortar-pestle"></em> las la-mortar-pestle
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-pills"></em> las la-pills
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-prescription-bottle"></em> las la-prescription-bottle
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-radiation"></em> las la-radiation
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-radiation-alt"></em> las la-radiation-alt
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-seedling"></em> las la-seedling
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-skull-crossbones"></em> las la-skull-crossbones
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-syringe"></em> las la-syringe
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tablets"></em> las la-tablets
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-temperature-high"></em> las la-temperature-high
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-temperature-low"></em> las la-temperature-low
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-vial"></em> las la-vial
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-vials"></em> las la-vials
                                            </div>
                                        </div>


                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Religion</h6>
                                        <div class="row">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-galactic-republic"></em> lab la-galactic-republic
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-galactic-senate"></em> lab la-galactic-senate
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-globe"></em> las la-globe
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-jedi"></em> las la-jedi
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-jedi-order"></em> lab la-jedi-order
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-journal-whills"></em> las la-journal-whills
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-meteor"></em> las la-meteor
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-moon"></em> las la-moon
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-old-republic"></em> lab la-old-republic
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-robot"></em> las la-robot
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-rocket"></em> las la-rocket
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-satellite"></em> las la-satellite
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-satellite-dish"></em> las la-satellite-dish
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-space-shuttle"></em> las la-space-shuttle
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-user-astronaut"></em> las la-user-astronaut
                                            </div>
                                        </div>


                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Religion</h6>
                                        <div class="row">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-ban"></em> las la-ban
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bug"></em> las la-bug
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-door-closed"></em> las la-door-closed
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-door-open"></em> las la-door-open
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dungeon"></em> las la-dungeon
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-eye"></em> las la-eye
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-eye-slash"></em> las la-eye-slash
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-file-contract"></em> las la-file-contract
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-file-signature"></em> las la-file-signature
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-fingerprint"></em> las la-fingerprint
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-id-badge"></em> las la-id-badge
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-id-card"></em> las la-id-card
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-id-card-alt"></em> las la-id-card-alt
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-key"></em> las la-key
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-lock"></em> las la-lock
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-lock-open"></em> las la-lock-open
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-mask"></em> las la-mask
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-passport"></em> las la-passport
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-shield-alt"></em> las la-shield-alt
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-unlock"></em> las la-unlock
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-unlock-alt"></em> las la-unlock-alt
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-user-lock"></em> las la-user-lock
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-user-secret"></em> las la-user-secret
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-user-shield"></em> las la-user-shield
                                            </div>
                                        </div>


                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Religion</h6>
                                        <div class="row">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bookmark"></em> las la-bookmark
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-calendar"></em> las la-calendar
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-certificate"></em> las la-certificate
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-circle"></em> las la-circle
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cloud"></em> las la-cloud
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-comment"></em> las la-comment
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-file"></em> las la-file
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-folder"></em> las la-folder
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-heart"></em> las la-heart
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-heart-broken"></em> las la-heart-broken
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-map-marker"></em> las la-map-marker
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-play"></em> las la-play
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-shapes"></em> las la-shapes
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-square"></em> las la-square
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-star"></em> las la-star
                                            </div>
                                        </div>


                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Religion</h6>
                                        <div class="row">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bell"></em> las la-bell
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-birthday-cake"></em> las la-birthday-cake
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-camera"></em> las la-camera
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-comment"></em> las la-comment
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-comment-alt"></em> las la-comment-alt
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-envelope"></em> las la-envelope
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hashtag"></em> las la-hashtag
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-heart"></em> las la-heart
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-icons"></em> las la-icons
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-image"></em> las la-image
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-images"></em> las la-images
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-map-marker"></em> las la-map-marker
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-map-marker-alt"></em> las la-map-marker-alt
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-photo-video"></em> las la-photo-video
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-poll"></em> las la-poll
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-poll-h"></em> las la-poll-h
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-retweet"></em> las la-retweet
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-share"></em> las la-share
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-share-alt"></em> las la-share-alt
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-share-square"></em> las la-share-square
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-star"></em> las la-star
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-thumbs-down"></em> las la-thumbs-down
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-thumbs-up"></em> las la-thumbs-up
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-thumbtack"></em> las la-thumbtack
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-user"></em> las la-user
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-user-circle"></em> las la-user-circle
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-user-friends"></em> las la-user-friends
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-user-plus"></em> las la-user-plus
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-users"></em> las la-users
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-video"></em> las la-video
                                            </div>
                                        </div>


                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Religion</h6>
                                        <div class="row">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-asterisk"></em> las la-asterisk
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-atom"></em> las la-atom
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-certificate"></em> las la-certificate
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-circle-notch"></em> las la-circle-notch
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cog"></em> las la-cog
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-compact-disc"></em> las la-compact-disc
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-compass"></em> las la-compass
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-crosshairs"></em> las la-crosshairs
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dharmachakra"></em> las la-dharmachakra
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-fan"></em> las la-fan
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-haykal"></em> las la-haykal
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-life-ring"></em> las la-life-ring
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-palette"></em> las la-palette
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-ring"></em> las la-ring
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-slash"></em> las la-slash
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-snowflake"></em> las la-snowflake
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-spinner"></em> las la-spinner
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-stroopwafel"></em> las la-stroopwafel
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sun"></em> las la-sun
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sync"></em> las la-sync
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sync-alt"></em> las la-sync-alt
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-yin-yang"></em> las la-yin-yang
                                            </div>
                                        </div>


                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Religion</h6>
                                        <div class="row">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-baseball-ball"></em> las la-baseball-ball
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-basketball-ball"></em> las la-basketball-ball
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-biking"></em> las la-biking
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bowling-ball"></em> las la-bowling-ball
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dumbbell"></em> las la-dumbbell
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-football-ball"></em> las la-football-ball
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-futbol"></em> las la-futbol
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-golf-ball"></em> las la-golf-ball
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hockey-puck"></em> las la-hockey-puck
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-quidditch"></em> las la-quidditch
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-running"></em> las la-running
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-skating"></em> las la-skating
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-skiing"></em> las la-skiing
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-skiing-nordic"></em> las la-skiing-nordic
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-snowboarding"></em> las la-snowboarding
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-swimmer"></em> las la-swimmer
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-table-tennis"></em> las la-table-tennis
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-volleyball-ball"></em> las la-volleyball-ball
                                            </div>
                                        </div>


                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Religion</h6>
                                        <div class="row">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-allergies"></em> las la-allergies
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-broom"></em> las la-broom
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cloud-sun"></em> las la-cloud-sun
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cloud-sun-rain"></em> las la-cloud-sun-rain
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-frog"></em> las la-frog
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-rainbow"></em> las la-rainbow
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-seedling"></em> las la-seedling
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-umbrella"></em> las la-umbrella
                                            </div>
                                        </div>


                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Religion</h6>
                                        <div class="row">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-ban"></em> las la-ban
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-battery-empty"></em> las la-battery-empty
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-battery-full"></em> las la-battery-full
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-battery-half"></em> las la-battery-half
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-battery-quarter"></em> las la-battery-quarter
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-battery-three-quarters"></em> las la-battery-three-quarters
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bell"></em> las la-bell
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bell-slash"></em> las la-bell-slash
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-calendar"></em> las la-calendar
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-calendar-alt"></em> las la-calendar-alt
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-calendar-check"></em> las la-calendar-check
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-calendar-day"></em> las la-calendar-day
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-calendar-minus"></em> las la-calendar-minus
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-calendar-plus"></em> las la-calendar-plus
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-calendar-times"></em> las la-calendar-times
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-calendar-week"></em> las la-calendar-week
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cart-arrow-down"></em> las la-cart-arrow-down
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cart-plus"></em> las la-cart-plus
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-comment"></em> las la-comment
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-comment-alt"></em> las la-comment-alt
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-comment-slash"></em> las la-comment-slash
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-compass"></em> las la-compass
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-door-closed"></em> las la-door-closed
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-door-open"></em> las la-door-open
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-exclamation"></em> las la-exclamation
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-exclamation-circle"></em> las la-exclamation-circle
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-exclamation-triangle"></em> las la-exclamation-triangle
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-eye"></em> las la-eye
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-eye-slash"></em> las la-eye-slash
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-file"></em> las la-file
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-file-alt"></em> las la-file-alt
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-folder"></em> las la-folder
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-folder-open"></em> las la-folder-open
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-gas-pump"></em> las la-gas-pump
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-info"></em> las la-info
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-info-circle"></em> las la-info-circle
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-lightbulb"></em> las la-lightbulb
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-lock"></em> las la-lock
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-lock-open"></em> las la-lock-open
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-map-marker"></em> las la-map-marker
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-map-marker-alt"></em> las la-map-marker-alt
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-microphone"></em> las la-microphone
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-microphone-alt"></em> las la-microphone-alt
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-microphone-alt-slash"></em> las la-microphone-alt-slash
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-microphone-slash"></em> las la-microphone-slash
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-minus"></em> las la-minus
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-minus-circle"></em> las la-minus-circle
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-minus-square"></em> las la-minus-square
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-parking"></em> las la-parking
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-phone"></em> las la-phone
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-phone-alt"></em> las la-phone-alt
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-phone-slash"></em> las la-phone-slash
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-plus"></em> las la-plus
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-plus-circle"></em> las la-plus-circle
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-plus-square"></em> las la-plus-square
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-print"></em> las la-print
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-question"></em> las la-question
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-question-circle"></em> las la-question-circle
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-shield-alt"></em> las la-shield-alt
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-shopping-cart"></em> las la-shopping-cart
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sign-in-alt"></em> las la-sign-in-alt
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sign-out-alt"></em> las la-sign-out-alt
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-signal"></em> las la-signal
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-smoking-ban"></em> las la-smoking-ban
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-star"></em> las la-star
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-star-half"></em> las la-star-half
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-star-half-alt"></em> las la-star-half-alt
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-stream"></em> las la-stream
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-thermometer-empty"></em> las la-thermometer-empty
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-thermometer-full"></em> las la-thermometer-full
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-thermometer-half"></em> las la-thermometer-half
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-thermometer-quarter"></em> las la-thermometer-quarter
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-thermometer-three-quarters"></em> las la-thermometer-three-quarters
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-thumbs-down"></em> las la-thumbs-down
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-thumbs-up"></em> las la-thumbs-up
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tint"></em> las la-tint
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tint-slash"></em> las la-tint-slash
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-toggle-off"></em> las la-toggle-off
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-toggle-on"></em> las la-toggle-on
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-unlock"></em> las la-unlock
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-unlock-alt"></em> las la-unlock-alt
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-user"></em> las la-user
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-user-alt"></em> las la-user-alt
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-user-alt-slash"></em> las la-user-alt-slash
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-user-slash"></em> las la-user-slash
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-video"></em> las la-video
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-video-slash"></em> las la-video-slash
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-volume-down"></em> las la-volume-down
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-volume-mute"></em> las la-volume-mute
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-volume-off"></em> las la-volume-off
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-volume-up"></em> las la-volume-up
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-wifi"></em> las la-wifi
                                            </div>
                                        </div>


                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Religion</h6>
                                        <div class="row">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-acquisitions-incorporated"></em> lab la-acquisitions-incorporated
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-book-dead"></em> las la-book-dead
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-critical-role"></em> lab la-critical-role
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-d-and-d"></em> lab la-d-and-d
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-d-and-d-beyond"></em> lab la-d-and-d-beyond
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dice-d20"></em> las la-dice-d20
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dice-d6"></em> las la-dice-d6
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dragon"></em> las la-dragon
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dungeon"></em> las la-dungeon
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-fantasy-flight-games"></em> lab la-fantasy-flight-games
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-fist-raised"></em> las la-fist-raised
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hat-wizard"></em> las la-hat-wizard
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-penny-arcade"></em> lab la-penny-arcade
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-ring"></em> las la-ring
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-scroll"></em> las la-scroll
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-skull-crossbones"></em> las la-skull-crossbones
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-wizards-of-the-coast"></em> lab la-wizards-of-the-coast
                                            </div>
                                        </div>

                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Travel</h6>
                                        <div class="row">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-archway"></em> las la-archway
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-atlas"></em> las la-atlas
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bed"></em> las la-bed
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bus"></em> las la-bus
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bus-alt"></em> las la-bus-alt
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cocktail"></em> las la-cocktail
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-concierge-bell"></em> las la-concierge-bell
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-dumbbell"></em> las la-dumbbell
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-glass-martini"></em> las la-glass-martini
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-glass-martini-alt"></em> las la-glass-martini-alt
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-globe-africa"></em> las la-globe-africa
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-globe-americas"></em> las la-globe-americas
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-globe-asia"></em> las la-globe-asia
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-globe-europe"></em> las la-globe-europe
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hot-tub"></em> las la-hot-tub
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hotel"></em> las la-hotel
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-luggage-cart"></em> las la-luggage-cart
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-map"></em> las la-map
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-map-marked"></em> las la-map-marked
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-map-marked-alt"></em> las la-map-marked-alt
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-monument"></em> las la-monument
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-passport"></em> las la-passport
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-plane"></em> las la-plane
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-plane-arrival"></em> las la-plane-arrival
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-plane-departure"></em> las la-plane-departure
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-shuttle-van"></em> las la-shuttle-van
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-spa"></em> las la-spa
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-suitcase"></em> las la-suitcase
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-suitcase-rolling"></em> las la-suitcase-rolling
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-swimmer"></em> las la-swimmer
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-swimming-pool"></em> las la-swimming-pool
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-taxi"></em> las la-taxi
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tram"></em> las la-tram
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tv"></em> las la-tv
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-umbrella-beach"></em> las la-umbrella-beach
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-wine-glass"></em> las la-wine-glass
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-wine-glass-alt"></em> las la-wine-glass-alt
                                            </div>
                                        </div>

                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Users & People</h6>
                                        <div class="row">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="lab la-accessible-icon"></em> lab la-accessible-icon
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-address-book"></em> las la-address-book
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-address-card"></em> las la-address-card
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-baby"></em> las la-baby
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bed"></em> las la-bed
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-biking"></em> las la-biking
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-blind"></em> las la-blind
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-chalkboard-teacher"></em> las la-chalkboard-teacher
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-child"></em> las la-child
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-female"></em> las la-female
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-frown"></em> las la-frown
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-hiking"></em> las la-hiking
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-id-badge"></em> las la-id-badge
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-id-card"></em> las la-id-card
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-id-card-alt"></em> las la-id-card-alt
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-male"></em> las la-male
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-meh"></em> las la-meh
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-people-carry"></em> las la-people-carry
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-person-booth"></em> las la-person-booth
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-poo"></em> las la-poo
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-portrait"></em> las la-portrait
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-power-off"></em> las la-power-off
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-pray"></em> las la-pray
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-restroom"></em> las la-restroom
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-running"></em> las la-running
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-skating"></em> las la-skating
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-skiing"></em> las la-skiing
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-skiing-nordic"></em> las la-skiing-nordic
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-smile"></em> las la-smile
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-snowboarding"></em> las la-snowboarding
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-street-view"></em> las la-street-view
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-swimmer"></em> las la-swimmer
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-user"></em> las la-user
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-user-alt"></em> las la-user-alt
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-user-alt-slash"></em> las la-user-alt-slash
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-user-astronaut"></em> las la-user-astronaut
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-user-check"></em> las la-user-check
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-user-circle"></em> las la-user-circle
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-user-clock"></em> las la-user-clock
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-user-cog"></em> las la-user-cog
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-user-edit"></em> las la-user-edit
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-user-friends"></em> las la-user-friends
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-user-graduate"></em> las la-user-graduate
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-user-injured"></em> las la-user-injured
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-user-lock"></em> las la-user-lock
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-user-md"></em> las la-user-md
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-user-minus"></em> las la-user-minus
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-user-ninja"></em> las la-user-ninja
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-user-nurse"></em> las la-user-nurse
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-user-plus"></em> las la-user-plus
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-user-secret"></em> las la-user-secret
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-user-shield"></em> las la-user-shield
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-user-slash"></em> las la-user-slash
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-user-tag"></em> las la-user-tag
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-user-tie"></em> las la-user-tie
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-user-times"></em> las la-user-times
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-users"></em> las la-users
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-users-cog"></em> las la-users-cog
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-walking"></em> las la-walking
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-wheelchair"></em> las la-wheelchair
                                            </div>  
                                        </div>

                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Weather</h6>
                                        <div class="row">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-bolt"></em> las la-bolt
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cloud"></em> las la-cloud
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cloud-meatball"></em> las la-cloud-meatball
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cloud-moon"></em> las la-cloud-moon
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cloud-moon-rain"></em> las la-cloud-moon-rain
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cloud-rain"></em> las la-cloud-rain
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cloud-showers-heavy"></em> las la-cloud-showers-heavy
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cloud-sun"></em> las la-cloud-sun
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-cloud-sun-rain"></em> las la-cloud-sun-rain
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-meteor"></em> las la-meteor
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-moon"></em> las la-moon
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-poo-storm"></em> las la-poo-storm
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-rainbow"></em> las la-rainbow
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-smog"></em> las la-smog
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-snowflake"></em> las la-snowflake
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-sun"></em> las la-sun
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-temperature-high"></em> las la-temperature-high
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-temperature-low"></em> las la-temperature-low
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-umbrella"></em> las la-umbrella
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-water"></em> las la-water
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-wind"></em> las la-wind
                                            </div>
                                        </div>


                                        <h6 class="text-uppercase text-muted fw-semibold mt-4">Winter</h6>
                                        <div class="row">
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-glass-whiskey"></em> las la-glass-whiskey
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-icicles"></em> las la-icicles
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-igloo"></em> las la-igloo
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-mitten"></em> las la-mitten
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-skating"></em> las la-skating
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-skiing"></em> las la-skiing
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-skiing-nordic"></em> las la-skiing-nordic
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-snowboarding"></em> las la-snowboarding
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-snowplow"></em> las la-snowplow
                                            </div>    
                                            <div class="col-xl-3 col-lg-4 col-sm-6">
                                                <em class="las la-tram"></em> las la-tram
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- end row -->
    </Layout>
</template>
