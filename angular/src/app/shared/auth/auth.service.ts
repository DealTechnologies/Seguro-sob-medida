import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorage } from '../models/localStorage.enum';
import { LoginStorage } from '../models/loginStorage.interface';
import { Router } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient,
    private router: Router,
    private permissionsService: NgxPermissionsService) {
  }


  doLogin(user): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}login?email=${user.user}&password=${user.password}`, '');
  }

  doRegister(register): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}register?email=${register.email}&password=${register.password}&cpfCnpj=${register.cnpj}&user_type=${register.type}`, '');
  }


  authenticateUser(data): void {
    console.log('DATA', data);
    const loginStorage: LoginStorage = {
      stayConnected: false,
      isLogged: true,
      user: data.user,
      access_token: data.access_token
    };

    window.localStorage.setItem(LocalStorage.LOGIN_STORAGE, JSON.stringify(loginStorage));
    this.router.navigate(['/']);
  }

  loadPermissions(): void {
    this.setUserType(this.getUser().user_type);
    this.permissionsService.removePermission('NOT_LOGGED');
    this.permissionsService.addPermission('AUTH');

  }

  setUserType(userType): void {
    switch (userType) {
      case 2: {
        this.permissionsService.addPermission('SELLER');
        break;
      }
      default: {
        this.permissionsService.addPermission('BUYER');
      }
    }
  }

  isLogged(): boolean {
    const loginStorage: LoginStorage = JSON.parse(window.localStorage.getItem(LocalStorage.LOGIN_STORAGE));
    return !!loginStorage?.isLogged;
  }

  doLogout(): void {
    window.localStorage.removeItem(LocalStorage.LOGIN_STORAGE);
    this.router.navigate(['/tela-inicio']);
    this.permissionsService.loadPermissions(['NOT_LOGGED']);

  }

  getToken(): any {
    const loginStorage: LoginStorage = JSON.parse(window.localStorage.getItem(LocalStorage.LOGIN_STORAGE));
    return loginStorage?.access_token;
  }

  getUser(): any {
    const loginStorage: LoginStorage = JSON.parse(window.localStorage.getItem(LocalStorage.LOGIN_STORAGE));
    return loginStorage?.user;
  }


}
