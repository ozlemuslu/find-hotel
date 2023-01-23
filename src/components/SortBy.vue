<template>
  <div class="sort-by-wrapper mb-3">
    <div class="row">
      <div class="col-9"></div>
      <div class="col-3 d-flex justify-content-end">
        <div class="dropdown">
          <button
            id="dropdownMenuButton"
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {{ $t("common.sortBy") }}
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <div
              class="dropdown-item"
              @click="$emit('sortByAscendingHotelPoint')"
            >
              {{ $t("common.point") }}
              {{ $t("common.increasing") }}
            </div>
            <div
              class="dropdown-item"
              @click="$emit('sortByDescendingHotelPoint')"
            >
              {{ $t("common.point") }}
              {{ $t("common.decsending") }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
