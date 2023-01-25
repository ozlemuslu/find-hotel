<template>
  <div id="app" class="container">
    <language-choice />
    <div class="d-flex justify-content-between pb-5">
      <div class="hotel-icon" @click="$router.push({ name: 'FindHotels' })">
        <img src="./assets/ets.png" alt="" />
      </div>
      <div>
        <button
          v-if="showAddHotelButton"
          type="button"
          class="btn btn-outline-secondary mr-2"
          @click="openLanguageModal()"
        >
          {{ $store.state.availableLocales[$i18n.locale] }}
        </button>
        <button
          v-if="showAddHotelButton"
          type="button"
          class="btn btn-primary"
          @click="$router.push({ name: 'AddHotels' })"
        >
          {{ $t("hotels.addHotel") }}
        </button>
        <button
          v-if="!showAddHotelButton"
          type="button"
          class="btn btn-primary"
          @click="$router.push({ name: 'FindHotels' })"
        >
          {{ $t("common.backToHomePage") }}
        </button>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import LanguageChoice from "./components/modals/LanguageChoice.vue";

export default {
  name: "App",
  components: { LanguageChoice },
  data() {
    return {
      showAddHotelButton: true,
    };
  },
  watch: {
    $route() {
      this.showAddHotelButton =
        !window.location.pathname.includes("add-hotels");
    },
  },
  created() {
    this.showAddHotelButton = !window.location.pathname.includes("add-hotels");
  },
  methods: {
    openLanguageModal() {
      this.$modal.show("languageChoice");
    },
  },
};
</script>
