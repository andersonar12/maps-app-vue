import { GetterTree } from "vuex";
import { MapState } from "./state";
import { StateInterface } from "../index";

const getters: GetterTree<MapState, StateInterface> = {
  isMapReady: (state) => !!state.map,
};

export default getters;
