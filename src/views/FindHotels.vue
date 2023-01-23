<template>
  <div>
    <sort-by
      @sortByDescendingHotelPoint="$refs.hotelCard.sortByDescendingHotelPoint()"
      @sortByAscendingHotelPoint="$refs.hotelCard.sortByAscendingHotelPoint()"
    />
    <card ref="hotelCard" />
  </div>
</template>

<script>
import Card from "../components/HotelCard.vue";
import SortBy from "../components/SortBy.vue";

export default {
  name: "FindHotels",
  components: {
    Card,
    SortBy,
  },
};
</script>

<style></style>
