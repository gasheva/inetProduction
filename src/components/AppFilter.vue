<template>
    <!--        Filters-->
    <v-select
            v-model="variant"
            :items="items"
            clearable
            :label=label
    ></v-select>
</template>

<script>
export default {
    name: "AppFilter",
    props: {
        label: {type: String, default: ''},
        items: {type: Array, default: () => []},
    },

    data(){
        return{
            variant: 'default',
        }
    },

    methods(){

    }
}
</script>

<style scoped>

</style>