import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";
// import * as TastyBurgerButton from 'vue-tasty-burgers';
import {library} from '@fortawesome/fontawesome-svg-core';
import {
    faBars,
    faHatChef,
    faHouse,
    faListUl,
    faMapMarkerAlt,
    faCheckCircle,
    faMinus,
    faNewspaper,
    faPhoneAlt,
    faPlus,
    faTimes,
    faAngleRight,
    faAngleDown,
} from '@fortawesome/pro-solid-svg-icons';
import {
    faGoogle,
    faApple,
} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

library.add(
    faBars,
    faHatChef,
    faHouse,
    faListUl,
    faMapMarkerAlt,
    faCheckCircle,
    faMinus,
    faNewspaper,
    faPhoneAlt,
    faPlus,
    faTimes,
    faAngleRight,
    faAngleDown,
    faGoogle,
    faApple,
);

const app = createApp(App).use(store).use(router).mount('#app');

app.component('FontAwesomeIcon', FontAwesomeIcon);

// app.use(TastyBurgerButton);
// Vue.use(BootstrapVue);
