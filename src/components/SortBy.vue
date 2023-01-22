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
            <a class="dropdown-item" href="#">
              {{ $t("common.point") }}
              {{ $t("common.increasing") }}
            </a>
            <a class="dropdown-item" href="#">
              {{ $t("common.point") }}
              {{ $t("common.decsending") }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.sort-by-wrapper {
  border-radius: 6px;
  box-shadow: 0 1px 5px 0 rgb(0 0 0 / 15%);
  background-color: #fff;
}
</style>
