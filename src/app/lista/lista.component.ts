import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public medicos: any;


  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.buscarMedicos();
  }

  buscarMedicos() {
    return this.apiService.get().subscribe(medicosList => {
      this.medicos = medicosList.data;  
    });
  }

  cadastrar() {
    this.router.navigate(['/cadastro']);
  }
}
