import {createStore} from 'vuex';

interface State {
    scoreVariant: string | null,
    countryVariant: string | null,
}

export default createStore({
    state: {
        scoreVariant: null,
        countryVariant: null
    } as State,
    mutations: {
        setScoreFilterVariant(state, scoreVariant: string | null) {
            state.scoreVariant = scoreVariant;
        },
        setCountryFilterVariant(state, countryVariant: string | null) {
            state.countryVariant = countryVariant;
        },
    },
    getters: {
        getScoreVariant: state => state.scoreVariant,
        getCountryVariant: state => state.countryVariant,
    },
    actions: {}
});