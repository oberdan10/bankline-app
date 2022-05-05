import { Component, OnInit } from '@angular/core';
import { AccountHolderService } from 'src/app/services/account-holder.service';

@Component({
  selector: 'app-account-holder',
  templateUrl: './account-holder.component.html',
  styleUrls: ['./account-holder.component.css']
})
export class AccountHolderComponent implements OnInit {

  correntistas:any;
  cpf:any;
  nome:any;

  constructor(private accountHolderService: AccountHolderService,) { }

  ngOnInit(): void {
    this.exibirCorrentistas();
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
  save(): void {
    const correntista = {
      cpf:this.cpf,
      nome:this.nome
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
