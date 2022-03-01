import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { setLocations } from 'src/app/actions/locations';
import { selectCategories } from 'src/app/selectors/categories';
import { Category } from 'src/app/utils/types';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  addLocationForm: FormGroup;
  categories: Category[] = [];

  constructor(private formBuilder: FormBuilder, private modalService: NgbModal, private store: Store) {
    this.addLocationForm = this.formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      coordinates: ['', Validators.required],
      address: ['', Validators.required]
    })
  }

  addLocation() {
    this.store.dispatch(setLocations({locations: {...this.addLocationForm.value}}));
    this.modalService.dismissAll();
    this.addLocationForm.reset();
  }

  getCategories() {
    // get categories from local storage
    this.store.select(selectCategories).subscribe((res) => {
      for (const key in res) {
        if (Object.prototype.hasOwnProperty.call(res, key)) {
          const category = res[key];
          this.categories.push(category);
          console.log('Cates', this.categories);
        }
      }
    })
  }

  open(modal: any) {
    this.modalService.open(modal);
  }

  ngOnInit(): void {
    this.getCategories();
  }

}
