<template>
  <v-app>
    <v-main>
      <ContentBlock />
    </v-main>

    <v-footer
      app
      v-bind="localAttrs"
    >
      <AppFooter />
    </v-footer>
  </v-app>
</template>

<script lang="ts">

export default {
    name: 'App',
};
</script>
<script setup lang="ts">
import {computed} from 'vue';
import ContentBlock from '@/components/ContentBlock.vue';
import AppFooter from '@/components/AppFooter.vue';

const localAttrs = computed(() => {
    const attrs = {
        absolute: true,
        fixed: false,
    };
    return attrs;
});
</script>
