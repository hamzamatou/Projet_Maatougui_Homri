import { Routes } from '@angular/router';
import { SweetListComponent } from './internaute/components/sweet-list/sweet-list.component';
import { SweetSelectedComponent } from './internaute/components/sweet-selected/sweet-selected.component';
import { ShopComponent } from './internaute/components/shop/shop.component';
import { FavoriteComponent } from './internaute/components/favorite/favorite.component';
import { ContactComponent } from './internaute/components/contact/contact.component';
import { LoginComponent } from './admin/components/login/login.component';
import { LayoutComponent } from './admin/components/layout/layout.component';
import { ProductsComponent } from './admin/components/products/products.component';
import { ModifierPasswordComponent } from './admin/components/modifier-password/modifier-password.component';
import { AddProductComponent } from './admin/add-product/add-product.component';

export const routes: Routes = [
    {path:'sweets',component:SweetListComponent},
    {path:'sweets/:idf',component:SweetSelectedComponent},
    {path:'', redirectTo:'sweets', pathMatch:'full'},
    {path:'shop',component:ShopComponent},
    {path:'favorite',component:FavoriteComponent},
    {path:'search',component:SweetListComponent},
    {path:'contact',component:ContactComponent},
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'layout',
        component:LayoutComponent,
        children: [
            {
                path:'products',
                component:ProductsComponent
            },
            {
                path:'',
                redirectTo:'products',pathMatch:'full'
            },
            {
                path:'add-product',
                component:AddProductComponent
            },
            {
                path:'modifier-password',
                component:ModifierPasswordComponent

            }

        ]
    },
    
];
