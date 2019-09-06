import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { Routes, RouterModule } from '@angular/router';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';
import { CVComponent } from './cv/cv.component';
import {AngularFireModule} from "@angular/fire";
import { PortafolioComponent } from './portafolio/portafolio.component'

const appRoutes: Routes =[
  {path:'', component: InicioComponent},
  {path:'inicio', component: InicioComponent},
  {path:'QuienSoy', component: QuienSoyComponent},
  {path:'cv', component: CVComponent}
]
const firebaseConfig= {
  apiKey: "AIzaSyDaeQ73aB1tKkhnlpUtP2Jjz570ziwOhSI",
  authDomain: "alejozepol-4d4f3.firebaseapp.com",
  databaseURL: "https://alejozepol-4d4f3.firebaseio.com",
  projectId: "alejozepol-4d4f3",
  storageBucket: "",
  messagingSenderId: "200049812777",
}

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    QuienSoyComponent,
    CVComponent,
    PortafolioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
