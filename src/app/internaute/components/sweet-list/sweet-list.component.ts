import { Component, inject, OnInit } from '@angular/core';
import { SweetService } from '../../../services/sweet.service';
import { Sweet } from '../../../models/sweet';
import { SweetItemComponent } from '../sweet-item/sweet-item.component';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-sweet-list',
  standalone: true,
  imports: [SweetItemComponent,RouterLink,NavbarComponent],
  templateUrl: './sweet-list.component.html',
  styleUrl: './sweet-list.component.css'
})
export class SweetListComponent implements OnInit {
  searchName!:string;
  searchCategory!:string;
  sweets: Sweet[] = [];
  filteredSweets!:Sweet[];
  private readonly sweetservice:SweetService=inject(SweetService);
  ngOnInit(): void {
    this.sweetservice.getSweets().subscribe(
      data=>this.sweets=data
    )
  }
  onLoadData(obj: any) {
    this.searchCategory = obj.category || '';
    this.searchName = obj.name || '';
    console.log(this.searchCategory);
    console.log(this.searchName);
    this.sweetservice.getSweets().subscribe(sweets => {
      if(this.searchName===''&& this.searchCategory==='tous'){
        this.sweets=sweets;
      }else{
       this.sweets = sweets.filter(sweet => {
        const sweetName = sweet.name ? sweet.name.toUpperCase() : '';
        const sweetCategory = sweet.category ? sweet.category.toUpperCase() : '';
        return sweetName.includes(this.searchName.toUpperCase()) && sweetCategory.includes(this.searchCategory.toUpperCase());
      });}
      console.log(this.sweets);}
    )
  }
}
