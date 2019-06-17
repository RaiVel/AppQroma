import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RestService } from './servicios/rest.service';

import {AngularFireModule} from '@angular/fire'
import {AngularFireAuthModule} from '@angular/fire/auth'

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [ BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,
    //Acceso a Firebase para la validacion del usuario, los cuales ya se encuentran registrados
     AngularFireModule.initializeApp({
      apiKey: "AIzaSyCddU5JqGhvhtVlh5iYYJz2V3QtMrgvcnE",
      authDomain: "qroma-c503b.firebaseapp.com",
      databaseURL: "https://qroma-c503b.firebaseio.com",
      projectId: "qroma-c503b",
      storageBucket: "qroma-c503b.appspot.com",
      messagingSenderId: "417426163264",
      appId: "1:417426163264:web:e2b2a394d1614498"
    }),AngularFireAuthModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, RestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
