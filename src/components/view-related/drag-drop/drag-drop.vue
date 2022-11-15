<script>
import BadgeList from "@/components/view-related/badge-list.vue";

export default {
  components: {
    BadgeList,
  },
  emits: ["file-change"],
  data() {
    return {
      file: [],
    };
  },
  methods: {
    // Method to enable the dropping
    enableDrop(event) {
      console.log("enableDrop");
      event.preventDefault();
      event.stopPropagation();
    },

    // Method to handle the dropping
    handleDrop(event) {
      event.preventDefault();
      event.stopPropagation();

      // Looping through the files
      for (let i = 0; i < event.dataTransfer.files.length; i++) {
        // Creating data array
        const data = {
          name: event.dataTransfer.files[i].name,
          size: event.dataTransfer.files[i].size,
          type: event.dataTransfer.files[i].type,
          binary: event.dataTransfer.files[i],
        };

        // Pushing the data to the file array
        this.file.push(data);

        // Emitting the file array
        this.$emit("file-change", this.file);
      }
    },

    // Method to transform the file.size in a human readable format
    humanFileSize(bytes, si) {
      var thresh = si ? 1000 : 1024;
      if (Math.abs(bytes) < thresh) {
        return bytes + " B";
      }
      var units = si
        ? ["kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
        : ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
      var u = -1;
      do {
        bytes /= thresh;
        ++u;
      } while (Math.abs(bytes) >= thresh && u < units.length - 1);
      return bytes.toFixed(1) + " " + units[u];
    },

    // Method to remove from the file array the file that has been dropped
    removeFile(index) {
      this.file.splice(index, 1);

      // Emitting the file array
      this.$emit("file-change", this.file);
    },
  },
};
</script>

<template>
  <div class="drag-drop">
    <div class="filters">
      <div
        class="add-filter"
        v-on:dragenter="enableDrop($event)"
        v-on:dragover="enableDrop($event)"
        v-on:drop="handleDrop($event)"
      >
        <input
          id="fileElem"
          class="fileElem"
          type="file"
          v-on:change="handleUploadedFile($event)"
        />
        <label class="large-size max-width" for="fileElem">{{
          $t("t-select-or-drop-file")
        }}</label>
      </div>
    </div>
  </div>

  <div v-if="file">
    <div v-for="(file, key) in file" :key="key">
      <div class="file-name">
        <BadgeList
          :value="file.name"
          :size="humanFileSize(file.size, true)"
          @on-remove="removeFile(key)"
        />
      </div>
    </div>
  </div>
</template>

<style>
/* Style to make the width match the parent size */

h6 {
  font-size: 12px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.italic {
  font-style: italic;
}
.max-width {
  width: 100%;
  min-height: 150px;
  display: flex;
  min-width: 200px;
}

.drag-drop {
  display: flex;
}

.filters {
  max-width: 400px;
}

.add-filter {
  width: 100%;
  min-width: 230px;
  display: flex;
  justify-content: center;
  border: 1px dashed #333;
  cursor: pointer;
  padding: 4px 0;
  border-radius: 4px;
  transition: background-color 0.2s ease-out;
  position: relative;
}

.add-filter:hover {
  background-color: #eee;
}

:global(.filters svg) {
  pointer-events: none;
}

.large-size {
  font-size: 18px;
  cursor: pointer;
  align-items: center;
  display: flex;
  justify-content: center;
}

.fileElem {
  display: none;
}
</style>
