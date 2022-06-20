<script>
  import {
    layoutComputed
  } from "@/state/helpers";

  export default {
    data() {
      return {
        settings: {
          minScrollbarLength: 60,
        },
      };
    },
    computed: {
      ...layoutComputed,
      layoutType: {
        get() {
          return this.$store ? this.$store.state.layout.layoutType : {} || {};
        },
      },
    },

    watch: {
      $route: {
        handler: "onRoutechange",
        immediate: true,
        deep: true,
      },
    },

    mounted() {
      if (document.querySelectorAll(".navbar-nav .collapse")) {
        let collapses = document.querySelectorAll(".navbar-nav .collapse");
        collapses.forEach((collapse) => {
          // Hide sibling collapses on `show.bs.collapse`
          collapse.addEventListener("show.bs.collapse", (e) => {
            e.stopPropagation();
            let closestCollapse = collapse.parentElement.closest(".collapse");
            if (closestCollapse) {
              let siblingCollapses =
                closestCollapse.querySelectorAll(".collapse");
              siblingCollapses.forEach((siblingCollapse) => {
                if (siblingCollapse.classList.contains("show")) {
                  let aChild = siblingCollapse.parentNode.firstChild;
                  if (aChild.hasAttribute("aria-expanded")){
                    aChild.setAttribute("aria-expanded", "false");
                  }
                  siblingCollapse.classList.remove("show");
                }
              });
            } else {
              let getSiblings = (elem) => {
                // Setup siblings array and get the first sibling
                let siblings = [];
                let sibling = elem.parentNode.firstChild;
                // Loop through each sibling and push to the array
                while (sibling) {
                  if (sibling.nodeType === 1 && sibling !== elem) {
                    siblings.push(sibling);
                  }
                  sibling = sibling.nextSibling;
                }
                return siblings;
              };
              let siblings = getSiblings(collapse.parentElement);
              siblings.forEach((item) => {
                if (item.childNodes.length > 2)
                  item.firstElementChild.setAttribute("aria-expanded", "false");
                let ids = item.querySelectorAll("*[id]");
                ids.forEach((item1) => {
                  let aChild = item1.parentNode.firstChild;
                  if (aChild.hasAttribute("aria-expanded")){
                    aChild.setAttribute("aria-expanded", "false");
                  }
                  item1.classList.remove("show");
                  if (item1.childNodes.length > 2) {
                    let val = item1.querySelectorAll("ul li a");

                    val.forEach((subitem) => {
                      if (subitem.hasAttribute("aria-expanded"))
                        subitem.setAttribute("aria-expanded", "false");
                    });
                  }
                });
              });
            }
          });

          // Hide nested collapses on `hide.bs.collapse`
          collapse.addEventListener("hide.bs.collapse", (e) => {
            e.stopPropagation();
            let childCollapses = collapse.querySelectorAll(".collapse");
            childCollapses.forEach((childCollapse) => {
              let childCollapseInstance = childCollapse;
              childCollapseInstance.hide();
            });
          });
        });
      }
    },

    methods: {
      onRoutechange(ele) {
        this.initActiveMenu(ele.path);
        if (document.getElementsByClassName("mm-active").length > 0) {
          const currentPosition = document.getElementsByClassName("mm-active")[0].offsetTop;
          if (currentPosition > 500)
            if (this.$refs.isSimplebar)
              this.$refs.isSimplebar.value.getScrollElement().scrollTop = currentPosition + 300;
        }
      },

      initActiveMenu(ele) {
        setTimeout(() => {
          if (document.querySelector("#navbar-nav")) {
            let a = document.querySelector("#navbar-nav").querySelector('[href="' + ele + '"]');

            if (a) {
              a.classList.add("active");
              let parentCollapseDiv = a.closest(".collapse.menu-dropdown");
              if (parentCollapseDiv) {
                parentCollapseDiv.classList.add("show");
                parentCollapseDiv.parentElement.children[0].classList.add("active");
                parentCollapseDiv.parentElement.children[0].setAttribute("aria-expanded", "true");
                if (parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown")) {
                  parentCollapseDiv.parentElement.closest(".collapse").classList.add("show");
                  if (parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling)
                    parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling.classList.add(
                      "active");
                }
              }
            }
          }
        }, 0);
      },
    },
  };
</script>

<template>
  <div class="container-fluid">
    <div id="two-column-menu"></div>

    <template v-if="layoutType === 'twocolumn'">
    </template>

    <template v-else>
      <ul class="navbar-nav h-100" id="navbar-nav">
        <li class="menu-title">
          <span data-key="t-menu"> {{ $t("t-menu") }}</span>
        </li>
        <li class="nav-item">
          <router-link class="nav-link menu-link" to="/">
            <em class="ri-dashboard-2-line"></em>
            <span style="padding: 7px" data-key="t-home">{{ $t("t-home") }}</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link menu-link" to="/calendar">
            <em class="ri-layout-grid-line"></em>
            <span style="padding: 7px" data-key="t-calendar">{{ $t("t-calendar") }}</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link menu-link" to="/chat">
            <em class="ri-pencil-ruler-2-line"></em>
            <span style="padding: 7px" data-key="t-chat">{{ $t("t-chat") }}</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link menu-link" to="/">
            <em class="ri-account-circle-line"></em>
            <span style="padding: 7px" data-key="t-settings">{{ $t("t-settings") }}</span>
          </router-link>
        </li>
        <!-- end Dashboard Menu -->
        <li class="nav-item">
          <a class="nav-link menu-link" href="#sidebarApps" data-bs-toggle="collapse" role="button"
            aria-expanded="false" aria-controls="sidebarApps">
            <em class="ri-apps-2-line"></em>
            <span style="padding: 7px" data-key="t-contacts" > {{ $t("t-contacts") }}</span>
          </a>
          <div class="collapse menu-dropdown" id="sidebarApps">
            <ul class="nav nav-sm flex-column">
              <li class="nav-item">
                <router-link to="/" class="nav-link" data-key="t-suggest">
                  {{ $t("t-suggest") }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/chat" class="nav-link" data-key="t-report">
                  {{ $t("t-report") }}
                </router-link>
              </li>
            </ul>
          </div>
        </li>
        <li class="menu-title">
          <span data-key="t-others">{{ $t("t-others") }}</span>
        </li>
        <li class="nav-item">
          <router-link class="nav-link menu-link" to="/">
            <em class="ri-pages-line"></em>
            <span style="padding: 7px" data-key="t-terms">{{ $t("t-terms") }}</span>
          </router-link>
        </li>
      </ul>
    </template>
  </div>
  <!-- Sidebar -->
</template>