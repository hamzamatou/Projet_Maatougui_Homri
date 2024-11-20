import { Component, inject, OnInit } from '@angular/core';
import { Cart } from '../../../models/cart';
import { CartItem } from '../../../models/cartItem';
import { SweetSelectedComponent } from "../sweet-selected/sweet-selected.component";
import { CartService } from '../../../services/cart-service.service';
import { JsonPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SweetService } from '../../../services/sweet.service';
import { Sweet } from '../../../models/sweet';
import { FormGroup, FormControl,ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [JsonPipe, RouterLink, ReactiveFormsModule, NavbarComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit {
  private readonly cartService: CartService = inject(CartService);
  private readonly sweetService:SweetService=inject(SweetService);
  change: FormGroup=new FormGroup({
    quantite: new FormControl
   })
  cart!: Cart;
  ngOnInit(): void {
      this.cartService.getCartObservable().subscribe(
          data => this.cart = data
      );
  }
  onChangeQuantity(id:number,quantite:number){;
    this.cartService.changeQuantity(id,quantite);
    this.sweetService.getSweet(id).subscribe(
      (sweet: Sweet) => {
        sweet.quantite -= quantite;
        this.sweetService.updateSweet(sweet).subscribe()})
  }
  OnRemoveFromCart(id:number,cartItem:CartItem){
    this.cartService.removeFromCart(id);
    this.sweetService.getSweet(id).subscribe(
      (sweet: Sweet) => {
        sweet.quantite +=cartItem.quantite ;
        this.sweetService.updateSweet(sweet).subscribe()})
  }
  }
