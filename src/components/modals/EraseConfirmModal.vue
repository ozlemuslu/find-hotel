<template>
  <modal name="eraseConfirmModal" width="400" height="auto">
    <div class="margin-modal">
      <div class="modal-body">Silmek istediğinize emin misiniz ?</div>
      <div class="d-flex justify-content-center">
        <button
          type="button"
          class="btn btn-outline-info mr-2"
          @click="eraseHotel()"
        >
          {{ $t("common.erase") }}
        </button>
        <button type="button" class="btn btn-outline-info" @click="cancel()">
          {{ $t("common.cancel") }}
        </button>
      </div>
    </div>
    <br />
  </modal>
</template>
<script>
export default {
  name: "eraseConfirmModal",
  methods: {
    cancel() {
      this.$modal.hide("eraseConfirmModal");
    },
    eraseHotel() {
      this.$emit("eraseHotel");
    },
  },
};
</script>

<style></style>
