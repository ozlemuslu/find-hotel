<template>
  <div>
    <sort-by />
    <card />
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
