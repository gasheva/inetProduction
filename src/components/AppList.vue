<template>
  <v-list
    class="list"
    three-line
    @click="showPlace"
  >
    <template v-for="(item, index) in items">
      <v-list-subheader
        v-if="item.header"
        :key="item.header"
        class="subheader"
        v-text="item.header"
      />

      <v-divider
        v-else-if="item.divider"
        :key="index"
        class="divider"
        :inset="item.inset"
      />
      <app-list-item
        v-else
        :key="item.title"
        class="item"
        :data-item="item.place"
        :item="item"
      />
    </template>
  </v-list>
</template>

<script lang="ts">
export default {
    name: 'AppList',
};
</script>
<script setup lang="ts">

import AppListItem from '@/components/AppListItem.vue';
import {Users} from '@/interfaces/users';

defineProps({
    items: {type: Array as () => Users, default: () => []}

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

/* hide divider if they are together */
.divider + .divider, .subheader + .divider {
    display: none;
}

/* hide last divider */
.list .item:last-of-type + .divider {
    display: none;
}

</style>