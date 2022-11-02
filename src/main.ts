import {createApp} from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify.js';
import store from '@/store';

const app = createApp(App).use(vuetify).use(store);
if (process.env.NODE_ENV === 'development') {
    app.config.performance = true;
}
app.mount('#app');
