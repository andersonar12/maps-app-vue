import { MutationTree } from "vuex";
import { PlacesState } from "./state";
import { Feature } from "@/interfaces/places";

const mutation: MutationTree<PlacesState> = {
  setLngLat(state: PlacesState, coords: { lng: number; lat: number }) {
    // a line to prevent linter errors
    state.userLocation = [coords.lng, coords.lat];
    state.isLoading = false;
  },

  setPlaces(state: PlacesState, places: Feature[]) {
    state.places = places;
    state.isLoadingPlaces = false;
  },

  setIsLoadingPlaces(state: PlacesState) {
    state.isLoadingPlaces = true;
  },
};

export default mutation;
