import { LoadingInterceptor } from './components/shared/interceptors/loading.interceptor';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { CloudinaryModule } from '@cloudinary/ng';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { NavMainComponent } from './components/nav-main/nav-main.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SellProductsComponent } from './components/sell-products/sell-products.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { AllProductsComponent } from './components/products/all-products/all-products.component';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { CategoryComponent } from './components/products/category/category.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { TestingComponent } from './components/testing/testing.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NewOrUsedPipe } from './components/shared/pipes/new-or-used.pipe';
import { SearchComponent } from './components/search/search.component';
import { CalcRatingPipe } from './components/shared/pipes/calc-rating.pipe';
import { ChooseComponent } from './components/choose/choose.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,

    EditProfileComponent,
    NavMainComponent,
    NotFoundComponent,
    OrdersComponent,
    SellProductsComponent,
    SignInComponent,
    SignUpComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    ProductsComponent,
    CartComponent,
    FooterComponent,
    AllProductsComponent,
    SignInFormComponent,
    SignUpFormComponent,
    CategoryComponent,
    LoadingScreenComponent,
    ProductDetailsComponent,
    TestingComponent,
    ForgotPasswordComponent,
    NewOrUsedPipe,
    SearchComponent,
    CalcRatingPipe,
    ChooseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    CloudinaryModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
