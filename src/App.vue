<template>
  <div id="app" class="container">
    <div class="d-flex justify-content-between pb-5">
      <div class="hotel-icon" @click="$router.push({ name: 'FindHotels' })">
        <img src="./assets/ets.png" alt="" />
      </div>
      <button
        v-if="showAddHotelButton"
        type="button"
        class="btn btn-primary"
        @click="$router.push({ name: 'AddHotels' })"
      >
        {{ $t("hotels.addHotel") }}
      </button>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
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
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 24px;
}

.hotel-icon {
  cursor: pointer;
}
</style>
