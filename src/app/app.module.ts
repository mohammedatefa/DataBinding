import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneWayBindingComponent } from './components/one-way-binding/one-way-binding.component';
import { ShowusersComponent } from './components/showusers/showusers.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ShowProductsComponent } from './components/show-products/show-products.component';
import { FormsModule } from '@angular/forms';
import { UsingbindingComponent } from './components/usingbinding/usingbinding.component';
import { StudentsComponent } from './components/students/students.component';
import { StudentComponent } from './components/student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    OneWayBindingComponent,
    ShowusersComponent,
    AddProductComponent,
    ShowProductsComponent,
    UsingbindingComponent,
    StudentsComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
