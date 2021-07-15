import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public usuarioService : UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  isAuthenticate () {
    return this.usuarioService.isUserLogged();
  } 

  getUserId () {
    return this.usuarioService.getUser().idUsuario;
  }

  onLogout() {
    console.log("on logout");
    this.usuarioService.logoutUser();
    this.router.navigate(['../login']) ;
  }

  isOrgEventos () {
    return this.usuarioService.getUser().tipo == "ORG_EVENTOS";
  }

  isFoodTruck () {
    return this.usuarioService.getUser().tipo == "FOOD_TUCKER";
  }
}
