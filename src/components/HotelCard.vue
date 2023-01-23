<template>
  <div>
    <erase-confirm-modal />
    <div v-for="hotel in pageOfItems" :key="hotel.id" class="row mb-3">
      <div class="col-12 col-lg-4 hotel-image-wrapper">
        <img class="w-100" src="../assets/hotelImage.png" alt="" />
      </div>
      <div class="col-12 col-lg-8">
        <div class="card h-100 card-info-wrapper">
          <div class="d-flex justify-content-end pr-1 pt-2">
            <button
              class="btn btn-danger mr-2"
              @click="openConfirmEraseModal(hotel.id)"
            >
              {{ $t("common.erase") }}
            </button>
          </div>
          <div class="card-body d-flex">
            <div class="col-6 p-0">
              <h5 class="card-title d-flex justify-content-start">
                {{ hotel.hotelName }}
              </h5>
              <div class="d-flex justify-content-start">
                {{ hotel.hotelAddress }}
              </div>
            </div>
            <div class="col-6 d-flex justify-content-end">
              <div class="d-flex justify-content-start">
                {{ hotel.hotelPoint }} {{ $t("common.point") }}
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-start rating-buttons">
            <button
              type="button"
              class="btn btn-outline-info mr-2"
              @click="increasePoint(hotel.hotelPoint, hotel.id)"
            >
              {{ $t("addHotels.increasePoint") }}
            </button>
            <button
              type="button"
              class="btn btn-outline-info"
              @click="decreasePoint(hotel.hotelPoint, hotel.id)"
            >
              {{ $t("addHotels.decreasePoint") }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer pb-3 pt-3">
      <jw-pagination
        :items="hotelList"
        :labels="customLabels"
        :page-size="pageSize"
        @changePage="onChangePage"
      />
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
      this.$modal.show("eraseConfirmModal", hotelId);
    },
  },
};
</script>

<style lang="scss">
.hotel-image-wrapper {
  img {
    border-radius: 6px;
  }
}

.card-info-wrapper {
  border-radius: 6px;
  box-shadow: 0 1px 5px 0 rgb(0 0 0 / 15%);
  background-color: #fff;
}

.rating-buttons {
  margin-top: auto;
  padding: 1.25rem;
}

.erase-btn {
  font-size: 30px;
  font-weight: bold;
  color: #000;
  cursor: pointer;
  height: 10px;
}
</style>
