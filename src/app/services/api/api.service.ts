import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrl } from 'src/app/interfaces/ApiUrl';
import { HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders();
headers.append("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
headers.append('Content-Type', 'application/json');

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private api_url = 'http://localhost:8080/';

  constructor(
    private http: HttpClient,
  ) {  }

  get() {
    return this.http.get<ApiUrl>(this.api_url + 'listarmedicos', )
  }

  post(data: any) {
    return this.http.post<ApiUrl>(this.api_url + 'cadastrarmedicos', data, { headers: headers })
  }


  put(data: any) {
    const id_number = parseInt(data.id)
    const update_url = this.api_url + '/' + id_number;

    return this.http.put<any>(update_url, data)
  }





}
