<template>
  <!--        Filters-->
  <v-select
    v-model="variant"
    :items="items"
    clearable
    :label="label"
  />
</template>

<script lang="ts">
export default {
    name: 'AppFilter',
};
</script>
<script setup lang="ts">
import {ref} from 'vue';

const props = defineProps({
    label: {type: String, default: ''},
    items: {type: Array, default: () => []},
});

const variant = ref<string>('default');
</script>

<style scoped>

</style>