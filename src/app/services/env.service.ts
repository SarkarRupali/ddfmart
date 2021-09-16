import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  Api_Url = 'http://bi.xonex.esy.es/wp-json/jwt-auth/v1/token';
  api_Url = 'http://bi.xonex.esy.es/wp-json/';
  
  constructor() { }
}
