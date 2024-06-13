import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken =
  "pk.eyJ1IjoiYW5kZXJzb25hcjEyIiwiYSI6ImNrcWp1dnFqajBhNngzMW12cXY4MjhhM2QifQ.d1WrSOlwb_SjhiTyQScFxQ";

if (!navigator.geolocation) {
  alert("Geolocation is not supported by your browser");
  throw new Error("Geolocation is not supported by your browser");
}

createApp(App).use(store).use(router).mount("#app");
