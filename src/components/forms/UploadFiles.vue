<template>
  <form @submit.prevent="sendFile" enctype="multipart/form-data">
    <div class="field">
      <input @change="seleFile" ref="file" type="file" />
    </div>

    <div class="field"></div>
  </form>
</template>

<script>
export default {
  name: "UploadFiles",
  data() {
    return {
      file: "",
    };
  },
  methods: {
    selectFile() {
      this.file = this.$refs.file.files[0];
    },
    async sendfile() {
      const formData = new formData();
      formData.append("file", this.file);
      try {
        const response = await this.axios.post(`users/create`, formData);
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
  },
};
</script>

<style>
</style>