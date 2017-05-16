const Dashboard = resolve => require(['../dashboard'], resolve)
const Layout = resolve => require(['../../layout/layout'], resolve)

export default [
  { path: '/', component: Layout, redirect: '/dashbard', children: [{ path: 'dashbard', component: Dashboard }] }
]
