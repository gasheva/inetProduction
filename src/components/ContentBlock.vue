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
import {fetchUsers as fetchUsersFromServer} from '@/services/service';

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

async function fetchUsers(): Promise<void> {
    users.value = await fetchUsersFromServer();
}

onBeforeMount(() => {
    fetch();
});

</script>
