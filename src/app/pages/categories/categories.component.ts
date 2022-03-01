import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { deleteCategory, setCategories, updateCategory } from 'src/app/actions/categories';
import { selectCategories } from 'src/app/selectors/categories';
import { Category } from 'src/app/utils/types';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  addCategoryForm: FormGroup;
  categories: Category[] = [];
  cateToEdit: Category = { name: '' };

  constructor(private formBuilder: FormBuilder, private modalService: NgbModal, private store: Store) {
    this.addCategoryForm = this.formBuilder.group({
      name: ['', Validators.required]
    })
  }

  view(index: number) {
    
  }

  toEdit(index: number, modal: any) {
    this.cateToEdit = this.categories[index];
    this.modalService.open(modal);
  }

  delete(index: number) {
    this.store.dispatch(deleteCategory({ index: index }));
    this.modalService.dismissAll();
  }

  addCategory() {
    this.store.dispatch(setCategories({categories: {...this.addCategoryForm.value}}));
    this.modalService.dismissAll();
    this.addCategoryForm.reset();
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

  open(modal: any) {
    this.modalService.open(modal);
  }

  ngOnInit(): void {
    this.getCategories();
  }

}
