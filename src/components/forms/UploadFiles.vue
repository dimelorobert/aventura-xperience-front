<template>
  <form @submit.prevent="onUpload" enctype="multipart/form-data">
    <div class="field">
      <input @change="onFileSelected" type="file" />
    </div>

    <div class="container-btn"><button class="btn-dark">Subir</button></div>
  </form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "UploadFiles",
  data() {
    return {
      selectedFile: null,
    };
  },
  methods: {
    ...mapActions("usersMod", ["editUser"]),

    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
    onUpload() {
      const formData = new FormData();
      formData.append(
        "image",
        this.selectedFile,
        this.selectedFile.name
      );
      this.editUser(formData);
    },
  },
};
</script>

<style>
</style>