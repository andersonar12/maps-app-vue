<template>
  <div v-if="isLoadingPlaces" class="alert alert-primary text-center">
    <strong>Cargando</strong>
    <span>Espere por favor...</span>
  </div>
  <ul v-else class="list-group mt-1">
    <li
      :class="
        'list-group-item list-group-item-action text-start ' +
        (place.id === activePlaceId ? 'active' : '')
      "
      v-for="place in places"
      :key="place.id"
      @click="onPlaceClick(place)"
    >
      <h6 class="mb-0">{{ place.text }}</h6>
      <p class="mb-0">{{ place.place_name }}</p>
      <div align="end">
        <button
          :class="
            'btn btn-sm ' +
            (place.id === activePlaceId ? 'btn-outline-light' : 'btn-outline-primary')
          "
        >
          Direcciones
        </button>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useStore } from "vuex";
import { Feature } from "../interfaces/places";
import { useMapStore } from "@/composables/useMapStore";
import { usePlacesStore } from "@/composables/usePlacesStore";

const store = useStore();

const { isLoadingPlaces, places, userLocation } = usePlacesStore();
const { map, setPlaceMarers, getRouteBetweenPoints } = useMapStore();

const activePlaceId = ref("");

const onPlaceClick = (place: Feature) => {
  activePlaceId.value = place.id
  const [lng, lat] = place.center;

  map.value?.flyTo({
    center: [lng, lat],
    zoom: 14,
  });
};

const getRouteDirections = (place: Feature) => {
  if (!userLocation.value) return;


  const [lng, lat] = place.center;
  const [startLng, startLat] = userLocation.value!;
  const start: [number, number] = [startLng, startLat];
  const end: [number, number] = [lng, lat];

  getRouteBetweenPoints(start, end);
};

watch(places, (newPlaces) => {
  activePlaceId.value = "";
  setPlaceMarers(newPlaces);
});
</script>

<style scoped>
li {
  cursor: pointer;
}

h5 {
  font-size: 15px!;
}

p {
  font-size: 12px;
}
</style>
