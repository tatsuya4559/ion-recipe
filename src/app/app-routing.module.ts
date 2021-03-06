import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'places', pathMatch: 'full' },
  // {
  //   path: 'recipes',
  //   loadChildren: () => import('./recipes/recipes.module').then( m => m.RecipesPageModule)
  // },
  {
    path: 'places',
    canLoad: [AuthGuard],
    loadChildren: () => import('./places/places.module').then( m => m.PlacesPageModule)
  },
  {
    path: 'bookings',
    canLoad: [AuthGuard],
    loadChildren: () => import('./bookings/bookings.module').then( m => m.BookingsPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
