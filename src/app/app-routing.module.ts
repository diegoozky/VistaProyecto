import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListaAdminComponent } from './lista-admin/lista-admin.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo:'/login', pathMatch: 'full'},
  {path: 'listaAdmin', component: ListaAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
