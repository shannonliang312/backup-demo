const UserManager = resolve => require(['../user-manager'], resolve);
const GroupManager = resolve => require(['../group-manager'], resolve);
const PermissionManager = resolve => require(['../permission-manager'], resolve);

export default [
  { path: "/user-manager", component: UserManager },
  { path: "/group-manager", component: GroupManager },
  { path: "/permission-manager", component: PermissionManager },
]