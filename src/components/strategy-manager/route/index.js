const StrategyConfigure = resolve => require(['../strategy-configure'], resolve)
const StrategyModification = resolve => require(['../strategy-modification'], resolve)
const Layout = resolve => require(['../../layout/layout'], resolve)

export default [
  { path: '/strategy-configure', component: Layout, children: [{ path: '', component: StrategyConfigure }] },
  { path: '/strategy-modification', component: Layout, children: [{ path: '', component: StrategyModification }] }
]
