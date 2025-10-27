import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Login } from './pages/login/login';
import { Notfound } from './pages/notfound/notfound';
import { Statistics } from './pages/dashboard/statistics/statistics';
import { Clients } from './pages/dashboard/clients/clients';
import { Projects } from './pages/dashboard/projects/projects';
import { Employees } from './pages/dashboard/employees/employees';

import { List as ClientList } from './pages/dashboard/clients/list/list';
import { Add as ClientAdd } from './pages/dashboard/clients/add/add';
import { Update as ClientUpdate } from './pages/dashboard/clients/update/update';

import { List as ProjectList } from './pages/dashboard/projects/list/list';
import { Add as ProjectAdd } from './pages/dashboard/projects/add/add';
import { Update as ProjectUpdate } from './pages/dashboard/projects/update/update';
import { Preview } from './pages/dashboard/projects/preview/preview';

import { List as EmployeeList } from './pages/dashboard/employees/list/list';
import { Add as EmployeeAdd } from './pages/dashboard/employees/add/add';
import { Update as EmployeeUpdate } from './pages/dashboard/employees/update/update';
import { dashGuard } from './core/guards/dash-guard';
import { adminGuard } from './core/guards/admin-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',canActivate:[dashGuard],component: Dashboard,
    children: [
      { path: '', redirectTo: 'statistics', pathMatch: 'full' },
      { path: 'statistics',canActivate:[adminGuard] ,component: Statistics },
      {
        path: 'clients',canActivate:[adminGuard]
        ,component: Clients,
        children: [
          { path: '', redirectTo: 'list', pathMatch: 'full' },
          { path: 'list', component: ClientList },
          { path: 'add', component: ClientAdd },
          { path: 'update/:id', component: ClientUpdate },
        ],
      },
      {
        path: 'projects',
        component: Projects,
        children: [
          { path: '', redirectTo: 'list', pathMatch: 'full' },
          { path: 'list', component: ProjectList },
          { path: 'add',canActivate:[adminGuard] ,component: ProjectAdd },
          { path: 'update/:id', component: ProjectUpdate },
          { path: 'preview/:id',canActivate:[adminGuard] ,component: Preview },
        ],
      },
      {
        path: 'employees',canActivate:[adminGuard]
        ,component: Employees,
        children: [
          { path: '', redirectTo: 'list', pathMatch: 'full' },
          { path: 'list', component: EmployeeList },
          { path: 'add', component: EmployeeAdd },
          { path: 'update/:id', component: EmployeeUpdate },
        ],
      },
    ],
  },
  { path: 'login', component: Login },
  { path: '**', component: Notfound },
];