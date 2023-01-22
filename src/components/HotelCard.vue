<template>
  <div>
    <div v-for="hotel in pageOfItems" :key="hotel.id" class="row mb-3">
      <div class="col-12 col-lg-4 hotel-image-wrapper">
        <img class="w-100" src="../assets/hotelImage.png" alt="" />
      </div>
      <div class="col-12 col-lg-8">
        <div class="card h-100 card-info-wrapper">
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
                {{ hotel.hotelRate }} {{ $t("common.point") }}
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-start rating-buttons">
            <button type="button" class="btn btn-outline-info mr-2">
              {{ $t("addHotels.increasePoint") }}
            </button>
            <button type="button" class="btn btn-outline-info">
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
        :pageSize="pageSize"
        @changePage="onChangePage"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
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
    };
  },
  created() {
    this.hotelList = JSON.parse(localStorage.getItem("HOTEL_LIST"));
  },
  methods: {
    onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
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
</style>
