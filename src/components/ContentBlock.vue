<template>
  <v-container>
    <v-row
      align="center"
      justify="center"
      class="ma-4"
    >
      <!--        Logo-->
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <!--        Filters-->
      <v-col
        cols="12"
        md="4"
      >
        <app-filter
          v-model:variant="countryVariant"
          label="Filter by country"
          :items="countries"
        />
        <app-filter
          v-model:variant="scoreVariant"
          label="Filter by score"
          :items="scores"
        />
      </v-col>

      <!--        List-->
      <v-col
        cols="12"
        md="4"
        class="d-flex"
      >
        <v-progress-circular
          v-show="isLoading"
          indeterminate
          color="primary"
          class="mx-auto"
        />
        <v-card
          v-if="!isLoading"
          max-width="450"
          class="mx-auto"
        >
          <app-list
            v-if="!isLoading"
            :items="usersFiltered"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">

export default {
    name: 'ContentBlock',
};
</script>
<script setup lang="ts">
import {useFetch} from '@/composable/fetching';
import {computed, onBeforeMount, ref} from 'vue';
import AppFilter from '@/components/AppFilter.vue';
import AppList from '@/components/AppList.vue';
import {scores, countries} from '@/constants/filters';
import {useStore} from 'vuex';
import {Users, UsersHeader, UsersDivider} from '@/interfaces/users';
import {User} from '@/interfaces/user';
import {isCountryEqual, isScoreRight} from '@/utils/filters';

const USERS = [
    {header: 'List'},
    {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Brunch this weekend?',
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        country: 'usa',
        score: 12,
        place: 'Washington',
    },
    {divider: true, inset: true},
    {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        country: 'russia',
        score: 1,
        place: 'Perm',
    },
    {divider: true, inset: true},
    {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Oui oui',
        subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        country: 'usa',
        score: 21,
        place: 'New York',
    },
    {divider: true, inset: true},
    {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Birthday gift',
        subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        country: 'russia',
        score: 31,
        place: 'Moscow',
    },
    {divider: true, inset: true},
    {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Recipe to try',
        subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        country: 'russia',
        score: 101,
        place: 'Vologda',
    },
];
const store = useStore();

const users = ref<Users>([]);
const usersFiltered = computed(() => {
    return users.value.filter(user => {
        if ((<UsersDivider>user).divider || (<UsersHeader>user).header) return true;
        return isCountryEqual(<User>user, countryVariant.value) && isScoreRight(<User>user, scoreVariant.value);
    });
});

const {isLoading, fetch} = useFetch(fetchUsers);
const scoreVariant = computed({
    get: (): string | null => store.getters.getScoreVariant,
    set: (val: string | null) => store.commit('setScoreFilterVariant', val)
});
const countryVariant = computed({
    get: (): string | null => store.getters.getCountryVariant,
    set: (val: string | null) => store.commit('setCountryFilterVariant', val)
});

async function fetchUsers() {
    const pr = new Promise(resolve => {
        setTimeout(() => resolve(true), 1000 * 1);
    });
    await pr;
    users.value = USERS;
}

onBeforeMount(() => {
    fetch();
});

</script>
