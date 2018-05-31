import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { AlertsService } from 'angular-alert-module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private alertService: AlertsService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  cadastrarMedico(form){

    return this.apiService.post(form.value).subscribe(medico => {
      if(medico.errors != null) {
        let messagem;
        messagem = medico.errors.forEach(m => {
          this.alertService.setMessage(m, 'error');
        })
      }
      this.alertService.setMessage("Médico Cadastrado com Sucesso", 'success');
    });
    
  }

  voltar() {
    this.router.navigate(['/medicos']);
  }

}
