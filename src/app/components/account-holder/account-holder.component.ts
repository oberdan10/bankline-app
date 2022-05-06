import { Component, OnInit } from '@angular/core';
import { AccountHolderService } from 'src/app/services/account-holder.service';
import { SpecialtyService } from 'src/app/services/specialty.service';

@Component({
  selector: 'app-account-holder',
  templateUrl: './account-holder.component.html',
  styleUrls: ['./account-holder.component.css']
})
export class AccountHolderComponent implements OnInit {
  especialidades:any;
  especialidade:any;

  correntistas:any;
  cpf:any;
  nome:any;
  id_especialidade:any;

  constructor(private accountHolderService: AccountHolderService,
              private specialtyService: SpecialtyService) { }

  ngOnInit(): void {
    this.exibirCorrentistas();
    this.exibirEspecialidades();
  }

  exibirCorrentistas(): void {
    this.accountHolderService.list()
      .subscribe(
        data => {
          this.correntistas = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  exibirEspecialidades(): void {
    this.specialtyService.list()
      .subscribe(
        data => {
          this.especialidades = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  save(): void {
    const correntista = {
      cpf:this.cpf,
      nome:this.nome,
      especialidade_id: parseInt(this.especialidade.id)
    };
    console.log(correntista);
    this.accountHolderService.create(correntista)
      .subscribe(
        response => {
          console.log(response);
          this.exibirCorrentistas();
        },
        error => {
          console.log(error);
        });
  }
}
