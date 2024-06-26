import { StateInterface } from "@/store";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

export const usePlacesStore = () => {
  const store = useStore<StateInterface>();
  onMounted(() => {
    if (!store.getters["places/isUserLocationReady"]) {
      store.dispatch("places/getInitialLocation");
    }
  });
  return {
    // State
    isLoading: computed(() => store.state.places.isLoading),
    isLoadingPlaces: computed(() => store.state.places.isLoadingPlaces),
    places: computed(() => store.state.places.places),
    userLocation: computed(() => store.state.places.userLocation),
    // Getters
    isUserLocationReady: computed(() => store.getters["places/isUserLocationReady"]),
    // Actions
    searchPlacesByTerm: (query = "") => store.dispatch("places/searchPlacesByTerm", query),
  };
};
