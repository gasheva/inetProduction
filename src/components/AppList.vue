<template>
  <v-list
    three-line
    @click="showPlace"
  >
    <template v-for="(item, index) in items">
      <v-list-subheader
        v-if="item.header"
        :key="item.header"
        v-text="item.header"
      />

      <v-divider
        v-else-if="item.divider"
        :key="index"
        :inset="item.inset"
      />

      <v-list-item
        v-else
        :key="item.title"
        class="item"
        :prepend-avatar="item.avatar"
        :data-item="item.place"
      >
        <v-list-item-title v-html="item.title" />
        <v-list-item-subtitle v-html="item.subtitle" />
      </v-list-item>
    </template>
  </v-list>
</template>

<script lang="ts">
export default {
    name: 'AppList',
};
</script>
<script setup lang="ts">

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