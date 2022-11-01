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
import ContentBlock from './components/ContentBlock.vue';
import AppFooter from './components/AppFooter.vue';

export default {
    name: 'App',

    components: {
        ContentBlock,
        AppFooter
    },

    data: () => ({
        //
    }),

    computed: {
        localAttrs() {
            const attrs = {
                absolute: true,
                fixed: false,
            };
            return attrs;
        },
    },
};
</script>
