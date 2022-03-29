import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "home",
    component: HomeView,
    children: [{
      path: "",
      name: "HomeOne",
      meta: ["首页"],
      component: () => import("../views/home/HomeOne.vue")
    }, {
      path: "2-1",
      name: "text1",
      meta: ["文章列表"],
      component: () => import("../views/home/Text1.vue")
    }, {
      path: "2-2",
      name: "text2",
      meta: ["多层级路由示例"],
      component: () => import("../views/home/Text2.vue")
    }]
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/login",
    name: "MyLogin",
    component: () => import("../views/Mylogin.vue"),
  },
];

const router = new VueRouter({
  routes,
});

// 权限管理
router.beforeEach(function (to, from, next) {
  console.log(to, from)
  if (to.name === "MyLogin") {
    next()

  } else {
    let token = localStorage.getItem("token")
    if (!token) return next({
      path: "/login"
    })
    if (token) return next()
  }

})

export default router;