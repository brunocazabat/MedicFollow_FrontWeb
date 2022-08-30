<script>
export default {
  mounted() {
    // chat
    var currentChatId = 'users-chat'
    scrollToBottom(currentChatId)
    // // Scroll to Bottom
    function scrollToBottom(id) {
      setTimeout(function () {
        var simpleBar = document
          .getElementById(id)
          .querySelector('#chat-conversation .simplebar-content-wrapper')
          ? document
            .getElementById(id)
            .querySelector('#chat-conversation .simplebar-content-wrapper')
          : ''

        var offsetHeight = document.getElementsByClassName(
          'chat-conversation-list'
        )[0]
          ? document
            .getElementById(id)
            .getElementsByClassName('chat-conversation-list')[0]
            .scrollHeight -
          window.innerHeight +
          600
          : 0

        if (offsetHeight)
          simpleBar.scrollTo({
            top: offsetHeight,
            behavior: 'smooth'
          })
      }, 300)
    }
  }
}
</script>

<template>
  <div class="card card-height-100">
    <div class="card-header align-items-center d-flex">
      <h4 class="card-title mb-0 flex-grow-1" data-key="t-lstchat">{{  $t("t-lstchat")  }}</h4>
      <div class="flex-shrink-0">
        <div class="dropdown card-header-dropdown">
          <a class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            <span class="text-muted"><em class="ri-settings-4-line align-middle me-1"></em>Setting
              <em class="mdi mdi-chevron-down ms-1"></em></span>
          </a>
          <div class="dropdown-menu dropdown-menu-end">
            <a class="dropdown-item" href="#"><em class="ri-user-2-fill align-bottom text-muted me-2"></em>
              View Profile</a>
            <a class="dropdown-item" href="#"><em class="ri-inbox-archive-line align-bottom text-muted me-2"></em>
              Archive</a>
            <a class="dropdown-item" href="#"><em class="ri-mic-off-line align-bottom text-muted me-2"></em>
              Muted</a>
            <a class="dropdown-item" href="#"><em class="ri-delete-bin-5-line align-bottom text-muted me-2"></em>
              Delete</a>
          </div>
        </div>
      </div>
    </div>
    <!-- end card header -->

    <div class="card-body p-0">
      <div id="users-chat">
        <div class="chat-conversation p-3" id="chat-conversation" data-simplebar style="height: 412px">
          <ul class="list-unstyled chat-conversation-list chat-sm" id="users-conversation">
            <li class="chat-list left">
              <div class="conversation-list">
                <div class="chat-avatar">
                  <img src="@/assets/images/users/avatar-1.png" alt="" />
                </div>
                <div class="user-chat-content">
                  <div class="ctext-wrap">
                    <div class="ctext-wrap-content">
                      <p class="mb-0 ctext-content" data-key="t-sampleconv1">{{  $t("t-sampleconv1")  }}</p>
                    </div>
                    <div class="dropdown align-self-start message-box-drop">
                      <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <em class="ri-more-2-fill"></em>
                      </a>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#"><em class="ri-reply-line me-2 text-muted align-bottom"
                            data-key="t-seeconv"></em>{{  $t("t-seeconv")  }}</a>
                      </div>
                    </div>
                  </div>
                  <div class="conversation-name">
                    <small class="text-muted time">09:07</small>
                    <span class="text-success check-message-icon"><em
                        class="ri-check-double-line align-bottom"></em></span>
                  </div>
                </div>
              </div>
            </li>
            <!-- chat-list -->

            <li class="chat-list right">
              <div class="conversation-list">
                <div class="chat-avatar">
                  <img src="@/assets/images/logo/logo-short.png" alt="" />
                </div>
                <div class="user-chat-content">
                  <div class="ctext-wrap">
                    <div class="ctext-wrap-content">
                      <p class="mb-0 ctext-content" data-key="t-sampleconv2">{{  $t("t-sampleconv2")  }}</p>
                    </div>
                    <div class="dropdown align-self-start message-box-drop">
                      <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <em class="ri-more-2-fill"></em>
                      </a>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#"><em class="ri-reply-line me-2 text-muted align-bottom"
                            data-key="t-seeconv"></em>{{  $t("t-seeconv")  }}</a>
                      </div>
                    </div>
                  </div>
                  <div class="conversation-name">
                    <small class="text-muted time">09:07</small>
                    <span class="text-success check-message-icon"><em
                        class="ri-check-double-line align-bottom"></em></span>
                  </div>
                </div>
              </div>
            </li>
            <!-- chat-list -->

            <li class="chat-list left">
              <div class="conversation-list">
                <div class="chat-avatar">
                  <img src="@/assets/images/users/avatar-1.png" alt="" />
                </div>
                <div class="user-chat-content">
                  <div class="ctext-wrap">
                    <div class="ctext-wrap-content">
                      <p class="mb-0 ctext-content" data-key="t-sampleconv3">{{  $t("t-sampleconv3")  }}</p>
                    </div>
                    <div class="dropdown align-self-start message-box-drop">
                      <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <em class="ri-more-2-fill"></em>
                      </a>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#"><em class="ri-reply-line me-2 text-muted align-bottom"
                            data-key="t-seeconv"></em>{{  $t("t-seeconv")  }}</a>
                      </div>
                    </div>
                  </div>
                  <div class="conversation-name">
                    <small class="text-muted time">14:18</small>
                    <span class="text-success check-message-icon"><em
                        class="ri-check-double-line align-bottom"></em></span>
                  </div>
                </div>
              </div>
            </li>
            <!-- chat-list -->

            <li class="chat-list right">
              <div class="conversation-list">
                <div class="chat-avatar">
                  <img src="@/assets/images/logo/logo-short.png" alt="" />
                </div>
                <div class="user-chat-content">
                  <div class="ctext-wrap">
                    <div class="ctext-wrap-content">
                      <p class="mb-0 ctext-content" data-key="t-sampleconv4">{{  $t("t-sampleconv4")  }}</p>
                    </div>
                    <div class="dropdown align-self-start message-box-drop">
                      <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <em class="ri-more-2-fill"></em>
                      </a>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#"><em class="ri-reply-line me-2 text-muted align-bottom"
                            data-key="t-seeconv"></em>{{  $t("t-seeconv")  }}</a>
                      </div>
                    </div>
                  </div>
                  <div class="conversation-name">
                    <small class="text-muted time">14:18</small>
                    <span class="text-success check-message-icon"><em
                        class="ri-check-double-line align-bottom"></em></span>
                  </div>
                </div>
              </div>
            </li>
            <!-- chat-list -->

            <li class="chat-list left">
              <div class="conversation-list">
                <div class="chat-avatar">
                  <img src="@/assets/images/users/avatar-1.png" alt="" />
                </div>
                <div class="user-chat-content">
                  <div class="ctext-wrap">
                    <div class="ctext-wrap-content">
                      <p class="mb-0 ctext-content" data-key="t-sampleconv5">{{  $t("t-sampleconv5")  }}</p>
                    </div>
                    <div class="dropdown align-self-start message-box-drop">
                      <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <em class="ri-more-2-fill"></em>
                      </a>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#"><em class="ri-reply-line me-2 text-muted align-bottom"
                            data-key="t-seeconv"></em>{{  $t("t-seeconv")  }}</a>
                      </div>
                    </div>
                  </div>
                  <div class="conversation-name">
                    <small class="text-muted time">19:15</small>
                    <span class="text-success check-message-icon"><em
                        class="ri-check-double-line align-bottom"></em></span>
                  </div>
                </div>
              </div>
            </li>
            <!-- chat-list -->

            <li class="chat-list right">
              <div class="conversation-list">
                <div class="chat-avatar">
                  <img src="@/assets/images/logo/logo-short.png" alt="" />
                </div>
                <div class="user-chat-content">
                  <div class="ctext-wrap">
                    <div class="ctext-wrap-content">
                      <p class="mb-0 ctext-content" data-key="t-sampleconv6">{{  $t("t-sampleconv6")  }}</p>
                    </div>
                    <div class="dropdown align-self-start message-box-drop">
                      <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <em class="ri-more-2-fill"></em>
                      </a>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#"><em class="ri-reply-line me-2 text-muted align-bottom"
                            data-key="t-seeconv"></em>{{  $t("t-seeconv")  }}</a>
                      </div>
                    </div>
                  </div>
                  <div class="conversation-name">
                    <small class="text-muted time">09:12</small>
                    <span class="text-success check-message-icon"><em
                        class="ri-check-double-line align-bottom"></em></span>
                  </div>
                </div>
              </div>
            </li>
            <!-- chat-list -->
          </ul>
        </div>
      </div>
      <div class="border-top border-top-dashed">
        <div class="mt-3 text-center" style="margin-bottom: 16px;">
          <router-link to="/chat">
            <a class="text-muted text-decoration-underline" data-key="t-viewmsg">{{  $t("t-viewmsg")  }}</a>
          </router-link>
        </div>
        <!-- end row -->
      </div>
    </div>
    <!-- end cardbody -->
  </div>
  <!-- end card -->
</template>
