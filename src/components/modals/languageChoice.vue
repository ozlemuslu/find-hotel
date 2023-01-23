<template>
  <modal name="languageChoice" width="400" height="auto">
    <div class="modal-body">
      <div v-for="lang in availableLang" :key="lang">
        <div class="d-flex justify-content-start p-1">
          <input v-model="picked" type="radio" :value="lang" class="mr-1" />
          {{ lang }}
        </div>
      </div>
      <div class="d-flex justify-content-center mt-3">
        <button type="button" class="btn btn-outline-info mr-2" @click="save()">
          {{ $t("common.save") }}
        </button>
        <button type="button" class="btn btn-outline-info" @click="close()">
          {{ $t("common.quit") }}
        </button>
      </div>
    </div>
  </modal>
</template>
<script>
export default {
  name: "LanguageChoice",
  data() {
    return {
      picked: this.$store.state.availableLocales[this.$i18n.locale],
    };
  },
  computed: {
    availableLang() {
      return this.$store.state.availableLocales;
    },
  },
  methods: {
    save() {
      const index = Object.values(this.availableLang).indexOf(this.picked);
      this.$i18n.locale = Object.keys(this.availableLang)[index];
      this.close();
    },
    close() {
      this.$modal.hide("languageChoice");
    },
  },
};
</script>

<style></style>
