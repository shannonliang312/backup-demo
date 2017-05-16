const UserManager = resolve => require(['../user-manager'], resolve)
const GroupManager = resolve => require(['../group-manager'], resolve)
const PermissionManager = resolve => require(['../permission-manager'], resolve)
const Layout = resolve => require(['../../layout/layout'], resolve)

export default [
  { path: '/user-manager', component: Layout, children: [{ path: '', component: UserManager }] },
  { path: '/group-manager', component: Layout, children: [{ path: '', component: GroupManager }] },
  { path: '/permission-manager', component: Layout, children: [{ path: '', component: PermissionManager }] }
]
