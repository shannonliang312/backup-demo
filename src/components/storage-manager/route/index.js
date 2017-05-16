const StorageConfigure = resolve => require(['../storage-configure'], resolve)
const StorageModification = resolve => require(['../storage-modification'], resolve)
const Layout = resolve => require(['../../layout/layout'], resolve)

export default [
  { path: '/storage-configure', component: Layout, children: [{ path: '', component: StorageConfigure }] },
  { path: '/storage-modification', component: Layout, children: [{ path: '', component: StorageModification }] }
]
