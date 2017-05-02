import Vue from 'vue'
import Router from 'vue-router'

import DashboardRoute from '../components/dashboard/route'
import StorageManagerRoute from '../components/storage-manager/route'
import StrategyManagerRoute from '../components/strategy-manager/route'
import NodeManagerRoute from '../components/node-manager/route'
import BackupRecoveryRoute from '../components/backup-recovery/route'
import ReportRoute from '../components/report-manager/route'
import AdminPanelRoute from '../components/admin-panel/route'
import LogRoute from '../components/log-manager/route'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/dashboard' },
    ...DashboardRoute,
    ...StorageManagerRoute,
    ...StrategyManagerRoute,
    ...NodeManagerRoute,
    ...BackupRecoveryRoute,
    ...ReportRoute,
    ...LogRoute,
    ...AdminPanelRoute
  ]
})
