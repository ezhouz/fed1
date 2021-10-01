<template>
  <div class="homepage-outer-wrapper">
    <div class="homepage-content-wrapper">
      <div class="homepage-text-wrapper homepage-column">
        <h1 class="homepage-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
      </div>

      <div class="homepage-column">
        <div class="homepage-image-wrapper">
          <img
            class="homepage-image"
            src="../assets/images/homepage/homepage-image.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <bottom-search />
  </div>
</template>

<script>
import BottomSearch from "./BottomSearch.vue";

export default {
  name: "home",
  props: {
    msg: String,
  },
  components: {
    BottomSearch,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.homepage-outer-wrapper {
  display: flex;
  flex-direction: column;
  margin: 4rem auto;
}
.homepage-content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  
}
.homepage-text {
  font-size: 6rem;
  color: #4a4a4a;
  width: initial;
}
.homepage-image-wrapper {
  display: flex;
  justify-content: center;
  margin-left: 2rem;
}

@media only screen and (min-width: 768px) {
  .homepage-text {
    font-size: 7.2rem;
    width: 50rem;
  }
  .homepage-outer-wrapper {
    max-width: 1282px;
  }
  .homepage-content-wrapper {
    flex-direction: row;
  }
}
</style>
