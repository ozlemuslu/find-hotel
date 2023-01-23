<template>
  <modal name="eraseConfirmModal" width="400" height="auto">
    <div class="modal-body">{{ $t("common.eraseConfirm") }}</div>
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
