import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Route } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

import { AuthComponent } from './auth/auth.component';
import { MapComponent } from './map/map.component';
import { PostComponent } from './post/post.component'

import { AngularFireModule } from 'angularfire2'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AgmCoreModule } from '@agm/core';

import { environment } from '../environments/environment'
import { AuthService } from './servicios/auth.service'

const routes: Route[]= [
{path: '', component: AuthComponent},
{path: 'map', component: MapComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    MapComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AgmCoreModule.forRoot({apiKey: 'AIzaSyDaIwOMyM_ktCpJxJFQMD_ORmVtI9ycgoU',
    libraries:['places']
    })
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
