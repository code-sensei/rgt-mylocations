import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { updateLocation } from 'src/app/actions/locations';
import { selectCategories } from 'src/app/selectors/categories';
import { Category, Location } from 'src/app/utils/types';

@Component({
  selector: 'app-edit-location-form',
  templateUrl: './edit-location-form.component.html',
  styleUrls: ['./edit-location-form.component.scss']
})
export class EditLocationFormComponent implements OnInit {

  @Input('location') location: Location = { 
    name: '',
    address: '',
    category: {
      name: ''
    },
    coordinates: ''
  }
  @Input('index') index: Number = NaN;

  editLocationForm: FormGroup;
  categories: Category[] = [];

  constructor(private formBuilder: FormBuilder, private modalService: NgbModal, private store: Store) {
    this.editLocationForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      category: ['', Validators.required],
      coordinates: ['', Validators.required]
    });
  }

  updateLocation() {
    let data = {
      ...this.editLocationForm.value,
      category: this.categories.find((cate) => cate.name === this.editLocationForm?.get('category')?.value)
    }
    this.store.dispatch(updateLocation({ location: {...data}, index: this.index}));
    this.editLocationForm.reset();
    this.modalService.dismissAll();
  }

  getCategories() {
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

  ngOnInit(): void {
    this.getCategories();
    this.editLocationForm.get('name')?.setValue(this.location.name);
    this.editLocationForm.get('address')?.setValue(this.location.address);
    this.editLocationForm.get('category')?.setValue(this.location.category.name);
    this.editLocationForm.get('coordinates')?.setValue(this.location.coordinates);
  }

}
