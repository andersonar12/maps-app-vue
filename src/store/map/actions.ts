import { ActionTree } from "vuex";
import { MapState } from "./state";
import { StateInterface } from "../index";
import { directionsApi } from "@/apis/directionsApi";

export type LngLat = [number, number];

const actions: ActionTree<MapState, StateInterface> = {
  async getRouteBetweenPoints({ commit }, { start, end }: { start: LngLat; end: LngLat }) {
    const resp = await directionsApi.get<DirectionsResponse>(
      `/${start.join(",")};${end.join(",")}`
    );

    // console.log(resp.data.routes[0]?.geometry.coordinates);

    const { distance, duration } = resp.data.routes[0];

    commit("setDistanceDuration", { distance, duration });
    // State distance
    commit("setRoutePolyline", resp.data.routes[0]?.geometry.coordinates);
  },
};

export default actions;
