import axios from "axios";

export const searchApi = axios.create({
  baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
  // headers: {
  //     "Content-Type": "application/json",
  //     "Access-Control-Allow-Origin": "*",
  // },
  params: {
    access_token:
      "pk.eyJ1IjoiYW5kZXJzb25hcjEyIiwiYSI6ImNrcWp1dnFqajBhNngzMW12cXY4MjhhM2QifQ.d1WrSOlwb_SjhiTyQScFxQ",
    limit: 5,
    language: "es",
  },
});
