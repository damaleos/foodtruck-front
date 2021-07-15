import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-registracion',
  templateUrl: './registracion.component.html',
  styleUrls: ['./registracion.component.css']
})
export class RegistracionComponent implements OnInit {

  public isError = false;
  public msgError = '';

  usuario!: string;
  password!: string;
  email!: string;
  tipoUsuario!: string;

  constructor(private usuarioService : UsersService, private router: Router) { }

  ngOnInit(): void {

  }

  registracion (form: NgForm) { 
    console.log(this.usuario);
    console.log(this.password);
    console.log(this.tipoUsuario);

    if (form.valid) {
      this.usuarioService.registacion(this.usuario,this.password, this.email, this.tipoUsuario).subscribe(data => {
        console.log("registracion success");
        this.router.navigate(['../login']) ;
      });
    } else { 
      this.isError = true;
    } 
  }

}
