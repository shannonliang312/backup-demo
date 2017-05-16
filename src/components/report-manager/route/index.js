const ReportManager = resolve => require(['../report-manager'], resolve)
const Layout = resolve => require(['../../layout/layout'], resolve)

export default [
  { path: '/report-manager', component: Layout, children: [{ path: '', component: ReportManager }] }
]
