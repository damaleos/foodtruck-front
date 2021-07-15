import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ITipoServicio } from '../model/TipoServicio';
import { FoodtruckService } from '../services/foodtruck.service';

@Component({
  selector: 'app-foodtruckdetails',
  templateUrl: './foodtruckdetails.component.html',
  styleUrls: ['./foodtruckdetails.component.css']
})
export class FoodtruckdetailsComponent implements OnInit {

  tiposServicios!: ITipoServicio[];

  constructor(
    public foodtrucktService: FoodtruckService,
    public location: Location
  ) { }
  ngOnInit() {
    this.getListTiposDeServicios();
  }

  getListTiposDeServicios(): void {
    this.foodtrucktService
      .getTiposDeServicos()
      .subscribe((ts: ITipoServicio[]) => (this.tiposServicios = ts));
  }

  onSaveFoodTruck(form: NgForm): void {
    console.log("form.value.id" + this.foodtrucktService.selectedFoodTruck.id);
    if (!this.foodtrucktService.selectedFoodTruck.id) {
      console.log("new food truck");
      this.foodtrucktService.saveFoodTruck(form.value).subscribe(foodtrukck => location.reload());
    } else {
      console.log("update food truck");
      this.foodtrucktService.updateFoodTruck(form.value).subscribe(foodtrukck => location.reload());
    }
  }

}
