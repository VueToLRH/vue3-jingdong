import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/Home'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/register/Register'),
    beforeEnter(to, from, next) {
      const { isLogin } = localStorage;
      isLogin ? next({ name: 'Home' }) : next();
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/Login'),
    beforeEnter(to, from, next) {
      const { isLogin } = localStorage;
      isLogin ? next({ name: 'Home' }) : next();
    },
  },
  {
    path: '/shop/:id',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "shop" */ '../views/shop/Shop'),
  },
  {
    path: '/orderConfirmation/:id/:addressId?',
    name: 'OrderConfirmation',
    component: () =>
      import(
        /* webpackChunkName: "orderConfirmation" */ '../views/orderConfirmation/OrderConfirmation'
      ),
  },
  {
    path: '/cartList',
    name: 'CartList',
    component: () => import(/* webpackChunkName: "cartList" */ '../views/cartList/CartList'),
  },
  {
    path: '/orderList',
    name: 'OrderList',
    component: () => import(/* webpackChunkName: "orderList" */ '../views/orderList/OrderList'),
  },
  {
    path: '/person',
    name: 'PersonalInfo',
    component: () => import(/* webpackChunkName: "person" */ '../views/personalInfo/PersonalInfo'),
  },
  {
    path: '/myAddressList',
    name: 'MyAddressList',
    component: () =>
      import(/* webpackChunkName: "myAddressList" */ '../views/myAddressList/MyAddressList'),
  },
  {
    path: '/upsertAddress/:id?',
    name: 'UpsertAddress',
    component: () =>
      import(/* webpackChunkName: "upsertAddress" */ '../views/upsertAddress/UpsertAddress'),
  },
  {
    path: '/chooseAddressList/:shopId',
    name: 'ChooseAddressList',
    component: () =>
      import(
        /* webpackChunkName: "chooseAddressList" */ '../views/chooseAddressList/ChooseAddressList'
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage;
  const { name } = to;
  const isLoginOrRegister = name === 'Login' || name === 'Register';
  isLogin || isLoginOrRegister ? next() : next({ name: 'Login' });
});

export default router;
