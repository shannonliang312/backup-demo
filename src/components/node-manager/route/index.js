const NodeManager = resolve => require(['../node-manager'], resolve);

export default [
  { path: "/node-manager", component: NodeManager }
]