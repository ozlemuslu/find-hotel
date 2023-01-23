<template>
  <modal name="successModal" width="400" height="auto">
    <div class="modal-body">{{ $t("addHotels.successModal") }}</div>
    <div class="d-flex justify-content-center">
      <button type="button" class="btn btn-outline-info" @click="quit()">
        {{ $t("common.quit") }}
      </button>
    </div>
    <br />
  </modal>
</template>
<script>
export default {
  name: "SuccessModal",
  methods: {
    quit() {
      this.$emit("closeModal");
    },
  },
};
</script>

<style></style>
