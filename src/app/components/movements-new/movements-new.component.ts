import { Component, OnInit } from '@angular/core';
import { AccountHolderService } from 'src/app/services/account-holder.service';
import { MovementsService } from 'src/app/services/movements.service';

@Component({
  selector: 'app-movements-new',
  templateUrl: './movements-new.component.html',
  styleUrls: ['./movements-new.component.css']
})
export class MovementsNewComponent implements OnInit {
  correntistas: any;
  correntista:any;
  valor:any;
  dataHora:any;
  tipo:any;
  descricao:any;

  constructor(
    private movementsService: MovementsService,
    private accountHolderService: AccountHolderService) { }

  ngOnInit(): void {
    this.exibirCorrentistas();
  }

  exibirCorrentistas(): void {
    this.accountHolderService.list()
      .subscribe(
        data => {
          this.correntistas = data;
          console.log("Correntistas:");
          console.log(this.correntistas);
        },
        error => {
          console.log(error);
        }
      );
  }

  save(): void {
    console.log(this.correntista)
    const movimentacao = {
      valor:this.valor,
      descricao:this.descricao,
      tipo:this.tipo,
      idConta:this.correntista.id,
      dataHora:this.dataHora
    };

    console.log(movimentacao);
    this.movementsService.create(movimentacao)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

}
