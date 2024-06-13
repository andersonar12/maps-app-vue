<template>
  <div class="searchbar-container">
    <input class="form-control" v-model="searchTerm" type="text" placeholder="Buscar lugares" />
    {{ debouncedValue }}
    <SearchResults />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { usePlacesStore } from "@/composables/usePlacesStore";
import SearchResults from "./SearchResults.vue";

const { searchPlacesByTerm } = usePlacesStore();

const debounceTimeout = ref();
const debouncedValue = ref("");
const searchTerm = computed({
  get() {
    return debouncedValue.value;
  },
  set(val: string) {
    if (debounceTimeout.value) {
      clearTimeout(debounceTimeout.value);
    }
    debounceTimeout.value = setTimeout(() => {
      // debouncedValue.value = val;
      searchPlacesByTerm(val);
    }, 500);
  },
});

// watch(search, (newVal) => {
//   setTimeout(() => {
//       debouncedValue.value = newVal;
//     }, 500);
// });

</script>

<style scoped>
.searchbar-container {
  border-radius: 10px;
  position: fixed;
  top: 30px;
  left: 30px;
  z-index: 999;
  background-color: white;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
  width: 250px;
  overflow: hidden;
  padding: 5px;
}
</style>
