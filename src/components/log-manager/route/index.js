const LogManager = resolve => require(['../log-manager'], resolve)
const Layout = resolve => require(['../../layout/layout'], resolve)

export default [
  { path: '/log-manager', component: Layout, children: [{ path: '', component: LogManager }] }
]
