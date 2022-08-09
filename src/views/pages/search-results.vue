<script>
import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'

SwiperCore.use([])

import Layout from '../../layouts/main.vue'
import PageHeader from '@/components/page-header'
import appConfig from '../../../app.config'

export default {
  page: {
    title: 'Search Results',
    meta: [{ name: 'description', content: appConfig.description }]
  },
  data() {
    return {
      title: 'Search Results',
      items: [
        {
          text: 'Pages',
          href: '/'
        },
        {
          text: 'Search Results',
          active: true
        }
      ]
    }
  },
  components: {
    Layout,
    PageHeader,
    Swiper,
    SwiperSlide
  }
}
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header border-0">
            <div class="row justify-content-center mb-4">
              <div class="col-lg-6">
                <div class="row g-2">
                  <div class="col">
                    <div class="position-relative mb-3">
                      <input type="text" class="form-control form-control-lg bg-light border-light"
                        placeholder="Search here.." value="Admin Dashboard" />
                      <a class="btn btn-link link-success btn-lg position-absolute end-0 top-0 shadow-none"
                        data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                        aria-controls="offcanvasExample"><em class="ri-mic-fill"></em></a>
                    </div>
                  </div>
                  <div class="col-auto">
                    <button type="submit" class="btn btn-primary btn-lg waves-effect waves-light">
                      <em class="mdi mdi-magnify me-1"></em> Search
                    </button>
                  </div>
                </div>
              </div>
              <!--end col-->
              <div class="col-lg-12">
                <h5 class="fs-16 fw-semibold text-center mb-0">
                  Showing results for "<span class="text-primary fw-medium fst-italic">Admin Dashboard</span>
                  "
                </h5>
              </div>
            </div>
            <!--end row-->

            <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel">
              <div class="offcanvas-body">
                <button type="button" class="btn-close text-reset float-end" data-bs-dismiss="offcanvas"
                  aria-label="Close"></button>
                <div class="d-flex flex-column h-100 justify-content-center align-items-center">
                  <div class="search-voice">
                    <em class="ri-mic-fill align-middle"></em>
                    <span class="voice-wave"></span>
                    <span class="voice-wave"></span>
                    <span class="voice-wave"></span>
                  </div>
                  <h4>Talk to me, what can I do for you?</h4>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ul class="nav nav-tabs nav-tabs-custom" role="tablist">
              <li class="nav-item">
                <a class="nav-link active" data-bs-toggle="tab" href="#all" role="tab" aria-selected="false">
                  <em class="ri-search-2-line text-muted align-bottom me-1"></em>
                  All Results
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" id="images-tab" href="#images" role="tab" aria-selected="true">
                  <em class="ri-image-fill text-muted align-bottom me-1"></em>
                  Images
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#news" role="tab" aria-selected="false">
                  <em class="ri-list-unordered text-muted align-bottom me-1"></em>
                  News
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#video" role="tab" aria-selected="false">
                  <em class="ri-video-line text-muted align-bottom me-1"></em>
                  Videos
                </a>
              </li>
              <li class="nav-item ms-auto">
                <div class="dropdown">
                  <a class="nav-link fw-medium text-reset mb-n1" href="#" role="button" id="dropdownMenuLink1"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <em class="ri-settings-4-line align-middle me-1"></em>
                    Settings
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink1">
                    <li>
                      <a class="dropdown-item" href="#">Search Settings</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Advanced Search</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Search History</a>
                    </li>
                    <li><a class="dropdown-item" href="#">Search Help</a></li>
                    <div class="dropdown-divider"></div>
                    <li><a class="dropdown-item" href="#">Dark Mode:Off</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div class="card-body p-4">
            <div class="tab-content text-muted">
              <div class="tab-pane active" id="all" role="tabpanel">
                <div class="pb-3">
                  <h5 class="mb-1">
                    <a href="javascript:void(0);">MedicFollow - Responsive Bootstrap 5 Admin Dashboard</a>
                  </h5>
                  <p class="text-success mb-2">
                    https://themesbrand.com/velzon/index.html
                  </p>
                  <p class="text-muted mb-2">
                    MedicFollow admin is super flexible, powerful, clean, modern
                    & responsive admin template based on
                    <span class="fw-semibold">bootstrap 5</span> stable with
                    unlimited possibilities. You can simply change to any layout
                    or mode by changing a couple of lines of code. You can start
                    small and large projects or update design in your existing
                    project using MedicFollow it is very quick and easy as it is
                    beautiful, adroit, and delivers the ultimate user
                    experience.
                  </p>
                  <ul class="list-inline d-flex align-items-center g-3 text-muted fs-14 mb-0">
                    <li class="list-inline-item me-3">
                      <em class="ri-thumb-up-line align-middle me-1"></em>10
                    </li>
                    <li class="list-inline-item me-3">
                      <em class="ri-question-answer-line align-middle me-1"></em>8
                    </li>
                    <li class="list-inline-item">
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                          <em class="ri-user-line"></em>
                        </div>
                        <div class="flex-grow-1 fs-13 ms-1">
                          <span class="fw-medium">MedicFollow</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div class="border border-dashed"></div>

                <div class="py-3">
                  <h5 class="fs-13 mb-3 text-muted fst-italic">
                    Showing results Images
                  </h5>
                  <div class="row">
                    <div class="col-xl-4 col-lg-10">
                      <div class="row g-2">
                        <div class="col-md-3 col-sm-6">
                          <div>
                            <a class="image-popup d-block">
                              <img src="@/assets/images/small/img-1.jpg" alt="" class="img-fluid d-block rounded" />
                            </a>
                          </div>
                        </div>
                        <!--end col-->
                        <div class="col-md-3 col-sm-6">
                          <div>
                            <a class="image-popup d-block">
                              <img src="@/assets/images/small/img-3.jpg" alt="" class="img-fluid d-block rounded" />
                            </a>
                          </div>
                        </div>
                        <!--end col-->
                        <div class="col-md-3 col-sm-6">
                          <div>
                            <a class="image-popup d-block">
                              <img src="@/assets/images/small/img-4.jpg" alt="" class="img-fluid d-block rounded" />
                            </a>
                          </div>
                        </div>
                        <!--end col-->
                        <div class="col-md-3 col-sm-6">
                          <div class="search-more-results rounded">
                            <a href="javascript:void(0);" onclick="myFunction()" class="d-block">
                              <img src="@/assets/images/small/img-5.jpg" alt="" class="img-fluid d-block rounded" />

                              <div class="bg-overlay"></div>
                              <div class="nav-icon">
                                <em class="ri-image-fill align-middle me-1"></em>
                                99+
                              </div>
                            </a>
                          </div>
                        </div>
                        <!--end col-->
                      </div>
                      <!--end row-->
                    </div>
                    <!--end col-->
                  </div>
                  <!--end row-->
                </div>

                <div class="border border-dashed"></div>

                <div class="py-3">
                  <h5 class="mb-1">
                    <a href="javascript:void(0);">Skote - Admin & Dashboard Template by MedicFollow</a>
                  </h5>
                  <p class="text-success mb-2">
                    https://themesbrand.com/skote/
                  </p>
                  <p class="text-muted mb-2">
                    Skote is an admin dashboard template that is a beautifully
                    crafted, clean & minimal designed admin template with Dark,
                    Light Layouts with RTL options. You can build any type of
                    web application like Saas based interface, eCommerce,
                    Crypto, CRM, CMS, Project management apps, Admin Panels,
                    etc.
                  </p>
                  <ul class="list-inline d-flex align-items-center g-3 text-muted fs-14 mb-0">
                    <li class="list-inline-item me-3">
                      <em class="ri-thumb-up-line align-middle me-1"></em>485
                    </li>
                    <li class="list-inline-item me-3">
                      <em class="ri-question-answer-line align-middle me-1"></em>167
                    </li>
                    <li class="list-inline-item">
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                          <em class="ri-user-line"></em>
                        </div>
                        <div class="flex-grow-1 fs-13 ms-1">
                          <span class="fw-medium">MedicFollow</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div class="border border-dashed"></div>

                <div class="py-3">
                  <h5 class="mb-1">
                    <a href="javascript:void(0);">Minia - React Js Admin & Dashboard Template</a>
                  </h5>
                  <p class="text-success mb-2">
                    https://themesbrand.com/minia/react/
                  </p>
                  <p class="text-muted mb-2">
                    Minia react is a simple and beautiful admin template built
                    with Bootstrap ^5.1.3. It has
                    <span class="fw-semibold">5+ different layouts and 3 modes</span>
                    ( Dark, Light & RTL ) which are managed by SCSS only. You
                    can simply change to any layouts or mode by changing a
                    couple of lines code.
                  </p>
                  <ul class="list-inline d-flex align-items-center g-3 text-muted fs-14 mb-0">
                    <li class="list-inline-item me-3">
                      <em class="ri-thumb-up-line align-middle me-1"></em>69
                    </li>
                    <li class="list-inline-item me-3">
                      <em class="ri-question-answer-line align-middle me-1"></em>43
                    </li>
                    <li class="list-inline-item">
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                          <em class="ri-user-line"></em>
                        </div>
                        <div class="flex-grow-1 fs-13 ms-1">
                          <span class="fw-medium">MedicFollow</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div class="border border-dashed"></div>

                <div class="py-3">
                  <h5 class="mb-1">
                    <a href="javascript:void(0);">Doson - Angular Admin & Dashboard Template by
                      MedicFollow</a>
                  </h5>
                  <p class="text-success mb-2">
                    https://themesbrand.com/dason/angular/
                  </p>
                  <p class="text-muted mb-2">
                    Dason is a simple and beautiful admin template built with
                    Bootstrap ^5.1.3. It has 5+ different layouts and 3 modes (
                    Dark, Light & RTL ) which are managed by SCSS only. You can
                    simply change to any layouts or mode by changing a couple of
                    lines code.
                  </p>
                  <ul class="list-inline d-flex align-items-center g-3 text-muted fs-14 mb-0">
                    <li class="list-inline-item me-3">
                      <em class="ri-thumb-up-line align-middle me-1"></em>102
                    </li>
                    <li class="list-inline-item me-3">
                      <em class="ri-question-answer-line align-middle me-1"></em>36
                    </li>
                    <li class="list-inline-item">
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                          <em class="ri-user-line"></em>
                        </div>
                        <div class="flex-grow-1 fs-13 ms-1">
                          <span class="fw-medium">MedicFollow</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <ul class="pagination pagination-separated justify-content-center mb-0">
                    <li class="page-item disabled">
                      <a href="javascript:void(0);" class="page-link"><em class="mdi mdi-chevron-left"></em></a>
                    </li>
                    <li class="page-item active">
                      <a href="javascript:void(0);" class="page-link">1</a>
                    </li>
                    <li class="page-item">
                      <a href="javascript:void(0);" class="page-link">2</a>
                    </li>
                    <li class="page-item">
                      <a href="javascript:void(0);" class="page-link">3</a>
                    </li>
                    <li class="page-item">
                      <a href="javascript:void(0);" class="page-link">4</a>
                    </li>
                    <li class="page-item">
                      <a href="javascript:void(0);" class="page-link">5</a>
                    </li>
                    <li class="page-item">
                      <a href="javascript:void(0);" class="page-link"><em class="mdi mdi-chevron-right"></em></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="tab-pane" id="images" role="tabpanel">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="images-menu mb-3">
                      <swiper :slidesPerView="'auto'" :spaceBetween="10" :pagination="{
                        el: '.swiper-pagination',
                        clickable: true
                      }">
                        <swiper-slide>
                          <div class="swiper-slide">
                            <div class="d-flex align-items-center border border-dashed rounded p-2">
                              <div class="flex-shrink-0">
                                <img src="@/assets/images/small/img-9.jpg" alt="" width="65" class="rounded" />
                              </div>
                              <div class="flex-grow-1 ms-2">
                                <a href="javascript:void(0);" class="stretched-link fw-medium">Bootstrap</a>
                              </div>
                            </div>
                          </div>
                        </swiper-slide>
                        <swiper-slide>
                          <div class="swiper-slide">
                            <div class="d-flex align-items-center border border-dashed rounded p-2">
                              <div class="flex-shrink-0">
                                <img src="@/assets/images/small/img-9.jpg" alt="" width="65" class="rounded" />
                              </div>
                              <div class="flex-grow-1 ms-2">
                                <a href="javascript:void(0);" class="stretched-link fw-medium">Website</a>
                              </div>
                            </div>
                          </div>
                        </swiper-slide>
                        <swiper-slide>
                          <div class="swiper-slide">
                            <div class="d-flex align-items-center border border-dashed rounded p-2">
                              <div class="flex-shrink-0">
                                <img src="@/assets/images/small/img-9.jpg" alt="" width="65" class="rounded" />
                              </div>
                              <div class="flex-grow-1 ms-2">
                                <a href="javascript:void(0);" class="stretched-link fw-medium">Responsive</a>
                              </div>
                            </div>
                          </div>
                        </swiper-slide>
                        <swiper-slide>
                          <div class="swiper-slide">
                            <div class="d-flex align-items-center border border-dashed rounded p-2">
                              <div class="flex-shrink-0">
                                <img src="@/assets/images/small/img-9.jpg" alt="" width="65" class="rounded" />
                              </div>
                              <div class="flex-grow-1 ms-2">
                                <a href="javascript:void(0);" class="stretched-link fw-medium">Design</a>
                              </div>
                            </div>
                          </div>
                        </swiper-slide>
                        <swiper-slide>
                          <div class="swiper-slide">
                            <div class="d-flex align-items-center border border-dashed rounded p-2">
                              <div class="flex-shrink-0">
                                <img src="@/assets/images/small/img-8.jpg" alt="" width="65" class="rounded" />
                              </div>
                              <div class="flex-grow-1 ms-2">
                                <a href="javascript:void(0);" class="stretched-link fw-medium">eCommerce</a>
                              </div>
                            </div>
                          </div>
                        </swiper-slide>
                        <swiper-slide>
                          <div class="swiper-slide">
                            <div class="d-flex align-items-center border border-dashed rounded p-2">
                              <div class="flex-shrink-0">
                                <img src="@/assets/images/small/img-7.jpg" alt="" width="65" class="rounded" />
                              </div>
                              <div class="flex-grow-1 ms-2">
                                <a href="javascript:void(0);" class="stretched-link fw-medium">Templates</a>
                              </div>
                            </div>
                          </div>
                        </swiper-slide>
                        <swiper-slide>
                          <div class="swiper-slide">
                            <div class="d-flex align-items-center border border-dashed rounded p-2">
                              <div class="flex-shrink-0">
                                <img src="@/assets/images/small/img-6.jpg" alt="" width="65" class="rounded" />
                              </div>
                              <div class="flex-grow-1 ms-2">
                                <a href="javascript:void(0);" class="stretched-link fw-medium">Admin Panal</a>
                              </div>
                            </div>
                          </div>
                        </swiper-slide>
                        <swiper-slide>
                          <div class="swiper-slide">
                            <div class="d-flex align-items-center border border-dashed rounded p-2">
                              <div class="flex-shrink-0">
                                <img src="@/assets/images/small/img-5.jpg" alt="" width="65" class="rounded" />
                              </div>
                              <div class="flex-grow-1 ms-2">
                                <a href="javascript:void(0);" class="stretched-link fw-medium">Simple</a>
                              </div>
                            </div>
                          </div>
                        </swiper-slide>
                        <swiper-slide>
                          <div class="swiper-slide">
                            <div class="d-flex align-items-center border border-dashed rounded p-2">
                              <div class="flex-shrink-0">
                                <img src="@/assets/images/small/img-3.jpg" alt="" width="65" class="rounded" />
                              </div>
                              <div class="flex-grow-1 ms-2">
                                <a href="javascript:void(0);" class="stretched-link fw-medium">Dark</a>
                              </div>
                            </div>
                          </div>
                        </swiper-slide>
                      </swiper>
                    </div>
                  </div>
                </div>
                <div class="gallery-light">
                  <div class="row">
                    <div class="col-xl-3 col-lg-4 col-sm-6">
                      <div class="gallery-box card">
                        <div class="gallery-container">
                          <a class="image-popup" href="assets/images/small/img-1.jpg" title="">
                            <img class="gallery-img img-fluid mx-auto" src="@/assets/images/small/img-1.jpg" alt="" />
                            <div class="gallery-overlay">
                              <h5 class="overlay-caption">
                                Glasses and laptop from above
                              </h5>
                            </div>
                          </a>
                        </div>
                        <div class="box-content">
                          <div class="d-flex align-items-center mt-2">
                            <div class="flex-grow-1 text-muted">
                              by
                              <a href="" class="text-body text-truncate">Ron Mackie</a>
                            </div>
                            <div class="flex-shrink-0">
                              <div class="d-flex gap-3">
                                <button type="button"
                                  class="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                  <em class="ri-thumb-up-fill text-muted align-bottom me-1"></em>
                                  2.2K
                                </button>
                                <button type="button"
                                  class="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                  <em class="ri-question-answer-fill text-muted align-bottom me-1"></em>
                                  1.3K
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--end col-->
                    <div class="col-xl-3 col-lg-4 col-sm-6">
                      <div class="gallery-box card">
                        <div class="gallery-container">
                          <a class="image-popup" href="assets/images/small/img-2.jpg" title="">
                            <img class="gallery-img img-fluid mx-auto" src="@/assets/images/small/img-2.jpg" alt="" />
                            <div class="gallery-overlay">
                              <h5 class="overlay-caption">
                                Working at a coffee shop
                              </h5>
                            </div>
                          </a>
                        </div>
                        <div class="box-content">
                          <div class="d-flex align-items-center mt-2">
                            <div class="flex-grow-1 text-muted">
                              by
                              <a href="" class="text-body text-truncate">Nancy Martino</a>
                            </div>
                            <div class="flex-shrink-0">
                              <div class="d-flex gap-3">
                                <button type="button"
                                  class="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                  <em class="ri-thumb-up-fill text-muted align-bottom me-1"></em>
                                  2.2K
                                </button>
                                <button type="button"
                                  class="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                  <em class="ri-question-answer-fill text-muted align-bottom me-1"></em>
                                  1.3K
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--end col-->
                    <div class="col-xl-3 col-lg-4 col-sm-6">
                      <div class="gallery-box card">
                        <div class="gallery-container">
                          <a class="image-popup" href="assets/images/small/img-3.jpg" title="">
                            <img class="gallery-img img-fluid mx-auto" src="@/assets/images/small/img-3.jpg" alt="" />
                            <div class="gallery-overlay">
                              <h5 class="overlay-caption">
                                Photo was taken in Beach
                              </h5>
                            </div>
                          </a>
                        </div>
                        <div class="box-content">
                          <div class="d-flex align-items-center mt-2">
                            <div class="flex-grow-1 text-muted">
                              by
                              <a href="" class="text-body text-truncate">Elwood Arter</a>
                            </div>
                            <div class="flex-shrink-0">
                              <div class="d-flex gap-3">
                                <button type="button"
                                  class="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                  <em class="ri-thumb-up-fill text-muted align-bottom me-1"></em>
                                  2.2K
                                </button>
                                <button type="button"
                                  class="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                  <em class="ri-question-answer-fill text-muted align-bottom me-1"></em>
                                  1.3K
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--end col-->
                    <div class="col-xl-3 col-lg-4 col-sm-6">
                      <div class="gallery-box card">
                        <div class="gallery-container">
                          <a class="image-popup" href="assets/images/small/img-4.jpg" title="">
                            <img class="gallery-img img-fluid mx-auto" src="@/assets/images/small/img-4.jpg" alt="" />
                            <div class="gallery-overlay">
                              <h5 class="overlay-caption">Drawing a sketch</h5>
                            </div>
                          </a>
                        </div>
                        <div class="box-content">
                          <div class="d-flex align-items-center mt-2">
                            <div class="flex-grow-1 text-muted">
                              by
                              <a href="" class="text-body text-truncate">Jason McQuaid</a>
                            </div>
                            <div class="flex-shrink-0">
                              <div class="d-flex gap-3">
                                <button type="button"
                                  class="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                  <em class="ri-thumb-up-fill text-muted align-bottom me-1"></em>
                                  2.2K
                                </button>
                                <button type="button"
                                  class="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                  <em class="ri-question-answer-fill text-muted align-bottom me-1"></em>
                                  1.3K
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--end col-->
                    <div class="col-xl-3 col-lg-4 col-sm-6">
                      <div class="gallery-box card">
                        <div class="gallery-container">
                          <a class="image-popup" href="assets/images/small/img-5.jpg" title="">
                            <img class="gallery-img img-fluid mx-auto" src="@/assets/images/small/img-5.jpg" alt="" />
                            <div class="gallery-overlay">
                              <h5 class="overlay-caption">
                                Working from home little spot
                              </h5>
                            </div>
                          </a>
                        </div>
                        <div class="box-content">
                          <div class="d-flex align-items-center mt-2">
                            <div class="flex-grow-1 text-muted">
                              by
                              <a href="" class="text-body text-truncate">Henry Baird</a>
                            </div>
                            <div class="flex-shrink-0">
                              <div class="d-flex gap-3">
                                <button type="button"
                                  class="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                  <em class="ri-thumb-up-fill text-muted align-bottom me-1"></em>
                                  2.2K
                                </button>
                                <button type="button"
                                  class="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                  <em class="ri-question-answer-fill text-muted align-bottom me-1"></em>
                                  1.3K
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--end col-->
                    <div class="col-xl-3 col-lg-4 col-sm-6">
                      <div class="gallery-box card">
                        <div class="gallery-container">
                          <a class="image-popup" href="assets/images/small/img-6.jpg" title="">
                            <img class="gallery-img img-fluid mx-auto" src="@/assets/images/small/img-6.jpg" alt="" />
                            <div class="gallery-overlay">
                              <h5 class="overlay-caption">
                                Project discussion with team
                              </h5>
                            </div>
                          </a>
                        </div>
                        <div class="box-content">
                          <div class="d-flex align-items-center mt-2">
                            <div class="flex-grow-1 text-muted">
                              by
                              <a href="" class="text-body text-truncate">Erica Kernan</a>
                            </div>
                            <div class="flex-shrink-0">
                              <div class="d-flex gap-3">
                                <button type="button"
                                  class="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                  <em class="ri-thumb-up-fill text-muted align-bottom me-1"></em>
                                  2.2K
                                </button>
                                <button type="button"
                                  class="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                  <em class="ri-question-answer-fill text-muted align-bottom me-1"></em>
                                  1.3K
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--end col-->
                    <div class="col-xl-3 col-lg-4 col-sm-6">
                      <div class="gallery-box card">
                        <div class="gallery-container">
                          <a class="image-popup" href="assets/images/small/img-7.jpg" title="">
                            <img class="gallery-img img-fluid mx-auto" src="@/assets/images/small/img-7.jpg" alt="" />
                            <div class="gallery-overlay">
                              <h5 class="overlay-caption">
                                Sunrise above a beach
                              </h5>
                            </div>
                          </a>
                        </div>
                        <div class="box-content">
                          <div class="d-flex align-items-center mt-2">
                            <div class="flex-grow-1 text-muted">
                              by
                              <a href="" class="text-body text-truncate">James Ballard</a>
                            </div>
                            <div class="flex-shrink-0">
                              <div class="d-flex gap-3">
                                <button type="button"
                                  class="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                  <em class="ri-thumb-up-fill text-muted align-bottom me-1"></em>
                                  2.2K
                                </button>
                                <button type="button"
                                  class="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                  <em class="ri-question-answer-fill text-muted align-bottom me-1"></em>
                                  1.3K
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--end col-->
                    <div class="col-xl-3 col-lg-4 col-sm-6">
                      <div class="gallery-box card">
                        <div class="gallery-container">
                          <a class="image-popup" href="assets/images/small/img-8.jpg" title="">
                            <img class="gallery-img img-fluid mx-auto" src="@/assets/images/small/img-8.jpg" alt="" />
                            <div class="gallery-overlay">
                              <h5 class="overlay-caption">
                                Glasses and laptop from above
                              </h5>
                            </div>
                          </a>
                        </div>
                        <div class="box-content">
                          <div class="d-flex align-items-center mt-2">
                            <div class="flex-grow-1 text-muted">
                              by
                              <a href="" class="text-body text-truncate">Ruby Griffin</a>
                            </div>
                            <div class="flex-shrink-0">
                              <div class="d-flex gap-3">
                                <button type="button"
                                  class="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                  <em class="ri-thumb-up-fill text-muted align-bottom me-1"></em>
                                  2.2K
                                </button>
                                <button type="button"
                                  class="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                  <em class="ri-question-answer-fill text-muted align-bottom me-1"></em>
                                  1.3K
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--end col-->
                    <div class="col-xl-3 col-lg-4 col-sm-6">
                      <div class="gallery-box card">
                        <div class="gallery-container">
                          <a class="image-popup" href="assets/images/small/img-9.jpg" title="">
                            <img class="gallery-img img-fluid mx-auto" src="@/assets/images/small/img-9.jpg" alt="" />
                            <div class="gallery-overlay">
                              <h5 class="overlay-caption">
                                Dramatic clouds at the Golden Gate Bridge
                              </h5>
                            </div>
                          </a>
                        </div>
                        <div class="box-content">
                          <div class="d-flex align-items-center mt-2">
                            <div class="flex-grow-1 text-muted">
                              by
                              <a href="" class="text-body text-truncate">Ron Mackie</a>
                            </div>
                            <div class="flex-shrink-0">
                              <div class="d-flex gap-3">
                                <button type="button"
                                  class="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                  <em class="ri-thumb-up-fill text-muted align-bottom me-1"></em>
                                  2.2K
                                </button>
                                <button type="button"
                                  class="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                  <em class="ri-question-answer-fill text-muted align-bottom me-1"></em>
                                  1.3K
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--end col-->
                    <div class="col-xl-3 col-lg-4 col-sm-6">
                      <div class="gallery-box card">
                        <div class="gallery-container">
                          <a class="image-popup" href="assets/images/small/img-9.jpg" title="">
                            <img class="gallery-img img-fluid mx-auto" src="@/assets/images/small/img-9.jpg" alt="" />
                            <div class="gallery-overlay">
                              <h5 class="overlay-caption">
                                Fun day at the Hill Station
                              </h5>
                            </div>
                          </a>
                        </div>
                        <div class="box-content">
                          <div class="d-flex align-items-center mt-2">
                            <div class="flex-grow-1 text-muted">
                              by
                              <a href="" class="text-body text-truncate">Henry Baird</a>
                            </div>
                            <div class="flex-shrink-0">
                              <div class="d-flex gap-3">
                                <button type="button"
                                  class="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                  <em class="ri-thumb-up-fill text-muted align-bottom me-1"></em>
                                  2.2K
                                </button>
                                <button type="button"
                                  class="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                  <em class="ri-question-answer-fill text-muted align-bottom me-1"></em>
                                  1.3K
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--end col-->
                    <div class="col-xl-3 col-lg-4 col-sm-6">
                      <div class="gallery-box card">
                        <div class="gallery-container">
                          <a class="image-popup" href="assets/images/small/img-9.jpg" title="">
                            <img class="gallery-img img-fluid mx-auto" src="@/assets/images/small/img-9.jpg" alt="" />
                            <div class="gallery-overlay">
                              <h5 class="overlay-caption">
                                Cycling in the countryside
                              </h5>
                            </div>
                          </a>
                        </div>
                        <div class="box-content">
                          <div class="d-flex align-items-center mt-2">
                            <div class="flex-grow-1 text-muted">
                              by
                              <a href="" class="text-body text-truncate">Nancy Martino</a>
                            </div>
                            <div class="flex-shrink-0">
                              <div class="d-flex gap-3">
                                <button type="button"
                                  class="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                  <em class="ri-thumb-up-fill text-muted align-bottom me-1"></em>
                                  2.2K
                                </button>
                                <button type="button"
                                  class="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                  <em class="ri-question-answer-fill text-muted align-bottom me-1"></em>
                                  1.3K
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--end col-->
                    <div class="col-xl-3 col-lg-4 col-sm-6">
                      <div class="gallery-box card">
                        <div class="gallery-container">
                          <a class="image-popup" href="assets/images/small/img-9.jpg" title="">
                            <img class="gallery-img img-fluid mx-auto" src="@/assets/images/small/img-9.jpg" alt="" />
                            <div class="gallery-overlay">
                              <h5 class="overlay-caption">
                                A mix of friends and strangers heading off to
                                find an adventure.
                              </h5>
                            </div>
                          </a>
                        </div>
                        <div class="box-content">
                          <div class="d-flex align-items-center mt-2">
                            <div class="flex-grow-1 text-muted">
                              by
                              <a href="" class="text-body text-truncate">Erica Kernan</a>
                            </div>
                            <div class="flex-shrink-0">
                              <div class="d-flex gap-3">
                                <button type="button"
                                  class="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                  <em class="ri-thumb-up-fill text-muted align-bottom me-1"></em>
                                  2.2K
                                </button>
                                <button type="button"
                                  class="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                  <em class="ri-question-answer-fill text-muted align-bottom me-1"></em>
                                  1.3K
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--end col-->
                  </div>
                  <!--end row-->
                  <div class="mt-4">
                    <ul class="pagination pagination-separated justify-content-center mb-0">
                      <li class="page-item disabled">
                        <a href="javascript:void(0);" class="page-link"><em class="mdi mdi-chevron-left"></em></a>
                      </li>
                      <li class="page-item active">
                        <a href="javascript:void(0);" class="page-link">1</a>
                      </li>
                      <li class="page-item">
                        <a href="javascript:void(0);" class="page-link">2</a>
                      </li>
                      <li class="page-item">
                        <a href="javascript:void(0);" class="page-link">3</a>
                      </li>
                      <li class="page-item">
                        <a href="javascript:void(0);" class="page-link">4</a>
                      </li>
                      <li class="page-item">
                        <a href="javascript:void(0);" class="page-link">5</a>
                      </li>
                      <li class="page-item">
                        <a href="javascript:void(0);" class="page-link"><em class="mdi mdi-chevron-right"></em></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <!--end tab-pane-->
              <div class="tab-pane" id="news" role="tabpanel">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="card border">
                      <div class="card-body">
                        <div class="d-sm-flex">
                          <div class="flex-shrink-0">
                            <img src="@/assets/images/small/img-1.jpg" alt="" width="115" class="rounded-1" />
                          </div>
                          <div class="flex-grow-1 ms-sm-4 mt-3 mt-sm-0">
                            <ul class="list-inline mb-2">
                              <li class="list-inline-item">
                                <span class="badge badge-soft-success fs-11">Business</span>
                              </li>
                            </ul>
                            <h5>
                              <a href="javascript:void(0);">A mix of friends and strangers heading off to
                                find an adventure</a>
                            </h5>
                            <ul class="list-inline mb-0">
                              <li class="list-inline-item">
                                <em class="ri-user-3-fill text-success align-middle me-1"></em>
                                James Ballard
                              </li>
                              <li class="list-inline-item">
                                <em class="ri-calendar-2-fill text-success align-middle me-1"></em>
                                23 Nov, 2021
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--end card-->
                  </div>
                  <!--end col-->

                  <div class="col-lg-6">
                    <div class="card border">
                      <div class="card-body">
                        <div class="d-sm-flex">
                          <div class="flex-shrink-0">
                            <img src="@/assets/images/small/img-2.jpg" alt="" width="115" class="rounded-1" />
                          </div>
                          <div class="flex-grow-1 ms-sm-4 mt-3 mt-sm-0">
                            <ul class="list-inline mb-2">
                              <li class="list-inline-item">
                                <span class="badge badge-soft-warning fs-11">Development</span>
                              </li>
                            </ul>
                            <h5>
                              <a href="javascript:void(0);">How to get creative in your work ?</a>
                            </h5>
                            <ul class="list-inline mb-0">
                              <li class="list-inline-item">
                                <em class="ri-user-3-fill text-success align-middle me-1"></em>
                                Ruby Griffin
                              </li>
                              <li class="list-inline-item">
                                <em class="ri-calendar-2-fill text-success align-middle me-1"></em>
                                23 Nov, 2021
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--end card-->
                  </div>
                  <!--end col-->

                  <div class="col-lg-6">
                    <div class="card border">
                      <div class="card-body">
                        <div class="d-sm-flex">
                          <div class="flex-shrink-0">
                            <img src="@/assets/images/small/img-3.jpg" alt="" width="115" class="rounded-1" />
                          </div>
                          <div class="flex-grow-1 ms-sm-4 mt-3 mt-sm-0">
                            <ul class="list-inline mb-2">
                              <li class="list-inline-item">
                                <span class="badge badge-soft-info fs-11">Fashion</span>
                              </li>
                            </ul>
                            <h5>
                              <a href="javascript:void(0);">How to become a best sale marketer in a
                                year!</a>
                            </h5>
                            <ul class="list-inline mb-0">
                              <li class="list-inline-item">
                                <em class="ri-user-3-fill text-success align-middle me-1"></em>
                                Elwood Arter
                              </li>
                              <li class="list-inline-item">
                                <em class="ri-calendar-2-fill text-success align-middle me-1"></em>
                                23 Nov, 2021
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--end card-->
                  </div>
                  <!--end col-->

                  <div class="col-lg-6">
                    <div class="card border">
                      <div class="card-body">
                        <div class="d-sm-flex">
                          <div class="flex-shrink-0">
                            <img src="@/assets/images/small/img-4.jpg" alt="" width="115" class="rounded-1" />
                          </div>
                          <div class="flex-grow-1 ms-sm-4 mt-3 mt-sm-0">
                            <ul class="list-inline mb-2">
                              <li class="list-inline-item">
                                <span class="badge badge-soft-primary fs-11">Product</span>
                              </li>
                            </ul>
                            <h5>
                              <a href="javascript:void(0);">Manage white space in responsive layouts ?</a>
                            </h5>
                            <ul class="list-inline mb-0">
                              <li class="list-inline-item">
                                <em class="ri-user-3-fill text-success align-middle me-1"></em>
                                Nancy Martino
                              </li>
                              <li class="list-inline-item">
                                <em class="ri-calendar-2-fill text-success align-middle me-1"></em>
                                23 Nov, 2021
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--end card-->
                  </div>
                  <!--end col-->

                  <div class="col-lg-6">
                    <div class="card border">
                      <div class="card-body">
                        <div class="d-sm-flex">
                          <div class="flex-shrink-0">
                            <img src="@/assets/images/small/img-5.jpg" alt="" width="115" class="rounded-1" />
                          </div>
                          <div class="flex-grow-1 ms-sm-4 mt-3 mt-sm-0">
                            <ul class="list-inline mb-2">
                              <li class="list-inline-item">
                                <span class="badge badge-soft-success fs-11">Business</span>
                              </li>
                            </ul>
                            <h5>
                              <a href="javascript:void(0);">Stack designer Olivia Murphy offers freelancing
                                advice</a>
                            </h5>
                            <ul class="list-inline mb-0">
                              <li class="list-inline-item">
                                <em class="ri-user-3-fill text-success align-middle me-1"></em>
                                Erica Kernan
                              </li>
                              <li class="list-inline-item">
                                <em class="ri-calendar-2-fill text-success align-middle me-1"></em>
                                11 Nov, 2021
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--end card-->
                  </div>
                  <!--end col-->

                  <div class="col-lg-6">
                    <div class="card border">
                      <div class="card-body">
                        <div class="d-sm-flex">
                          <div class="flex-shrink-0">
                            <img src="@/assets/images/small/img-6.jpg" alt="" width="115" class="rounded-1" />
                          </div>
                          <div class="flex-grow-1 ms-sm-4 mt-3 mt-sm-0">
                            <ul class="list-inline mb-2">
                              <li class="list-inline-item">
                                <span class="badge badge-soft-danger fs-11">Design</span>
                              </li>
                            </ul>
                            <h5>
                              <a href="javascript:void(0);">A day in the of a professional fashion
                                designer</a>
                            </h5>
                            <ul class="list-inline mb-0">
                              <li class="list-inline-item">
                                <em class="ri-user-3-fill text-success align-middle me-1"></em>
                                Jason McQuaid
                              </li>
                              <li class="list-inline-item">
                                <em class="ri-calendar-2-fill text-success align-middle me-1"></em>
                                14 Nov, 2021
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--end card-->
                  </div>
                  <!--end col-->

                  <div class="col-lg-6">
                    <div class="card border">
                      <div class="card-body">
                        <div class="d-sm-flex">
                          <div class="flex-shrink-0">
                            <img src="@/assets/images/small/img-7.jpg" alt="" width="115" class="rounded-1" />
                          </div>
                          <div class="flex-grow-1 ms-sm-4 mt-3 mt-sm-0">
                            <ul class="list-inline mb-2">
                              <li class="list-inline-item">
                                <span class="badge badge-soft-danger fs-11">Design</span>
                              </li>
                            </ul>
                            <h5>
                              <a href="javascript:void(0);">Design your apps in your own way</a>
                            </h5>
                            <ul class="list-inline mb-0">
                              <li class="list-inline-item">
                                <em class="ri-user-3-fill text-success align-middle me-1"></em>
                                Henry Baird
                              </li>
                              <li class="list-inline-item">
                                <em class="ri-calendar-2-fill text-success align-middle me-1"></em>
                                19 Nov, 2021
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--end card-->
                  </div>
                  <!--end col-->

                  <div class="col-lg-6">
                    <div class="card border">
                      <div class="card-body">
                        <div class="d-sm-flex">
                          <div class="flex-shrink-0">
                            <img src="@/assets/images/small/img-8.jpg" alt="" width="115" class="rounded-1" />
                          </div>
                          <div class="flex-grow-1 ms-sm-4 mt-3 mt-sm-0">
                            <ul class="list-inline mb-2">
                              <li class="list-inline-item">
                                <span class="badge badge-soft-warning fs-11">Development</span>
                              </li>
                            </ul>
                            <h5>
                              <a href="javascript:void(0);">How apps is changing the IT world</a>
                            </h5>
                            <ul class="list-inline mb-0">
                              <li class="list-inline-item">
                                <em class="ri-user-3-fill text-success align-middle me-1"></em>
                                Elwood Arter
                              </li>
                              <li class="list-inline-item">
                                <em class="ri-calendar-2-fill text-success align-middle me-1"></em>
                                10 Aug, 2021
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--end card-->
                  </div>
                  <!--end col-->
                </div>
                <!--end row-->

                <div class="mt-4">
                  <ul class="pagination pagination-separated justify-content-center mb-0">
                    <li class="page-item disabled">
                      <a href="javascript:void(0);" class="page-link"><em class="mdi mdi-chevron-left"></em></a>
                    </li>
                    <li class="page-item active">
                      <a href="javascript:void(0);" class="page-link">1</a>
                    </li>
                    <li class="page-item">
                      <a href="javascript:void(0);" class="page-link">2</a>
                    </li>
                    <li class="page-item">
                      <a href="javascript:void(0);" class="page-link">3</a>
                    </li>
                    <li class="page-item">
                      <a href="javascript:void(0);" class="page-link">4</a>
                    </li>
                    <li class="page-item">
                      <a href="javascript:void(0);" class="page-link">5</a>
                    </li>
                    <li class="page-item">
                      <a href="javascript:void(0);" class="page-link"><em class="mdi mdi-chevron-right"></em></a>
                    </li>
                  </ul>
                </div>
              </div>
              <!--end tab-pane-->
              <div class="tab-pane" id="video" role="tabpanel">
                <div class="row">
                  <div class="col-lg-12 video-list">
                    <div class="list-element">
                      <h5 class="mb-1">
                        <a href="javascript:void(0);">Admin dashboard templates - Material Design for
                          MedicFollow</a>
                      </h5>
                      <p class="text-success">
                        https://themesbrand.com/velzon/index.html
                      </p>
                      <div class="d-flex flex-column flex-sm-row">
                        <div class="flex-shrink-0">
                          <iframe src="https://www.youtube.com/embed/GfSZtaoc5bw" title="YouTube video" allowfullscreen
                            class="rounded"></iframe>
                        </div>
                        <div class="flex-grow-1 ms-sm-3 mt-2 mt-sm-0">
                          <p class="text-muted mb-0">
                            MedicFollow admin is super flexible, powerful,
                            clean, modern & responsive admin template based on
                            <strong>bootstrap 5</strong> stable with unlimited
                            possibilities. You can simply change to any layout
                            or mode by changing a couple of lines of code. You
                            can start small and large projects or update design
                            in your existing project using MedicFollow it is
                            very quick and easy as it is beautiful, adroit, and
                            delivers the ultimate user experience.
                          </p>
                          <div class="border border-dashed mb-1 mt-3"></div>
                          <ul class="list-inline d-flex align-items-center g-3 text-muted fs-14 mb-0">
                            <li class="list-inline-item me-3">
                              <em class="ri-thumb-up-line align-middle me-1"></em>335
                            </li>
                            <li class="list-inline-item me-3">
                              <em class="ri-question-answer-line align-middle me-1"></em>102
                            </li>
                            <li class="list-inline-item">
                              <div class="d-flex align-items-center">
                                <div class="flex-shrink-0">
                                  <em class="ri-user-line"></em>
                                </div>
                                <div class="flex-grow-1 fs-13 ms-1">
                                  <span class="fw-medium">MedicFollow</span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <!--end list-element-->

                    <div class="list-element mt-4">
                      <h5 class="mb-1">
                        <a href="javascript:void(0);">Create Responsive Admin Dashboard using Html CSS</a>
                      </h5>
                      <p class="text-success">
                        https://themesbrand.com/velzon/index.html
                      </p>
                      <div class="d-flex flex-column flex-sm-row">
                        <div class="flex-shrink-0">
                          <iframe src="https://www.youtube.com/embed/Z-fV2lGKnnU" title="YouTube video" allowfullscreen
                            class="rounded"></iframe>
                        </div>
                        <div class="flex-grow-1 ms-sm-3 mt-2 mt-sm-0">
                          <p class="text-muted mb-0">
                            MedicFollow admin is super flexible, powerful,
                            clean, modern & responsive admin template based on
                            <strong>bootstrap 5</strong> stable with unlimited
                            possibilities. You can simply change to any layout
                            or mode by changing a couple of lines of code. You
                            can start small and large projects or update design
                            in your existing project using MedicFollow it is
                            very quick and easy as it is beautiful, adroit, and
                            delivers the ultimate user experience.
                          </p>
                          <div class="border border-dashed mb-1 mt-3"></div>
                          <ul class="list-inline d-flex align-items-center g-3 text-muted fs-14 mb-0">
                            <li class="list-inline-item me-3">
                              <em class="ri-thumb-up-line align-middle me-1"></em>485
                            </li>
                            <li class="list-inline-item me-3">
                              <em class="ri-question-answer-line align-middle me-1"></em>167
                            </li>
                            <li class="list-inline-item">
                              <div class="d-flex align-items-center">
                                <div class="flex-shrink-0">
                                  <em class="ri-user-line"></em>
                                </div>
                                <div class="flex-grow-1 fs-13 ms-1">
                                  <span class="fw-medium">MedicFollow</span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <!--end list-element-->

                    <div class="list-element mt-4">
                      <h5 class="mb-1">
                        <a href="javascript:void(0);">MedicFollow - The Most Popular Bootstrap 5 HTML,
                          Angular & React Js Admin</a>
                      </h5>
                      <p class="text-success">
                        https://themesbrand.com/velzon/index.html
                      </p>
                      <div class="d-flex flex-column flex-sm-row">
                        <div class="flex-shrink-0">
                          <iframe src="https://www.youtube.com/embed/2RZQN_ko0iU" title="YouTube video" allowfullscreen
                            class="rounded"></iframe>
                        </div>
                        <div class="flex-grow-1 ms-sm-3 mt-2 mt-sm-0">
                          <p class="text-muted mb-0">
                            MedicFollow admin is super flexible, powerful,
                            clean, modern & responsive admin template based on
                            <strong>bootstrap 5</strong> stable with unlimited
                            possibilities. You can simply change to any layout
                            or mode by changing a couple of lines of code. You
                            can start small and large projects or update design
                            in your existing project using MedicFollow it is
                            very quick and easy as it is beautiful, adroit, and
                            delivers the ultimate user experience.
                          </p>
                          <div class="border border-dashed mb-1 mt-3"></div>
                          <ul class="list-inline d-flex align-items-center g-3 text-muted fs-14 mb-0">
                            <li class="list-inline-item me-3">
                              <em class="ri-thumb-up-line align-middle me-1"></em>122
                            </li>
                            <li class="list-inline-item me-3">
                              <em class="ri-question-answer-line align-middle me-1"></em>51
                            </li>
                            <li class="list-inline-item">
                              <div class="d-flex align-items-center">
                                <div class="flex-shrink-0">
                                  <em class="ri-user-line"></em>
                                </div>
                                <div class="flex-grow-1 fs-13 ms-1">
                                  <span class="fw-medium">MedicFollow</span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <!--end list-element-->

                    <div class="list-element mt-4">
                      <h5 class="mb-1">
                        <a href="javascript:void(0);">MedicFollow Admin Dashboard (website analytics) with
                          Bootstrap 5</a>
                      </h5>
                      <p class="text-success">
                        https://themesbrand.com/velzon/index.html
                      </p>
                      <div class="d-flex flex-column flex-sm-row">
                        <div class="flex-shrink-0">
                          <iframe src="https://www.youtube.com/embed/Z-fV2lGKnnU" title="YouTube video" allowfullscreen
                            class="rounded"></iframe>
                        </div>
                        <div class="flex-grow-1 ms-sm-3 mt-2 mt-sm-0">
                          <p class="text-muted mb-0">
                            MedicFollow admin is super flexible, powerful,
                            clean, modern & responsive admin template based on
                            <strong>bootstrap 5</strong> stable with unlimited
                            possibilities. You can simply change to any layout
                            or mode by changing a couple of lines of code. You
                            can start small and large projects or update design
                            in your existing project using MedicFollow it is
                            very quick and easy as it is beautiful, adroit, and
                            delivers the ultimate user experience.
                          </p>
                          <div class="border border-dashed mb-1 mt-3"></div>
                          <ul class="list-inline d-flex align-items-center g-3 text-muted fs-14 mb-0">
                            <li class="list-inline-item me-3">
                              <em class="ri-thumb-up-line align-middle me-1"></em>485
                            </li>
                            <li class="list-inline-item me-3">
                              <em class="ri-question-answer-line align-middle me-1"></em>69
                            </li>
                            <li class="list-inline-item">
                              <div class="d-flex align-items-center">
                                <div class="flex-shrink-0">
                                  <em class="ri-user-line"></em>
                                </div>
                                <div class="flex-grow-1 fs-13 ms-1">
                                  <span class="fw-medium">MedicFollow</span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <!--end list-element-->

                    <div class="list-element mt-4">
                      <h5 class="mb-1">
                        <a href="javascript:void(0);">Dashboard Admin Basics - YouTube</a>
                      </h5>
                      <p class="text-success">
                        https://themesbrand.com/velzon/index.html
                      </p>
                      <div class="d-flex flex-column flex-sm-row">
                        <div class="flex-shrink-0">
                          <iframe src="https://www.youtube.com/embed/1y_kfWUCFDQ" title="YouTube video" allowfullscreen
                            class="rounded"></iframe>
                        </div>
                        <div class="flex-grow-1 ms-sm-3 mt-2 mt-sm-0">
                          <p class="text-muted mb-0">
                            MedicFollow admin is super flexible, powerful,
                            clean, modern & responsive admin template based on
                            <strong>bootstrap 5</strong> stable with unlimited
                            possibilities. You can simply change to any layout
                            or mode by changing a couple of lines of code. You
                            can start small and large projects or update design
                            in your existing project using MedicFollow it is
                            very quick and easy as it is beautiful, adroit, and
                            delivers the ultimate user experience.
                          </p>
                          <div class="border border-dashed mb-1 mt-3"></div>
                          <ul class="list-inline d-flex align-items-center g-3 text-muted fs-14 mb-0">
                            <li class="list-inline-item me-3">
                              <em class="ri-thumb-up-line align-middle me-1"></em>58
                            </li>
                            <li class="list-inline-item me-3">
                              <em class="ri-question-answer-line align-middle me-1"></em>24
                            </li>
                            <li class="list-inline-item">
                              <div class="d-flex align-items-center">
                                <div class="flex-shrink-0">
                                  <em class="ri-user-line"></em>
                                </div>
                                <div class="flex-grow-1 fs-13 ms-1">
                                  <span class="fw-medium">MedicFollow</span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <!--end list-element-->
                  </div>
                  <!--end col-->
                  <div class="text-center">
                    <button id="loadmore" class="btn btn-link text-success mt-2">
                      <em class="mdi mdi-loading mdi-spin fs-20 align-middle me-2"></em>
                      Load more
                    </button>
                  </div>
                </div>
                <!--end row-->
              </div>
              <!--end tab-pane-->
            </div>
            <!--end tab-content-->
          </div>
          <!--end card-body-->
        </div>
        <!--end card -->
      </div>
      <!--end card -->
    </div>
    <!--end row-->
  </Layout>
</template>
