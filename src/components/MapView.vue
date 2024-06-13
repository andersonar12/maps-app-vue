<template>
  <div class="map-view" v-if="!isUserLocationReady">
    <div class="loading-map d-flex justify-content-center align-items-center">
      <div class="text-center">
        <h3>Espere por favor</h3>
        <span>Localizando...</span>
      </div>
    </div>
  </div>
  <!-- Map container -->
  <div v-show="isUserLocationReady" id="map" class="map-container" ref="mapElement"></div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import mapboxgl from "mapbox-gl";
import { usePlacesStore } from "../composables/usePlacesStore";
import { useMapStore } from "@/composables/useMapStore";

const mapElement = ref<HTMLDivElement>();

const { userLocation, isUserLocationReady } = usePlacesStore();
const { setMap } = useMapStore();

const mapInit = async () => {
  if (!mapElement.value) throw new Error("Elemento no encontrado");
  if (!userLocation.value) throw new Error("Localización no encontrada");

  await Promise.resolve();

  const map = new mapboxgl.Map({
    container: mapElement.value!,
    style: "mapbox://styles/mapbox/streets-v12",
    center: userLocation.value,
    zoom: 15,
  });

  const myLocationPopup = new mapboxgl.Popup({
    offset: [0, -35],
  })
    .setLngLat(userLocation.value)
    .setHTML(
      ` <h3>Yo</h3> <p>Estoy aqui</p>  <p> Lat: ${userLocation.value[0]} </p> <p>Lng: ${userLocation.value[1]} </p> `
    )
    .addTo(map);
  const myLocationMarker = new mapboxgl.Marker().setLngLat(userLocation.value).addTo(map);

  setMap(map);
};

watch(isUserLocationReady, () => {
  if (isUserLocationReady.value) {
    mapInit();
  }
});
</script>

<style scoped>
.loading-map {
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
}

.map-container {
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: red;
}
</style>
