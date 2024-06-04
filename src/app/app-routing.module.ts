import { ChooseComponent } from './components/choose/choose.component';
import { SearchComponent } from './components/search/search.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { CategoryComponent } from './components/products/category/category.component';
import { AllProductsComponent } from './components/products/all-products/all-products.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { SellProductsComponent } from './components/sell-products/sell-products.component';
import { OrdersComponent } from './components/orders/orders.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      { path: '', redirectTo: 'choose', pathMatch: 'full' },
      { path: 'choose', component: ChooseComponent },
      {
        path: 'products',
        component: ProductsComponent,
        children: [
          {
            path: '',
            redirectTo: 'allproducts',
            pathMatch: 'full',
          },
          { path: 'allproducts', component: AllProductsComponent },
          { path: ':name', component: CategoryComponent },
        ],
      },
      { path: 'details/:id', component: ProductDetailsComponent },
      { path: 'sellproducts', component: SellProductsComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'profile', component: EditProfileComponent },
      { path: 'cart', component: CartComponent },
      { path: 'search/:term', component: SearchComponent },
    ],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'signup', component: SignUpComponent },
      { path: 'signin', component: SignInComponent },
      { path: 'forgotpassword', component: ForgotPasswordComponent },
    ],
  },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
