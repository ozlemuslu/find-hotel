<template>
  <div>
    <erase-confirm-modal @eraseHotel="eraseHotel()" />
    <div v-if="hotelList.length">
      <div
        v-for="(hotel, index) in pageOfItems"
        :key="hotel.id"
        class="row mb-3 card-hotel mx-0"
        @mouseover="mouseover(index)"
        @mouseleave="mouseleave(index)"
      >
        <div class="col-lg-4 col-xs-12 hotel-image-wrapper p-0">
          <img class="w-100" src="../assets/hotelImage.png" alt="" />
        </div>
        <div class="col-lg-8 col-xs-12 p-0">
          <div class="card h-100 card-info-wrapper">
            <div class="card-body d-flex justify-content-between">
              <div class="p-0">
                <h5 class="card-title">
                  {{ hotel.hotelName }}
                </h5>
                <div class="d-flex justify-content-start">
                  {{ hotel.hotelAddress }}
                </div>
              </div>
              <div class="">
                <div
                  class="rating p-2 rating-box"
                  :class="{
                    'rating-fifth': hotel.hotelPoint <= 2,
                    'rating-forth': hotel.hotelPoint <= 4,
                    'rating-third': hotel.hotelPoint <= 6,
                    'rating-second': hotel.hotelPoint <= 8,
                    'rating-first': hotel.hotelPoint <= 10,
                  }"
                >
                  {{ hotel.hotelPoint }}
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-between rating-buttons">
              <div>
                <button
                  type="button"
                  class="btn btn-outline-success mr-2"
                  @click="increasePoint(hotel.hotelPoint, hotel.id)"
                >
                  {{ $t("addHotels.increasePoint") }}
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger"
                  @click="decreasePoint(hotel.hotelPoint, hotel.id)"
                >
                  {{ $t("addHotels.decreasePoint") }}
                </button>
              </div>
              <div class="d-flex col-lg-1 pr-1">
                <button
                  class="btn btn-danger mr-2"
                  @click="openConfirmEraseModal(hotel.id)"
                >
                  {{ $t("common.erase") }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pb-3 pt-3">
        <jw-pagination
          :items="hotelList"
          :labels="customLabels"
          :page-size="pageSize"
          @changePage="onChangePage"
        />
      </div>
    </div>
    <div v-else>
      {{ $t("hotels.noHotel") }}
    </div>
  </div>
</template>

<script>
import EraseConfirmModal from "./modals/EraseConfirmModal.vue";
export default {
  name: "Card",
  components: { EraseConfirmModal },
  data() {
    return {
      hotelList: [],
      pageOfItems: [],
      customLabels: {
        first: "<<",
        last: ">>",
        previous: "<",
        next: ">",
      },
      pageSize: 5,
      hotelPoint: null,
      eraseHotelId: null,
    };
  },
  created() {
    if (localStorage.getItem("HOTEL_LIST")) {
      const localStorageHotelList = JSON.parse(
        localStorage.getItem("HOTEL_LIST")
      );
      this.hotelList = this.sortByDescendingDateTime(localStorageHotelList);
    }
  },
  methods: {
    onChangePage(hotelList) {
      this.pageOfItems = hotelList;
    },
    increasePoint(hotelPoint, hotelId) {
      this.hotelPoint = hotelPoint !== 10 ? hotelPoint + 1 : hotelPoint;
      this.changeHotelListPoint(hotelId);
    },
    decreasePoint(hotelPoint, hotelId) {
      this.hotelPoint = hotelPoint !== 0 ? hotelPoint - 1 : hotelPoint;
      this.changeHotelListPoint(hotelId);
    },
    changeHotelListPoint(hotelId) {
      this.hotelList = this.hotelList.map((item) => {
        if (item.id === hotelId) {
          item.hotelPoint = this.hotelPoint;
        }
        return item;
      });
      this.sortByDescendingHotelPoint();

      localStorage.setItem("HOTEL_LIST", JSON.stringify(this.hotelList));
    },
    sortByDescendingDateTime(list) {
      return list.sort((a, b) => b.saveDateTime - a.saveDateTime);
    },
    sortByDescendingHotelPoint() {
      this.hotelList = this.hotelList.sort((a, b) => {
        if (a.hotelPoint === b.hotelPoint) {
          return b.saveDateTime - a.saveDateTime;
        } else {
          return b.hotelPoint - a.hotelPoint;
        }
      });
    },
    sortByAscendingHotelPoint() {
      this.hotelList = this.hotelList.sort((a, b) => {
        if (a.hotelPoint === b.hotelPoint) {
          return a.saveDateTime - b.saveDateTime;
        } else {
          return a.hotelPoint - b.hotelPoint;
        }
      });
    },
    openConfirmEraseModal(hotelId) {
      this.eraseHotelId = hotelId;
      this.$modal.show("eraseConfirmModal");
    },
    eraseHotel() {
      this.hotelList = this.hotelList.filter(
        (item) => item.id !== this.eraseHotelId
      );
      this.sortByDescendingHotelPoint();
      localStorage.setItem("HOTEL_LIST", JSON.stringify(this.hotelList));
      this.$modal.hide("eraseConfirmModal");
    },
    hotelListLength() {
      return this.hotelList.length > 1;
    },
    mouseover(index) {
      return (this.hotelList[index].active = true);
    },
    mouseleave(index) {
      return (this.hotelList[index].active = false);
    },
  },
};
</script>
