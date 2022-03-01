import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { setLocations } from 'src/app/actions/locations';
import { selectCategories } from 'src/app/selectors/categories';
import { selectLocations } from 'src/app/selectors/locations';
import { DEFAULT_LOCATION } from 'src/app/utils/defaults';
import { Category, Location } from 'src/app/utils/types';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  addLocationForm: FormGroup;
  categories: Category[] = [];
  locations: Location[] = [];
  locationToEdit: Location = DEFAULT_LOCATION;
  locationToView: Location = DEFAULT_LOCATION;

  constructor(private formBuilder: FormBuilder, private modalService: NgbModal, private store: Store) {
    this.addLocationForm = this.formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      coordinates: ['', Validators.required],
      address: ['', Validators.required]
    })
  }

  viewProps(index: number, modal: any) {
    this.locationToView = this.locations[index];
    this.modalService.open(modal);
  }

  viewOnMap(index: number, modal: any) {
    this.locationToView = this.locations[index];
    this.modalService.open(modal, { size: 'xl' });
  }

  toEdit(index: any, modal: any) {
    this.locationToEdit = this.locations[index];
    this.modalService.open(modal);
  }

  delete(index: number) {

  }

  addLocation() {
    this.store.dispatch(setLocations({locations: {...this.addLocationForm.value}}));
    this.modalService.dismissAll();
    this.addLocationForm.reset();
  }

  getCategories() {
    // get categories from local storage
    this.store.select(selectCategories).subscribe((res) => {
      this.categories = [];
      for (const key in res) {
        if (Object.prototype.hasOwnProperty.call(res, key)) {
          const category = res[key];
          this.categories.push(category);
          console.log('Cates', this.categories);
        }
      }
    })
  }

  getLocations() {
     // get locations from local storage
     this.store.select(selectLocations).subscribe((res) => {
       this.locations = [];
      for (const key in res) {
        if (Object.prototype.hasOwnProperty.call(res, key)) {
          const location = res[key];
          this.locations.push(location);
          console.log('Cates', this.locations);
        }
      }
    })
  }

  open(modal: any) {
    this.modalService.open(modal);
  }

  ngOnInit(): void {
    this.getCategories();
    this.getLocations();
  }

}
