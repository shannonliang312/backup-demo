const BackupManager = resolve => require(['../backup-manager'], resolve);
const RecoveryManager = resolve => require(['../recovery-manager'], resolve);

export default [
  { path: "/backup-manager", component: BackupManager },
  { path: "/recovery-manager", component: RecoveryManager },
]