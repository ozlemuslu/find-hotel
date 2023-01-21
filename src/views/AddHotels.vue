<template>
  <div class="container">
    <form>
      <div class="form-group">
        <label class="d-flex justify-content-start" for="exampleInputEmail1">
          Otel Adı
        </label>
        <input class="form-control" type="text" placeholder="Default input" />
      </div>
      <div class="form-group">
        <label class="d-flex justify-content-start" for="exampleInputEmail1">
          Otel Adresi
        </label>
        <input class="form-control" type="text" placeholder="Default input" />
      </div>
      <form>
        <div class="form-group">
          <label
            class="d-flex justify-content-start"
            for="exampleFormControlFile1"
          >
            Otel Resmi Yükle
          </label>
          <input
            id="exampleFormControlFile1"
            type="file"
            class="form-control-file"
          />
        </div>
      </form>
      <div class="form-group form-check">
        <input id="exampleCheck1" type="checkbox" class="form-check-input" />
        <label class="form-check-label" for="exampleCheck1">
          Koşulları onaylıyorum.
        </label>
      </div>
      <button class="btn btn-primary" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddHotels",
};
</script>

<style></style>
