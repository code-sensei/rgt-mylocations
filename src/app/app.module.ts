import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { reducers } from './reducers';
import { EditCategoryFormComponent } from './components/edit-category-form/edit-category-form.component';
import { LocationDetailsComponent } from './components/modals/location-details/location-details.component';
import { CategoryDetailsComponent } from './components/modals/category-details/category-details.component';
import { EditLocationFormComponent } from './components/edit-location-form/edit-location-form.component';
import { MapComponent } from './components/map/map.component';
import { LocationMapDetailsComponent } from './components/modals/location-map-details/location-map-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BottomBarComponent,
    LocationsComponent,
    CategoriesComponent,
    EditCategoryFormComponent,
    LocationDetailsComponent,
    CategoryDetailsComponent,
    EditLocationFormComponent,
    MapComponent,
    LocationMapDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
