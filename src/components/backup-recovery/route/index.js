const BackupManager = resolve => require(['../backup-manager'], resolve)
const RecoveryManager = resolve => require(['../recovery-manager'], resolve)
const Layout = resolve => require(['../../layout/layout'], resolve)

export default [
  { path: '/backup-manager', component: Layout, children: [{ path: '', component: BackupManager }] },
  { path: '/recovery-manager', component: Layout, children: [{ path: '', component: RecoveryManager }] }
]
