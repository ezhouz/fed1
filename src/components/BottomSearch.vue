<template>
  <div class="bottom-nav-container">
    <p class="bottom-search__text">Lorem Ipsum...</p>
    <div class="bottom-search-icon">
      <font-awesome-icon :icon="['fas', 'search']" />
    </div>
  </div>
</template>

<script>
export default {
  name: "bottomsearch",
};
</script>

<style scoped>
.bottom-nav-container {
  height: 6rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  background-color: #f8f8f8;
  width: 80%;
  margin: 6rem auto;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.bottom-search__text {
    font-size: 2rem;
    margin-left: 1.5rem;
    color: #c2c2c2;
}
.bottom-search-icon {
    font-size: 4rem;
    display: flex;
    align-items: center;
    margin-right: 1.5rem;
    color: #c2c2c2;
}
</style>