import { Feature } from "@/interfaces/places";
import { StateInterface } from "@/store";
import { computed } from "vue";
import { useStore } from "vuex";
import { LngLat } from "../store/map/actions";

export const useMapStore = () => {
  const store = useStore<StateInterface>();
  return {
    // State
    map: computed(() => store.state.map.map),
    distance: computed(() => store.state.map.distance),
    duration: computed(() => store.state.map.duration),

    // Getters
    isMapReady: computed(() => store.getters["map/isMapReady"]),
    // Mutations
    setMap: (map: mapboxgl.Map) => store.commit("map/setMap", map),
    setPlaceMarers: (places: Feature[]) => store.commit("map/setPlaceMarkers", places),
    // Actions
    getRouteBetweenPoints: (start: LngLat, end: LngLat) =>
      store.dispatch("map/getRouteBetweenPoints", { start, end }),
  };
};
