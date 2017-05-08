const Adminpanel = resolve => require(['../admin-panel'], resolve);
const Layout = resolve => require(['../../layout/layout'], resolve);

export default [
  { path: "/admin-panel", component: Layout, children: [{ path: '', component: Adminpanel }] }
]