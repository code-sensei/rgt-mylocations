import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { LocationsComponent } from './pages/locations/locations.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'locations',
    pathMatch: 'full'
  }, 
  {
    path: 'locations',
    component: LocationsComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
