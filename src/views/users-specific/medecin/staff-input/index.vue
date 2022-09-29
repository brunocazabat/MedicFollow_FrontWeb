<script>
import Layout from "@/components/layouts/main.vue";
import footermodule from "@/components/login-components/footer-module.vue";
import { reactive } from "vue";
import useSubmitButtonState from "./useSubmitButtonState"
import {
  SearchIcon,
  InfoIcon,
  MoreVerticalIcon
} from '@zhuowenli/vue-feather-icons'
import { required, helpers } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'
import { chatData, chatMessagesData } from '../../confiance/chat-section/data'

export default {
  setup() {
    const patientMandatory = reactive({
      dateOfBirth: "",
      socialSecurityNumber: "",
    });

    const { isSubmitButtonDisabled } = useSubmitButtonState(patientMandatory);
    return { v$: useVuelidate(), patientMandatory, isSubmitButtonDisabled };
  },
  data() {
    return {
      chatData: chatData,
      chatMessagesData: chatMessagesData,
      testaas: false,
      form: {
        message: ''
      },
      username: "François Dupont",
      profile: require('@/assets/images/users/avatar-1.png'),

      value: ['javascript'],
      displayMode: 1,
      patientFirstName: "",
      patientLastName: "",

    };
  },
  components: {
    Layout,
    footermodule,
    SearchIcon,
    InfoIcon,
    MoreVerticalIcon
  },
  methods: {
    nextDisplay() {
      this.displayMode += 1;
    },
  },
  validations: {
    form: {
      message: {
        required: helpers.withMessage('Message is required', required)
      }
    }
  },
};

</script>
  
