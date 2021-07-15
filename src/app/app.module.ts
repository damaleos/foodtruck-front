import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistracionComponent } from './registracion/registracion.component';
import { LoginComponent } from './login/login.component';
import { GestionreservasComponent } from './gestionreservas/gestionreservas.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FoodtruckHomeComponent } from './foodtruck-home/foodtruck-home.component';
import { OrganizadorHomeComponent } from './organizador-home/organizador-home.component';
import { FoodtruckersComponent } from './foodtruckers/foodtruckers.component';
import { FoodtruckdetailsComponent } from './foodtruckdetails/foodtruckdetails.component';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registracion', component: RegistracionComponent },
  { path: 'foodTruckHome', component: FoodtruckHomeComponent },
  { path: 'organizadorHome', component: OrganizadorHomeComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'foodtrucks', component: FoodtruckersComponent },
  { path: 'FTGestionReservas', component: GestionreservasComponent }/*,
  { path: '**', component: PageNotFoundComponent }*/
 ];

 
@NgModule({
  declarations: [
    AppComponent,
    RegistracionComponent,
    LoginComponent,
    GestionreservasComponent,
    PerfilComponent,
    FoodtruckHomeComponent,
    OrganizadorHomeComponent,
    FoodtruckersComponent,
    FoodtruckdetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    //AppRoutingModule
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } //<--debugging purposes only
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
