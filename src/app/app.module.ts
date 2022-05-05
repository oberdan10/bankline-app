import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovementsListComponent } from './components/movements-list/movements-list.component';
import { MovementsNewComponent } from './components/movements-new/movements-new.component';
import { AccountHolderComponent } from './components/account-holder/account-holder.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Importar Recursos HTTPS//
import { HttpClientModule } from '@angular/common/http';
//Importar Formulários//
import { FormsModule } from '@angular/forms';

//Importar localização, formatação//
import {LOCALE_ID} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';

//mascara
import { CurrencyMaskModule } from "ng2-currency-mask";

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    MovementsListComponent,
    MovementsNewComponent,
    AccountHolderComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CurrencyMaskModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