<template>
  <Layout>

    <!-- First Input Page -->
    <div class="row" v-if="displayMode === 0">
      <div class="p-2 col-xl-12">
        <div class="card">
          <div class="card-body">

            <!-- Title + muted text -->
            <h1 class="text-primary " data-key="t-selectpatient">{{$t("t-selectpatient")}}</h1>
            <p class="text-muted" data-key="t-selectpatientinfotext">{{$t("t-selectpatientinfotext")}}.</p>

            <!-- Input fields -->
            <div class="p-3 row">
              <!-- First name -->
              <div class="col-sm-5">
                <label for="patientFirstName" class="form-label font-size-large" data-key="t-firstname">{{
                $t("t-firstname")
                }}</label>
                <input type="text" class="form-control" id="patientFirstName" placeholder="Enter first name..."
                  v-model="patientFirstName" />
              </div>

              <!-- Last name -->
              <div class="col-sm-5">
                <label for="patientLastName" class="form-label font-size-large" data-key="t-lastname">{{
                $t("t-lastname")
                }}</label>
                <input type="text" class="form-control" id="patientLastName" placeholder="Enter last name..."
                  v-model="patientLastName" />
              </div>
            </div>

            <!-- Social security number + Date of Birth -->
            <div class="p-3 row">

              <!-- Social Security Number -->
              <div class="col-sm-5">
                <label for="patientSocialSecurityNumber" class="form-label font-size-large"
                  data-key="t-socialsecuritynbr">{{$t("t-socialsecuritynbr")}}</label>
                <input type="text" class="form-control" id="patientSocialSecurityNumber"
                  placeholder="Enter the social security number..." v-model="patientMandatory.socialSecurityNumber" />
              </div>

              <!-- Date of Birth / CHANGE FOR ACTUAL DATE PICKER -->
              <div class="col-sm-5 mb-5">
                <label for="patientDoB" class="form-label font-size-large"
                  data-key="t-dateofbirth">{{$t("t-dateofbirth")}}</label>
                <input type="date" class="form-control" id="patientDoB" placeholder="Enter the date of birth..."
                  v-model="patientMandatory.dateOfBirth" />
              </div>

              <!-- Next Button -->
              <div class="p-3">
                <button class="btn btn-primary" :disabled="isSubmitButtonDisabled" v-on:click="nextDisplay()"
                  data-key="t-next">{{$t("t-next")}}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- INPUT MEDICAL INFORMATION -->
    <div class="row" v-if="displayMode === 1">

      <div class="p-2 col-xl-6">
        <div class="card">
          <div class="card-body">
            <h1 class="text-primary" data-key="t-medicinfofor">{{$t("t-medicinfofor")}} <strong>{{patientFirstName}}
                {{patientLastName}}</strong></h1>
            <p class="text-muted" data-key="t-writedownlastinfo">{{$t("t-writedownlastinfo")}}.</p>

            <!-- INPUT LATEST INFO -->
            <div class="p-3">
              <label for="patientInputGenerakInfo" class="form-label font-size-large"
                data-key="t-inputgeneralinfopatient">{{$t("t-inputgeneralinfopatient")}}</label>
              <textarea class="form-control" id="patientInputGenerakInfo" rows="3"
                placeholder="Enter the summary here..."></textarea>
              <div class="invalid-feedback">
                Please enter a message in the textarea.
              </div>
            </div>

            <hr>
            <p class="text-muted" data-key="t-notmandatoryfields">{{$t("t-notmandatoryfields")}}</p>

            <!-- HEARTBEAT -->
            <div class="p-3">
              <label for="patientInputGenerakInfo" class="form-label font-size-large"
                data-key="t-heartbeat">{{$t("t-heartbeat")}}</label>
              <input class="form-control" id="patientInputGenerakInfo" placeholder="Enter the heartbeat here...">
              <div class="invalid-feedback">
                Please enter a message in the textarea.
              </div>
            </div>

            <!-- PULSE -->
            <div class="p-3 mb-3">
              <label for="patientInputGenerakInfo" class="form-label font-size-large"
                data-key="t-pulse">{{$t("t-pulse")}}</label>
              <input class="form-control" id="patientInputGenerakInfo" placeholder="Enter the pulse here...">
              <div class="invalid-feedback">
                Please enter a message in the textarea.
              </div>
            </div>

            <!-- OXYGEN SATURATION -->
            <div class="p-3">
              <label for="patientInputGenerakInfo" class="form-label font-size-large"
                data-key="t-oxygensaturation">{{$t("t-oxygensaturation")}}</label>
              <input class="form-control" id="patientInputGenerakInfo"
                placeholder="Enter the oxygen saturation here...">
              <div class="invalid-feedback">
                Please enter a message in the textarea.
              </div>
            </div>

            <hr>

            <!-- FILE UPLOAD -->
            <div class="p-3">
              <div class="col-md-12">
                <label class="font-size-large mb-0 mt-0" data-key="t-questionuploaddoc">
                  {{ $t("t-questionuploaddoc") }}
                </label>
                <p class="text-muted mb-3" data-key="t-uploadexample">{{ $t("t-uploadexample") }}</p>
                <input class="form-control" type="file" id="feedbackFileUpload" accept=".pdf, ,jpg, .jpeg, .png">
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="p-2 col-xl-6">
        <div class="card">
          <div class="body-card">


            <!-- Start User chat -->
            <div class="user-chat w-100 overflow-hidden">
              <div class="chat-content d-lg-flex">
                <!-- start chat conversation section -->
                <div class="w-100 overflow-hidden position-relative">
                  <!-- conversation user -->
                  <div class="position-relative">
                    <div class="p-3 user-chat-topbar">
                      <div class="row align-items-center">
                        <div class="col-sm-4 col-8">
                          <div class="d-flex align-items-center">
                            <div class="flex-shrink-0 d-block d-lg-none me-3">
                              <a href="javascript: void(0);" class="user-chat-remove fs-18 p-1"><em
                                  class="ri-arrow-left-s-line align-bottom"></em></a>
                            </div>
                            <div class="flex-grow-1 overflow-hidden">
                              <div class="d-flex align-items-center">
                                <div
                                  class="flex-shrink-0 chat-user-img online user-own-img align-self-center me-3 ms-0">
                                  <img :src="
                                    profile
                                      ? profile
                                      : require('@/assets/images/users/avatar-1.png')
                                  " class="rounded-circle avatar-xs" alt="" />
                                  <span class="user-status"></span>
                                </div>
                                <div class="flex-grow-1 overflow-hidden">
                                  <h5 class="text-truncate mb-0 fs-16">
                                    <a class="text-reset username" data-bs-toggle="offcanvas"
                                      href="#userProfileCanvasExample" aria-controls="userProfileCanvasExample">{{
                                      username }}</a>
                                  </h5>
                                  <p class="text-truncate text-muted fs-14 mb-0 userStatus">
                                    <small>Online</small>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-8 col-4">
                          <ul class="list-inline user-chat-nav text-end mb-0">
                            <li class="list-inline-item m-0">
                              <div class="dropdown">
                                <button class="btn btn-ghost-secondary btn-icon shadow-none" type="button"
                                  data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  <search-icon class="icon-sm"></search-icon>
                                </button>
                                <div class="dropdown-menu p-0 dropdown-menu-end dropdown-menu-lg">
                                  <div class="p-2">
                                    <div class="search-box">
                                      <input type="text" class="form-control bg-light border-light"
                                        placeholder="Search here..." onkeyup="searchMessages()" id="searchMessage" />
                                      <em class="ri-search-2-line search-icon"></em>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>

                            <li class="list-inline-item d-none d-lg-inline-block m-0">
                              <button type="button" class="btn btn-ghost-secondary btn-icon shadow-none"
                                data-bs-toggle="offcanvas" data-bs-target="#userProfileCanvasExample"
                                aria-controls="userProfileCanvasExample">
                                <info-icon class="icon-sm"></info-icon>
                              </button>
                            </li>

                            <li class="list-inline-item m-0">
                              <div class="dropdown">
                                <button class="btn btn-ghost-secondary btn-icon shadow-none" type="button"
                                  data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  <more-vertical-icon class="icon-sm"></more-vertical-icon>
                                </button>
                                <div class="dropdown-menu dropdown-menu-end">
                                  <a class="dropdown-item d-block d-lg-none user-profile-show" href="#"><em
                                      class="ri-user-2-fill align-bottom text-muted me-2"></em>
                                    View Profile</a>
                                  <a class="dropdown-item" href="#"><em
                                      class="ri-inbox-archive-line align-bottom text-muted me-2"></em>
                                    Archive</a>
                                  <a class="dropdown-item" href="#"><em
                                      class="ri-mic-off-line align-bottom text-muted me-2"></em>
                                    Muted</a>
                                  <a class="dropdown-item" href="#"><em
                                      class="ri-delete-bin-5-line align-bottom text-muted me-2"></em>
                                    Delete</a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <!-- end chat user head -->

                    <div class="position-relative" id="users-chat">
                      <div class="chat-conversation p-3 p-lg-4" id="chat-conversation" data-simplebar ref="current">
                        <ul class="list-unstyled chat-conversation-list">
                          <li v-for="data of chatMessagesData" :key="data.message" :class="{
                            right: `${data.align}` === 'right',
                            left: `${data.align}` !== 'right'
                          }" class="chat-list">
                            <div class="conversation-list">
                              <div class="chat-avatar" v-if="data.align !== 'right'">
                                <img :src="
                                  profile
                                    ? profile
                                    : require('@/assets/images/users/avatar-1.png')
                                " alt="" />
                              </div>
                              <div class="user-chat-content">
                                <div class="ctext-wrap">
                                  <div class="ctext-wrap-content">
                                    <p class="mb-0 ctext-content">
                                      Bonjour
                                    </p>
                                  </div>
                                  <div class="dropdown align-self-start message-box-drop">
                                    <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                      aria-haspopup="true" aria-expanded="false">
                                      <em class="ri-more-2-fill"></em>
                                    </a>
                                    <div class="dropdown-menu">
                                      <a class="dropdown-item reply-message" href="#"><em
                                          class="ri-reply-line me-2 text-muted align-bottom"></em>Reply</a>
                                      <a class="dropdown-item" href="#"><em
                                          class="ri-share-line me-2 text-muted align-bottom"></em>Forward</a>
                                      <a class="dropdown-item copy-message" href="#"><em
                                          class="ri-file-copy-line me-2 text-muted align-bottom"></em>Copy</a>
                                      <a class="dropdown-item" href="#"><em
                                          class="ri-bookmark-line me-2 text-muted align-bottom"></em>Bookmark</a>
                                      <a class="dropdown-item delete-item" href="#"><em
                                          class="ri-delete-bin-5-line me-2 text-muted align-bottom"></em>Delete</a>
                                    </div>
                                  </div>
                                  <div class="conversation-name">
                                    <small class="text-muted time">10:00</small>
                                    <span class="text-success check-message-icon"><em
                                        class="ri-check-double-line align-bottom"></em></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>

                        <!-- end chat-conversation-list -->
                      </div>
                    </div>

                    <!-- end chat-conversation -->

                    <div class="chat-input-section p-3 p-lg-4">
                      <form>
                        <div class="row g-0 align-items-center">
                          <div class="col-auto">
                            <div class="chat-input-links me-2">
                              <div class="links-list-item">
                                <button type="button" class="btn btn-link text-decoration-none emoji-btn"
                                  id="emoji-btn">
                                  <em class="bx bx-smile align-middle"></em>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div class="col">
                            <div class="chat-input-feedback">
                              Please Enter a Message
                            </div>

                            <input type="text" v-model="form.message"
                              class="form-control chat-input bg-light border-light" placeholder="Enter Message..."
                              :class="{
                                'is-invalid': testaas && v$.form.message.$error
                              }" />
                          </div>
                          <div class="col-auto">
                            <div class="chat-input-links ms-2">
                              <div class="links-list-item">
                                <button type="submit" class="btn btn-primary chat-send waves-effect waves-light shadow">
                                  <em class="ri-send-plane-2-fill align-bottom"></em>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>

                    <div class="replyCard">
                      <div class="card mb-0">
                        <div class="card-body py-3">
                          <div class="replymessage-block mb-0 d-flex align-items-start">
                            <div class="flex-grow-1">
                              <h5 class="conversation-name"></h5>
                              <p class="mb-0"></p>
                            </div>
                            <div class="flex-shrink-0">
                              <button type="button" id="close_toggle" class="btn btn-sm btn-link mt-n2 me-n3 fs-18">
                                <em class="bx bx-x align-middle"></em>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>

    <footermodule />
  </Layout>
</template>
  