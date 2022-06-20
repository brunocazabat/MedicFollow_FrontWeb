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
      <h4 class="card-title mb-0 flex-grow-1">Chat</h4>
      <div class="flex-shrink-0">
        <div class="dropdown card-header-dropdown">
          <a
            class="text-reset dropdown-btn"
            href="#"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span class="text-muted"
              ><em class="ri-settings-4-line align-middle me-1"></em>Setting
              <em class="mdi mdi-chevron-down ms-1"></em
            ></span>
          </a>
          <div class="dropdown-menu dropdown-menu-end">
            <a class="dropdown-item" href="#"
              ><em class="ri-user-2-fill align-bottom text-muted me-2"></em>
              View Profile</a
            >
            <a class="dropdown-item" href="#"
              ><em
                class="ri-inbox-archive-line align-bottom text-muted me-2"
              ></em>
              Archive</a
            >
            <a class="dropdown-item" href="#"
              ><em class="ri-mic-off-line align-bottom text-muted me-2"></em>
              Muted</a
            >
            <a class="dropdown-item" href="#"
              ><em
                class="ri-delete-bin-5-line align-bottom text-muted me-2"
              ></em>
              Delete</a
            >
          </div>
        </div>
      </div>
    </div>
    <!-- end card header -->

    <div class="card-body p-0">
      <div id="users-chat">
        <div
          class="chat-conversation p-3"
          id="chat-conversation"
          data-simplebar
          style="height: 400px"
        >
          <ul
            class="list-unstyled chat-conversation-list chat-sm"
            id="users-conversation"
          >
            <li class="chat-list left">
              <div class="conversation-list">
                <div class="chat-avatar">
                  <img src="@/assets/images/users/avatar-2.jpg" alt="" />
                </div>
                <div class="user-chat-content">
                  <div class="ctext-wrap">
                    <div class="ctext-wrap-content">
                      <p class="mb-0 ctext-content">Good morning 😊</p>
                    </div>
                    <div class="dropdown align-self-start message-box-drop">
                      <a
                        class="dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <em class="ri-more-2-fill"></em>
                      </a>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#"
                          ><em
                            class="ri-reply-line me-2 text-muted align-bottom"
                          ></em
                          >Reply</a
                        >
                        <a class="dropdown-item" href="#"
                          ><em
                            class="ri-share-line me-2 text-muted align-bottom"
                          ></em
                          >Forward</a
                        >
                        <a class="dropdown-item" href="#"
                          ><em
                            class="ri-file-copy-line me-2 text-muted align-bottom"
                          ></em
                          >Copy</a
                        >
                        <a class="dropdown-item" href="#"
                          ><em
                            class="ri-bookmark-line me-2 text-muted align-bottom"
                          ></em
                          >Bookmark</a
                        >
                        <a class="dropdown-item delete-item" href="#"
                          ><em
                            class="ri-delete-bin-5-line me-2 text-muted align-bottom"
                          ></em
                          >Delete</a
                        >
                      </div>
                    </div>
                  </div>
                  <div class="conversation-name">
                    <small class="text-muted time">09:07 am</small>
                    <span class="text-success check-message-icon"
                      ><em class="ri-check-double-line align-bottom"></em
                    ></span>
                  </div>
                </div>
              </div>
            </li>
            <!-- chat-list -->

            <li class="chat-list right">
              <div class="conversation-list">
                <div class="user-chat-content">
                  <div class="ctext-wrap">
                    <div class="ctext-wrap-content">
                      <p class="mb-0 ctext-content">
                        Good morning, How are you? What about our next meeting?
                      </p>
                    </div>
                    <div class="dropdown align-self-start message-box-drop">
                      <a
                        class="dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <em class="ri-more-2-fill"></em>
                      </a>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#"
                          ><em
                            class="ri-reply-line me-2 text-muted align-bottom"
                          ></em
                          >Reply</a
                        >
                        <a class="dropdown-item" href="#"
                          ><em
                            class="ri-share-line me-2 text-muted align-bottom"
                          ></em
                          >Forward</a
                        >
                        <a class="dropdown-item" href="#"
                          ><em
                            class="ri-file-copy-line me-2 text-muted align-bottom"
                          ></em
                          >Copy</a
                        >
                        <a class="dropdown-item" href="#"
                          ><em
                            class="ri-bookmark-line me-2 text-muted align-bottom"
                          ></em
                          >Bookmark</a
                        >
                        <a class="dropdown-item delete-item" href="#"
                          ><em
                            class="ri-delete-bin-5-line me-2 text-muted align-bottom"
                          ></em
                          >Delete</a
                        >
                      </div>
                    </div>
                  </div>
                  <div class="conversation-name">
                    <small class="text-muted time">09:08 am</small>
                    <span class="text-success check-message-icon"
                      ><em class="ri-check-double-line align-bottom"></em
                    ></span>
                  </div>
                </div>
              </div>
            </li>
            <!-- chat-list -->

            <li class="chat-list left">
              <div class="conversation-list">
                <div class="chat-avatar">
                  <img src="@/assets/images/users/avatar-2.jpg" alt="" />
                </div>
                <div class="user-chat-content">
                  <div class="ctext-wrap">
                    <div class="ctext-wrap-content">
                      <p class="mb-0 ctext-content">
                        Yeah everything is fine. Our next meeting tomorrow at
                        10.00 AM
                      </p>
                    </div>
                    <div class="dropdown align-self-start message-box-drop">
                      <a
                        class="dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <em class="ri-more-2-fill"></em>
                      </a>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#"
                          ><em
                            class="ri-reply-line me-2 text-muted align-bottom"
                          ></em
                          >Reply</a
                        >
                        <a class="dropdown-item" href="#"
                          ><em
                            class="ri-share-line me-2 text-muted align-bottom"
                          ></em
                          >Forward</a
                        >
                        <a class="dropdown-item" href="#"
                          ><em
                            class="ri-file-copy-line me-2 text-muted align-bottom"
                          ></em
                          >Copy</a
                        >
                        <a class="dropdown-item" href="#"
                          ><em
                            class="ri-bookmark-line me-2 text-muted align-bottom"
                          ></em
                          >Bookmark</a
                        >
                        <a class="dropdown-item delete-item" href="#"
                          ><em
                            class="ri-delete-bin-5-line me-2 text-muted align-bottom"
                          ></em
                          >Delete</a
                        >
                      </div>
                    </div>
                  </div>
                  <div class="ctext-wrap">
                    <div class="ctext-wrap-content">
                      <p class="mb-0 ctext-content">
                        Hey, I'm going to meet a friend of mine at the
                        department store. I have to buy some presents for my
                        parents 🎁.
                      </p>
                    </div>
                    <div class="dropdown align-self-start message-box-drop">
                      <a
                        class="dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <em class="ri-more-2-fill"></em>
                      </a>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#"
                          ><em
                            class="ri-reply-line me-2 text-muted align-bottom"
                          ></em
                          >Reply</a
                        >
                        <a class="dropdown-item" href="#"
                          ><em
                            class="ri-share-line me-2 text-muted align-bottom"
                          ></em
                          >Forward</a
                        >
                        <a class="dropdown-item" href="#"
                          ><em
                            class="ri-file-copy-line me-2 text-muted align-bottom"
                          ></em
                          >Copy</a
                        >
                        <a class="dropdown-item" href="#"
                          ><em
                            class="ri-bookmark-line me-2 text-muted align-bottom"
                          ></em
                          >Bookmark</a
                        >
                        <a class="dropdown-item delete-item" href="#"
                          ><em
                            class="ri-delete-bin-5-line me-2 text-muted align-bottom"
                          ></em
                          >Delete</a
                        >
                      </div>
                    </div>
                  </div>
                  <div class="conversation-name">
                    <small class="text-muted time">09:10 am</small>
                    <span class="text-success check-message-icon"
                      ><em class="ri-check-double-line align-bottom"></em
                    ></span>
                  </div>
                </div>
              </div>
            </li>
            <!-- chat-list -->

            <li class="chat-list right">
              <div class="conversation-list">
                <div class="user-chat-content">
                  <div class="ctext-wrap">
                    <div class="ctext-wrap-content">
                      <p class="mb-0 ctext-content">Wow that's great</p>
                    </div>
                    <div class="dropdown align-self-start message-box-drop">
                      <a
                        class="dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <em class="ri-more-2-fill"></em>
                      </a>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#"
                          ><em
                            class="ri-reply-line me-2 text-muted align-bottom"
                          ></em
                          >Reply</a
                        >
                        <a class="dropdown-item" href="#"
                          ><em
                            class="ri-share-line me-2 text-muted align-bottom"
                          ></em
                          >Forward</a
                        >
                        <a class="dropdown-item" href="#"
                          ><em
                            class="ri-file-copy-line me-2 text-muted align-bottom"
                          ></em
                          >Copy</a
                        >
                        <a class="dropdown-item" href="#"
                          ><em
                            class="ri-bookmark-line me-2 text-muted align-bottom"
                          ></em
                          >Bookmark</a
                        >
                        <a class="dropdown-item delete-item" href="#"
                          ><em
                            class="ri-delete-bin-5-line me-2 text-muted align-bottom"
                          ></em
                          >Delete</a
                        >
                      </div>
                    </div>
                  </div>
                  <div class="conversation-name">
                    <small class="text-muted time">09:12 am</small>
                    <span class="text-success check-message-icon"
                      ><em class="ri-check-double-line align-bottom"></em
                    ></span>
                  </div>
                </div>
              </div>
            </li>
            <!-- chat-list -->

            <li class="chat-list left">
              <div class="conversation-list">
                <div class="chat-avatar">
                  <img src="@/assets/images/users/avatar-2.jpg" alt="" />
                </div>
                <div class="user-chat-content">
                  <div class="ctext-wrap">
                    <div class="message-img mb-0">
                      <div class="message-img-list">
                        <div>
                          <a
                            class="popup-img d-inline-block"
                            href="@/assets/images/small/img-1.jpg"
                          >
                            <img
                              src="@/assets/images/small/img-1.jpg"
                              alt=""
                              class="rounded border"
                            />
                          </a>
                        </div>
                        <div class="message-img-link">
                          <ul class="list-inline mb-0">
                            <li class="list-inline-item dropdown">
                              <a
                                class="dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <em class="ri-more-fill"></em>
                              </a>
                              <div class="dropdown-menu">
                                <a
                                  class="dropdown-item"
                                  href="@/assets/images/small/img-1.jpg"
                                  download=""
                                  ><em
                                    class="ri-download-2-line me-2 text-muted align-bottom"
                                  ></em
                                  >Download</a
                                >
                                <a class="dropdown-item" href="#"
                                  ><em
                                    class="ri-reply-line me-2 text-muted align-bottom"
                                  ></em
                                  >Reply</a
                                >
                                <a class="dropdown-item" href="#"
                                  ><em
                                    class="ri-share-line me-2 text-muted align-bottom"
                                  ></em
                                  >Forward</a
                                >
                                <a class="dropdown-item" href="#"
                                  ><em
                                    class="ri-bookmark-line me-2 text-muted align-bottom"
                                  ></em
                                  >Bookmark</a
                                >
                                <a class="dropdown-item delete-item" href="#"
                                  ><em
                                    class="ri-delete-bin-5-line me-2 text-muted align-bottom"
                                  ></em
                                  >Delete</a
                                >
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div class="message-img-list">
                        <div>
                          <a
                            class="popup-img d-inline-block"
                            href="@/assets/images/small/img-2.jpg"
                          >
                            <img
                              src="@/assets/images/small/img-2.jpg"
                              alt=""
                              class="rounded border"
                            />
                          </a>
                        </div>
                        <div class="message-img-link">
                          <ul class="list-inline mb-0">
                            <li class="list-inline-item dropdown">
                              <a
                                class="dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <em class="ri-more-fill"></em>
                              </a>
                              <div class="dropdown-menu">
                                <a
                                  class="dropdown-item"
                                  href="@/assets/images/small/img-2.jpg"
                                  download=""
                                  ><em
                                    class="ri-download-2-line me-2 text-muted align-bottom"
                                  ></em
                                  >Download</a
                                >
                                <a class="dropdown-item" href="#"
                                  ><em
                                    class="ri-reply-line me-2 text-muted align-bottom"
                                  ></em
                                  >Reply</a
                                >
                                <a class="dropdown-item" href="#"
                                  ><em
                                    class="ri-share-line me-2 text-muted align-bottom"
                                  ></em
                                  >Forward</a
                                >
                                <a class="dropdown-item" href="#"
                                  ><em
                                    class="ri-bookmark-line me-2 text-muted align-bottom"
                                  ></em
                                  >Bookmark</a
                                >
                                <a class="dropdown-item delete-item" href="#"
                                  ><em
                                    class="ri-delete-bin-5-line me-2 text-muted align-bottom"
                                  ></em
                                  >Delete</a
                                >
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="conversation-name">
                    <small class="text-muted time">09:30 am</small>
                    <span class="text-success check-message-icon"
                      ><em class="ri-check-double-line align-bottom"></em
                    ></span>
                  </div>
                </div>
              </div>
            </li>
            <!-- chat-list -->
          </ul>
        </div>
      </div>
      <div class="border-top border-top-dashed">
        <div class="row g-2 mx-3 mt-2 mb-3">
          <div class="col">
            <div class="position-relative">
              <input
                type="text"
                class="form-control border-light bg-light"
                placeholder="Enter Message..."
              />
            </div>
          </div>
          <!-- end col -->
          <div class="col-auto">
            <button type="submit" class="btn btn-info">
              <span class="d-none d-sm-inline-block me-2">Send</span>
              <em class="mdi mdi-send float-end"></em>
            </button>
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->
      </div>
    </div>
    <!-- end cardbody -->
  </div>
  <!-- end card -->
</template>
