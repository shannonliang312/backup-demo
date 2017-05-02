const Adminpanel = resolve => require(['../admin-panel'], resolve);

export default [
  { path: "/admin-panel", component: Adminpanel }
]