<template>
  <v-list
    three-line
    @click="showPlace"
  >
    <app-list-item
      v-for="(item, index) in items"
      :key="item.title"
      class="item"
      :data-item="item.place"
      :item="item"
    />
  </v-list>
</template>

<script lang="ts">
export default {
    name: 'AppList',
};
</script>
<script setup lang="ts">

import AppListItem from '@/components/AppListItem.vue';

const props = defineProps({
    items: {type: Array, default: () => []}

});

const showPlace = (e: any): void => {
    let item = e.target.closest('div[data-item]');

    if (!item) return;
    toggleActiveClass(item);
};

const toggleActiveClass = (item: Element): void => {
    if (item.classList.contains('active')) {
        item.classList.remove('active');
        return;
    }
    item.classList.add('active');
};
</script>


<style scoped>
.item {
    position: relative;
}

.item.active::before {
    content: attr(data-item);
    position: absolute;
    top: 0;
    left: 13px;
    z-index: 1;
    font-size: 11px;
    background: antiquewhite;
}

</style>