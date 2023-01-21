<template>
  <div id="app" class="container">
    <div class="d-flex justify-content-between">
      <div class="hotel-icon" @click="$router.push({ name: 'FindHotels' })">
        <img src="./assets/hotel.png" alt="" />
      </div>
      <button
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
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.hotel-icon {
  cursor: pointer;
}
</style>
