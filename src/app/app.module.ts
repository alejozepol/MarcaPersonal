import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { Routes, RouterModule } from '@angular/router';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';

const appRoutes: Routes =[
  {path:'', component: InicioComponent},
  {path:'inicio', component: InicioComponent},
  {path:'QuienSoy', component: QuienSoyComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    QuienSoyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
