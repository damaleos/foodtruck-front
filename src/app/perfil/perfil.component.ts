import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IUsuario } from '../model/Usuario';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public isError = false;
  public msgError = '';

  usuario !: IUsuario;

  password!: string;
  email!: string;
  
  constructor(public usuarioService : UsersService, public location: Location) { }

  ngOnInit(): void {
    console.log("carga");
    this.usuario = this.usuarioService.getUser();
  }

  updateProfile (form: NgForm) { 
    console.log("update profile");

    if (form.valid) {
      this.usuarioService.updateUser(form.value).subscribe(data => {
        console.log("update success");
        this.usuarioService.setUser(data);
        //location.reload();
      });
    } else { 
      this.isError = true;
    } 
  }
}
