const StorageConfigure = resolve => require(['../storage-configure'], resolve);
const StorageModification = resolve => require(['../storage-modification'], resolve);

export default [
  { path: "/storage-configure", component: StorageConfigure },
  { path: "/storage-modification", component: StorageModification },
]