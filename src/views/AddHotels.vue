<template>
  <div>
    <div class="form-group">
      <label class="d-flex justify-content-start" for="exampleInputEmail1">
        {{ $t("addHotels.hotelName") }}
      </label>
      <input v-model="hotelName" class="form-control" type="text" />
    </div>
    <div class="form-group">
      <label class="d-flex justify-content-start" for="exampleInputEmail1">
        {{ $t("addHotels.hotelAddress") }}
      </label>
      <input v-model="hotelAdress" class="form-control" type="text" />
    </div>
    <div class="d-flex justify-content-start">
      <button
        class="btn btn-primary w-100"
        :disabled="disabledSubmitButton"
        @click="addHotel()"
      >
        {{ $t("common.add") }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddHotels",
  data() {
    return {
      hotelList: [],
      hotelName: "",
      hotelAdress: "",
      hotelRate: 0,
    };
  },
  computed: {
    disabledSubmitButton() {
      return this.hotelAdress === "" || this.hotelName === "";
    },
  },
  methods: {
    addHotel() {
      const id = "id" + new Date().getTime();
      const hotel = {
        id: id,
        hotelName: this.hotelName,
        hotelAdress: this.hotelAdress,
        saveDateTime: new Date().getTime(),
        hotelRate: this.hotelRate,
      };
      this.hotelList.push(hotel);
      localStorage.setItem("HOTEL_LIST", JSON.stringify(this.hotelList));
    },
  },
};
</script>

<style></style>
