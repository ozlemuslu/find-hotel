<template>
  <div>
    <success-modal @closeModal="closeModal()" />
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
      <button v-else class="btn btn-success w-100">
        {{ $t("common.added") }}
      </button>
    </div>
  </div>
</template>

<script>
import SuccessModal from "../components/modals/SuccessModal.vue";

export default {
  name: "AddHotels",
  components: { SuccessModal },
  data() {
    return {
      hotelList: [],
      hotelName: "",
      hotelAddress: "",
      hotelPoint: 0,
      showAddedHotelButton: false,
    };
  },
  computed: {
    disabledSubmitButton() {
      return this.hotelAddress === "" || this.hotelName === "";
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
        hotelPoint: this.hotelPoint,
        active: false,
      };

      if (!localStorage.getItem("HOTEL_LIST")) return;

      this.hotelList = JSON.parse(localStorage.getItem("HOTEL_LIST"));
      this.hotelList.push(hotel);
      this.showAddedHotelButton = true;
      localStorage.setItem("HOTEL_LIST", JSON.stringify(this.hotelList));
      this.openSuccessModal();
    },
    openSuccessModal() {
      this.$modal.show("successModal");
    },
    closeModal() {
      this.hotelAddress = "";
      this.hotelName = "";
      this.showAddedHotelButton = false;
      this.$modal.hide("successModal");
    },
  },
};
</script>
