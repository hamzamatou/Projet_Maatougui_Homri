import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Sweet } from '../../../models/sweet';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [FormsModule,NgClass],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() sweet!:Sweet;
  @Output() delete = new EventEmitter<number>();
  @Output() update = new EventEmitter<Sweet>();
  
  isEditing = false;

  onEdit() {
    this.isEditing = true;
  }

  onSave() {
    this.update.emit(this.sweet);
    this.isEditing = false;
    console.log('Produit modifié:', this.sweet);
  }

  onCancel() {
    this.isEditing = false;
    console.log('Édition annulée');
  }
  onDelete()
  {
    this.delete.emit(this.sweet.id);
  }
}
