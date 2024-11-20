import { Routes } from '@angular/router';
import { SweetListComponent } from './internaute/components/sweet-list/sweet-list.component';
import { SweetSelectedComponent } from './internaute/components/sweet-selected/sweet-selected.component';
import { ShopComponent } from './internaute/components/shop/shop.component';
import { FavoriteComponent } from './internaute/components/favorite/favorite.component';
import { ContactComponent } from './internaute/components/contact/contact.component';

export const routes: Routes = [
    {path:'sweets',component:SweetListComponent},
    {path:'sweets/:idf',component:SweetSelectedComponent},
    {path:'', redirectTo:'sweets', pathMatch:'full'},
    {path:'shop',component:ShopComponent},
    {path:'favorite',component:FavoriteComponent},
    {path:'search',component:SweetListComponent},
    {path:'contact',component:ContactComponent}
];
