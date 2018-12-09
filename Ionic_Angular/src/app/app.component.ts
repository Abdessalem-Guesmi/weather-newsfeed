import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {GalleryPage} from '../pages/gallery/gallery';
import{MeteoPage} from '../pages/meteo/meteo';
import{PlacesPage} from '../pages/places/places';
import{DetailgalleryPage} from '../pages/detailgallery/detailgallery';
import{ActualitesPage} from '../pages/actualites/actualites';
import{AjouactPage} from '../pages/ajouact/ajouact'

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {


  rootPage:any = HomePage;
  menus=[
    {title:'My_Gallery', Component:GalleryPage},
    {title:'Info_Meteo', Component:MeteoPage},
    {title:'Places_Photo', Component:PlacesPage},
    {title:'home', Component:HomePage},
    {title:'actualite',  Component:ActualitesPage},

    
    
  ];
name:"abdou";
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      
   
    });
    this.name=name;
  }
  onPage(menu){
    this.rootPage=menu.Component;
  }
}

