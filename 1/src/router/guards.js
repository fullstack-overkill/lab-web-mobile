const Guards = (router) => {
  // eslint-disable-next-line consistent-return
  router.beforeEach(async (to) => {
    const isAuth = false;

    if (isAuth && (to.name === 'login' || to.name === 'register')) {
      return { name: 'home' };
    }

    if (!isAuth && (to.name !== 'login' && to.name !== 'register')) {
      return { name: 'login' };
    }
  });
};

export default Guards;
