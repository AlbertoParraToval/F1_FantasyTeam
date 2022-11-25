import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'about-me',
    loadChildren: () => import('./pages/about-me/about-me.module').then( m => m.AboutMePageModule)
  },
  {
    path: 'drivers',
    loadChildren: () => import('./pages/drivers/drivers.module').then( m => m.DriversPageModule)
  },
  {
    path: 'teams',
    loadChildren: () => import('./pages/teams/teams.module').then( m => m.TeamsPageModule)
  },
  {
    path: 'drivers-manage',
    loadChildren: () => import('./pages/drivers-manage/drivers-manage.module').then( m => m.DriversManagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
