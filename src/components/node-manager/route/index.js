const NodeManager = resolve => require(['../node-manager'], resolve)
const Layout = resolve => require(['../../layout/layout'], resolve)

export default [
  { path: '/node-manager', component: Layout, children: [{ path: '', component: NodeManager }] }
]
