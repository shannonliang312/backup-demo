const Login = resolve => require(['./login.vue'], resolve);

/* 由403等静态页面跳转到登陆页时, 通过此组件作为缓冲, 重置登陆状态*/
const LoginRe = resolve => require(['./login-redirect.vue'], resolve);

export default  [
  { path: "/login", component: Login },
  { path: "/loginre", component: LoginRe },
] 