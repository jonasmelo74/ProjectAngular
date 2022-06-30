import { ChangeComponent } from './components/products/change/change.component';
import { DeleteComponent } from './components/products/delete/delete.component';
import { CreateComponent } from './components/products/create/create.component';
import { ViewProductComponent } from './views/view-product/view-product.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ViewProductComponent
  },
  {
    path: "products/create",
    component: CreateComponent
  },
  {
    path: "products/delete/:id",
    component: DeleteComponent
  },
  {
    path: "products/change/:id",
    component: ChangeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }