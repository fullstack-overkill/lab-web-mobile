import { createApp } from 'vue';
import './serviceWorker/registerServiceWorker';
import './assets/styl/reset.styl';
import router from './router';
import store from './store';
import App from './views/app.vue';

const app = createApp(App);

app.use(store);
app.use(router);
app.mount('#app');
