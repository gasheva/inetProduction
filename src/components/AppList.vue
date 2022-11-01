<template>
  <v-list three-line>
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
        :prepend-avatar="item.avatar"
      >
        <v-list-item-title v-html="item.title" />
        <v-list-item-subtitle v-html="item.subtitle" />
      </v-list-item>
    </template>
  </v-list>
</template>

<script>
export default {
    name: "AppList",
    props: {
        items: {type: Array, default: () => []}
    },

}
</script>

<style scoped>

</style>