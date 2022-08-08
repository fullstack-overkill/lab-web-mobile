import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes';
import Guards from './guards';

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

Guards(router);

export default router;
