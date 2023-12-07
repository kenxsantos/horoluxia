import Dashboard from "../admin/components/Dashboard";

const routes = [
    {path: '/admin', exact: true, name: 'Admin'},
    {path: '/admin/dashboard', exact: true, name: 'Dashboard', component: Dashboard}
]
export default routes;