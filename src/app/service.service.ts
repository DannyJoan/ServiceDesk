import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getObtenerIncidencias() {
    return this.http.get(`${this.url}/obtenerIncidencias`).toPromise();
  }

  getGC(){
    return this.http.get(`${this.url}/obtenerIncidenciasGC`).toPromise();
  }

  getDQ(){
    return this.http.get(`${this.url}/obtenerIncidenciasDQ`).toPromise();
  }

  getDB(){
    return this.http.get(`${this.url}/obtenerIncidenciasDB`).toPromise();
  }

  getCG(){
    return this.http.get(`${this.url}/obtenerIncidenciasCG`).toPromise();
  }

  getLO(){
    return this.http.get(`${this.url}/obtenerIncidenciasLO`).toPromise();
  }

  getSC(){
    return this.http.get(`${this.url}/obtenerIncidenciasSC`).toPromise();
  }


}
