import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Consultas } from "../models/consultas";

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  // URL: string = 'http://localhost:3000/'
  
  URL: string = 'https://angular-app-2022.herokuapp.com/api/'

  // URL = environment.URL;
  
  constructor(private http: HttpClient) { }


  guardarConsulta(consulta: Consultas): Observable<any> {
    return this.http.post(this.URL, consulta)
  }

}
