import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch, faAngleDown, faAngleUp);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
