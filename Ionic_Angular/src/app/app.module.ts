import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {GalleryPage} from '../pages/gallery/gallery';
import{MeteoPage} from '../pages/meteo/meteo';
import{PlacesPage} from '../pages/places/places';
import{DetailgalleryPage} from '../pages/detailgallery/detailgallery';
import{ActualitesPage} from '../pages/actualites/actualites';
import {HttpModule} from '@angular/http';
import{GalleryService} from '../services/gallery.service';
import{ActualiteService} from '../services/actualites.service'
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import{DetailactPage} from '../pages/detailact/detailact';
import{DetailmeteoPage} from '../pages/detailmeteo/detailmeteo';
import{AjouactPage} from'../pages/ajouact/ajouact'

@NgModule({
  declarations: [
    MyApp,
    HomePage, GalleryPage, MeteoPage, PlacesPage,DetailgalleryPage,
    ActualitesPage,DetailactPage,DetailmeteoPage,AjouactPage
    ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, GalleryPage,MeteoPage,PlacesPage,DetailgalleryPage,ActualitesPage,
    DetailactPage,DetailmeteoPage,AjouactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, HttpModule,GalleryService,ActualiteService
  ]
})
export class AppModule {}
