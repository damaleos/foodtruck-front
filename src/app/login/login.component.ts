import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario!: string;
  password!: string;

  public isError = false;

  constructor(private usuarioService : UsersService, private router: Router) { }

  ngOnInit(): void {

  }

  login() {
    console.log(this.usuario);
    console.log(this.password);

    this.usuarioService.login(this.usuario,this.password).subscribe(data => {

      //console.log(data);
      console.log(data['tipo']);

      if(data['idUsuario'] != null) {
          console.log("loggedIn success");
          //this.router.navigate(['../FTGestionReservas']) ;
          this.usuarioService.setUser(data);

          if(data['tipo'] == "ORG_EVENTOS") {
            this.router.navigate(['../organizadorHome']) ;
          } else {
            this.router.navigate(['../foodTruckHome']) ;
          }
          
      } else {
          console.log("loggedIn failed");
      }
  },
  error => this.isError = true);
  }
}