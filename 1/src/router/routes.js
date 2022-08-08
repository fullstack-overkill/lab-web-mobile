const routes = [
  {
    path: '/',
    redirect: { name: 'home' },
    component: () => import('../views/EmptyRouterView.vue'),
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('../views/home/pageHome.vue'),
      },
      {
        path: 'auth',
        name: 'auth',
        children: [
          {
            path: 'login',
            name: 'login',
            component: () => import('../views/auth/login/pageLogin.vue'),
          },
        ],
      },
    ],
  },
];

export default routes;
