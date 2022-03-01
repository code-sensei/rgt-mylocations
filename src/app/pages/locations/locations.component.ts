import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { addLocation, setLocations } from 'src/app/actions/locations';
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
  searchKey: string = '';

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

  search() {
    this.getLocations();
    if (this.searchKey !== '') {
      this.locations = this.locations.filter((location) => location.name.includes(this.searchKey));
    } else {
      return;
    }
  }

  addLocation() {
    this.addLocationForm.get('category')?.setValue(this.categories.find((cate) => cate.name === this.addLocationForm.get('category')?.value));
    this.store.dispatch(addLocation({location: {...this.addLocationForm.value}}));
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
          // console.log('Cates', this.categories);
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
          // console.log('Cates', this.locations);
        }
      }
    })
  }

  viewByCategory(categoryName: string | null) {
    this.getLocations();
    if (categoryName !== null) {
      this.locations = this.locations.filter((location) => location.category.name === categoryName);
    } else {
      return;
    }
  }

  sort(type: 'name' | 'category') {
    console.log('Sorting ', type);
    if (type === 'category') {
      this.locations.sort((a, b): any => {
        if (a.category.name > b.category.name) return 1;
        if (a.category.name < b.category.name) return -1;
      })
      this.store.dispatch(setLocations({locations: this.locations}));
    } else if (type === 'name') {
      this.locations.sort((a, b): any => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
      })
      this.store.dispatch(setLocations({locations: this.locations}));
    }
  }

  open(modal: any) {
    this.modalService.open(modal);
  }

  ngOnInit(): void {
    this.getCategories();
    this.getLocations();
  }

}
