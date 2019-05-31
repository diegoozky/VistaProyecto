import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListaAdminComponent } from './lista-admin/lista-admin.component';
import { ListaUserComponent } from './lista-user/lista-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListaAdminComponent,
    ListaUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
