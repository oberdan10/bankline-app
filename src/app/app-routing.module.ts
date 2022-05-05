import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovementsNewComponent } from  './components/movements-new/movements-new.component';
import { MovementsListComponent } from './components/movements-list/movements-list.component';
import { AccountHolderComponent } from './components/account-holder/account-holder.component';

const routes: Routes = [
  {path: 'movements-new', component: MovementsNewComponent},
  {path: 'movements', component: MovementsListComponent},
  {path: 'account-holder', component: AccountHolderComponent},
  {path: '', redirectTo: 'movements', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
