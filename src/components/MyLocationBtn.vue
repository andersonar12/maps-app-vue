<template>
  <button :v-if="isButtonReady" class="btn btn-primary" @click="onMyLocationClicked">Ir a mi ubicacion</button>
</template>

<script setup lang="ts">
import { useMapStore } from '@/composables/useMapStore';
import { usePlacesStore } from '@/composables/usePlacesStore';
import { computed } from 'vue';

const { userLocation, isUserLocationReady } = usePlacesStore();
const { map,isMapReady} = useMapStore();

const isButtonReady = computed(() => isUserLocationReady.value && isMapReady.value);

const onMyLocationClicked = () => {

  map.value?.flyTo({
    center: userLocation.value,
    zoom: 14
  });
};

</script>

<style scoped>
button{
    position: fixed;
    top: 30px;
    right: 30px;
}
</style>