const StrategyConfigure = resolve => require(['../strategy-configure'], resolve);
const StrategyModification = resolve => require(['../strategy-modification'], resolve);

export default [
  { path: "/strategy-configure", component: StrategyConfigure },
  { path: "/strategy-modification", component: StrategyModification },
]