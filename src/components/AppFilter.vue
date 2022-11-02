<template>
  <!--        Filters-->
  <v-select
    v-model="displayVariant"
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
import {computed} from 'vue';

const props = defineProps({
    label: {type: String, default: ''},
    variant: {type: String, default: ''},
    items: {type: Array, default: () => []},
});

const emit = defineEmits(['update:variant']);
const displayVariant = computed({
    get() {
        return props.variant;
    },
    set(val: string) {
        emit('update:variant', val);
    }
});
</script>

<style scoped>

</style>