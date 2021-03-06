import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuOrderComponent } from './pages/menu-order/menu-order.component';
import { MenuComponent } from './pages/menu/menu.component';
import { PaymentComponent } from './pages/payment/payment.component';

const routes: Routes = [
  {path: '' , component:HomeComponent},
  {path: 'menu' , component:MenuComponent},
  {path: 'menu/:id' , component:MenuOrderComponent},
  {path: 'about' , component:AboutComponent},
  {path: 'contact' , component:ContactComponent},
  {path: 'payment' , component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
