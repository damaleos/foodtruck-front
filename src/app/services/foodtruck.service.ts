import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFoodTruck } from '../model/FoodTruck';
import { UsersService } from './users.service';
import { map } from 'rxjs/operators';
import { ITipoServicio } from '../model/TipoServicio';

@Injectable({
  providedIn: 'root'
})
export class FoodtruckService {

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  public selectedFoodTruck: IFoodTruck = {
    id : '',
    nombre : '',
    tipoServicio : '',
    tipoServicioNombre: '',
    descripcion : '',
    url : '',
    whatsapp : '',
    twitter : '',
    instagram : ''
  };
  
  constructor(private http: HttpClient, private userService : UsersService) { }

  getFoodTrucks() {
    console.log(this.userService.getUser().id);
    const url_api = `/ttps-spring/foodtrucks/` + this.userService.getUser().id;
    return this.http.get<IFoodTruck[]>(url_api);
  }

  getTiposDeServicos() {
    return this.http.get<ITipoServicio[]>(`/ttps-spring/foodtrucks/tiposervicios`);
  }

  saveFoodTruck(foodtruck: IFoodTruck) {
    const url_api = `/ttps-spring/foodtrucks/crear/` + this.userService.getUser().id;
    return this.http
      .put<IFoodTruck>(url_api, foodtruck, { headers: this.headers }) //deberia usar post
      .pipe(map(data => data));
  }

  updateFoodTruck(foodtruck : IFoodTruck) {
    const url_api = `/ttps-spring/foodtrucks/actualizar/` + foodtruck.id;
    return this.http
      .put<IFoodTruck>(url_api, foodtruck, { headers: this.headers })
      .pipe(map(data => data));
  }

  deleteFoodTruck(id: String) {
    const url_api = `/ttps-spring/foodtrucks/${id}`;
    return this.http
      .delete<IFoodTruck>(url_api, { headers: this.headers })
      .pipe(map(data => data));
  }
}
