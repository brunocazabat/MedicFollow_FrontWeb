<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    close: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      default: "max-width",
    },
  },
  emits: ["closeModal"],
  methods: {
    closing() {
      this.$emit("closeModal");
    },
  },
};
</script>

<template>
  <div
    class="overlay"
    v-on:click="
      (e) => {
        if (e.currentTarget === e.target) {
          // Close iff clicked on the overlay and not on the modal
          return closing();
        }
      }
    "
  >
    <div
      class="modal"
      :class:large="type === 'large'"
      :class:medium="type === 'medium'"
      :class:small="type === 'small'"
    >
      <div class="header">
        <h3>{{ title }}</h3>
        <div v-if="close" class="close" on:click="{onClose}">
          <h4 class="text-primary">Close Me</h4>
        </div>
      </div>
      <div class="modal-body">
        <slot></slot>
      </div>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<style>
.overlay {
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(160, 161, 171, 0.6);
  align-items: flex-start;
  justify-content: center;
  display: flex;
  z-index: 1;
}

.modal {
  margin-top: 4rem;
  display: flex;
  background-color: #fff;
  flex-direction: column;
  border-radius: 4px;
  height: 20vh;
  width: 40vh;
}

.header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e0e6ed;
  margin: 0;
}

.header .close {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.modal h3 {
  font-weight: 700;
  font-size: 20px;
  padding: 12px 20px;
  line-height: 26px;
}

/* .modal .modal-body {
  padding: 20px;
} */

.modal .footer {
  display: flex;
  padding: 20px;
  border-top: 1px solid #e0e6ed;
  gap: 10px;
  justify-content: flex-end;
}

@media (min-width: 450px) {
  .modal.large {
    max-width: 60%;
  }

  .modal.medium {
    max-width: 40%;
  }

  .modal.small {
    max-width: 25%;
  }
}
</style>
