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
      <input v-model="hotelAddress" class="form-control" type="text" />
    </div>
    <div class="d-flex justify-content-start pt-3">
      <button
        v-if="!showAddedHotelButton"
        class="btn btn-primary w-100"
        :disabled="disabledSubmitButton"
        @click="addHotel()"
      >
        {{ $t("common.add") }}
      </button>
      <button
        v-else
        class="btn btn-success w-100"
        :disabled="disabledSubmitButton"
        @click="addHotel()"
      >
        {{ $t("common.added") }}
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
      hotelAddress: "",
      hotelRate: 0,
      showAddedButton: false,
    };
  },
  computed: {
    disabledSubmitButton() {
      return this.hotelAddress === "" || this.hotelName === "";
    },
    showAddedHotelButton() {
      return (
        this.hotelAddress !== "" &&
        this.hotelName !== "" &&
        this.showAddedButton
      );
    },
  },
  watch: {
    hotelName() {
      if (this.hotelName === "") {
        this.showAddedButton = false;
      }
    },
    hotelAddress() {
      if (this.hotelAddress === "") {
        this.showAddedButton = false;
      }
    },
  },

  methods: {
    addHotel() {
      const id = "id" + new Date().getTime();
      const hotel = {
        id: id,
        hotelName: this.hotelName,
        hotelAddress: this.hotelAddress,
        saveDateTime: new Date().getTime(),
        hotelRate: this.hotelRate,
      };

      if (localStorage.getItem("HOTEL_LIST")) {
        this.hotelList = JSON.parse(localStorage.getItem("HOTEL_LIST"));
      }
      this.hotelList.push(hotel);
      localStorage.setItem("HOTEL_LIST", JSON.stringify(this.hotelList));
      this.showAddedButton = true;
    },
  },
};
</script>

<style></style>
