<template>
  <v-list-item
    :key="item.title"
    class="item"
    :data-item="item.place"
    :prepend-avatar="item.avatar"
    :subtitle="'score:' + item.score"
  >
    <v-list-item-title v-html="item.title" />
    <v-list-item-subtitle v-html="item.subtitle" />
  </v-list-item>
</template>

<script lang="ts">
export default {
    name: 'AppListItem'
};
</script>
<script setup lang="ts">
import {User} from '@/interfaces/user';

defineProps({
    item: {type: Object as () => User, required: true},
});
</script>

<style scoped>

</style>