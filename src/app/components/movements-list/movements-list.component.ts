import { Component, OnInit } from '@angular/core';
import { AccountHolderService } from 'src/app/services/account-holder.service';
import { MovementsService } from 'src/app/services/movements.service';

@Component({
  selector: 'app-movements-list',
  templateUrl: './movements-list.component.html',
  styleUrls: ['./movements-list.component.css']
})
export class MovementsListComponent implements OnInit {
  movimentacoes: any;
  correntistas: any;
  correntista: any = {};

  constructor(private movementsService: MovementsService,
    private accountHolderService: AccountHolderService) { }

  ngOnInit(): void {
    this.listMovimentacoes();
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

  listMovimentacoes(): void {
    this.movementsService.findByIdConta(this.correntista.id)
      .subscribe(
        data => {
          this.movimentacoes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )
  }



}
