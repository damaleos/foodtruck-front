import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IFoodTruck } from '../model/FoodTruck';
import { FoodtruckService } from '../services/foodtruck.service';

@Component({
  selector: 'app-foodtruckers',
  templateUrl: './foodtruckers.component.html',
  styleUrls: ['./foodtruckers.component.css']
})
export class FoodtruckersComponent implements OnInit {

  foodTrucks!: IFoodTruck[];

  constructor(private foodTrucksService: FoodtruckService) { }

  ngOnInit(): void {
    console.log('on init');
    this.getListFoodTrucks();
  }

  getListFoodTrucks(): void {
    this.foodTrucksService
      .getFoodTrucks()
      .subscribe((ft: IFoodTruck[]) => (this.foodTrucks = ft));
  }

  deleteFoodTruck (id : String) : void {
    if (confirm('Esta seguro que desea borrar?')) {
      this.foodTrucksService.deleteFoodTruck(id).subscribe();
    }
  }

  onPreUpdateFoodTruck(foodtruck: IFoodTruck): void {
    this.foodTrucksService.selectedFoodTruck = Object.assign({}, foodtruck);
  }

  resetForm(form?: NgForm): void {
    this.foodTrucksService.selectedFoodTruck = {
      id : '',
      nombre : '',
      tipoServicio : '',
      tipoServicioNombre : '',
      descripcion : '',
      url : '',
      whatsapp : '',
      twitter : '',
      instagram : ''
    };
  }


}
