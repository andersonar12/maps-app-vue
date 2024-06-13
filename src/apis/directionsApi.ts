import axios from "axios";

export const directionsApi = axios.create({
  baseURL: "https://api.mapbox.com/directions/v5/mapbox/driving",
  params: {
    alternatives: false,
    geometries: "geojson",
    overview: "simplified",
    access_token:
      "pk.eyJ1IjoiYW5kZXJzb25hcjEyIiwiYSI6ImNrcWp1dnFqajBhNngzMW12cXY4MjhhM2QifQ.d1WrSOlwb_SjhiTyQScFxQ",
    language: "es",
    steps: false,
  },
});
