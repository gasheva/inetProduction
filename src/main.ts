import {createApp} from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify.js';

const app = createApp(App).use(vuetify);
if (process.env.NODE_ENV === 'development') {
    app.config.performance = true;
}
app.mount('#app');
