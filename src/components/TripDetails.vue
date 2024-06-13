<template>
  <div class="trip-container column">
    <div class="col">Distancia <strong>{{ distance }} kms</strong></div>
    <div class="col">Duracion <strong>{{ duration }} minutos</strong></div>
  </div>
</template>

<script lang="ts" setup>
import { useMapStore } from "@/composables/useMapStore";
import { ref, computed } from "vue";

const { distance, duration } = useMapStore();




</script>

<style scoped>
.trip-container {
  border-radius: 10px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
  padding: 10px;
  width: 350px;
  position: fixed;
  bottom: 100px;
  left: 0px;
 font-size: 25px;
  background-color: white;
}

strong  {
  color: #42b983;  
}
</style>
