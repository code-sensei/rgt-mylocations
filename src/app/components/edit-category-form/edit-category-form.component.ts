import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { updateCategory } from 'src/app/actions/categories';
import { Category } from 'src/app/utils/types';

@Component({
  selector: 'app-edit-category-form',
  templateUrl: './edit-category-form.component.html',
  styleUrls: ['./edit-category-form.component.scss']
})
export class EditCategoryFormComponent implements OnInit {

  @Input('category') category: Category = { name: '' };
  @Input('index') index: Number = NaN;

  editCategoryForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store, private modalService: NgbModal) {
    this.editCategoryForm = this.formBuilder.group({
      name: [this.category.name, Validators.required]
    })
  }

  updateCategory() {
    this.store.dispatch(updateCategory({ category: {...this.editCategoryForm.value}, index: this.index}));
    this.editCategoryForm.reset();
    this.modalService.dismissAll();
  }

  ngOnInit(): void {
    console.log(this.category, this.index);
    this.editCategoryForm.get('name')?.setValue(this.category.name);
  }

}
