import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoginResult } from '../model/ILoginResult';
import { IUsuario } from '../model/Usuario';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  setUser(user: IUsuario): void {
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);
  }

  getUser(): IUsuario {
    let user_string = localStorage.getItem("currentUser");
    if (user_string != null) {
      let user: IUsuario = JSON.parse(user_string);
      return user;
    }
    return null as any;
  }

  isUserLogged () {
    return this.getUser() != null;
  }

  userRole () {
    return this.getUser().tipo;
  }


  login (usuario: any, password: any) { 
    let json = JSON.stringify({username: usuario, password: password});
    let headers = new HttpHeaders().set('Content-Type','application/json');    
    return this.http.post<IUsuario>('/ttps-spring/usuarios/login',json, {headers : headers });
  }

  registacion (usuario: any, password: any, email: any, tipo: any) { 
    let json = JSON.stringify({idUsuario: usuario, password: password, email:email, tipo: tipo});
    let headers = new HttpHeaders().set('Content-Type','application/json');    
    return this.http.post<ILoginResult>('/ttps-spring/usuarios/',json, {headers : headers });
  }

  logoutUser() {
    localStorage.removeItem("currentUser");
  }

  updateUser (usuario : any)  {
    const url_api = `/ttps-spring/usuarios/` + this.getUser().id;
    let headers = new HttpHeaders().set('Content-Type','application/json');
   /* this.getUser().email = email;
    this.getUser().password = password;/*/
    console.log("updateUser " +usuario.email);
    console.log("updateUser " + usuario.password);
    return this.http.put<IUsuario>(url_api, usuario, { headers: headers });
  }
}
