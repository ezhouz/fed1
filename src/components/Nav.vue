<template>
  <div class="navbar-container">
    <nav>
      <ul class="navbar-list">
        <li
          class="navbar-list__item"
          v-for="(navitem, index) in navitems"
          :key="index"
          :class="{ active: navitem.itemSelected == true }"
          @click="setActive(navitem, index)"
        >
          <span class="navbar-list__item__name">
            {{ navitem.name }}
          </span>

          <span class="navbar-list__item__arrow">
            <span v-if="navitem.itemSelected === false">
              <font-awesome-icon :icon="['fas', 'angle-down']" />
            </span>

            <span v-else>
              <font-awesome-icon :icon="['fas', 'angle-up']" />
            </span>
          </span>
     
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: function () {
    return {
      navitems: [
        { name: "Item 1", itemSelected: false },
        { name: "Item 2", itemSelected: false },
        { name: "Item 3", itemSelected: false },
        { name: "Item 4", itemSelected: false },
      ]
    };
  },
  methods: {
    setActive(navitem) {
      this.navitems.forEach(item => {
        item.name === navitem.name ? item.itemSelected = !item.itemSelected : item.itemSelected = false
      });
    },
  },
};
</script>

<style scoped>
nav {
  border-bottom: 1px solid #9b9b9b;
}
.navbar-list {
  width: 100%;
  display: flex;
  opacity: 0.5;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.navbar-list__item {
  height: 5rem;
  width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  cursor: pointer;
}
.navbar-list__item__name {
  margin: 0 0.8rem 1rem 0;
}
.navbar-list__item__arrow {
  color: #96151d;
}
.navbar-list__item.active {
  background: #fff;
}
</style>