import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{Http} from'@angular/http';
import{ActualiteService} from'../../services/actualites.service';
import{Actualite} from'../actualites/Actualite';
import{ActualitesPage} from'../actualites/actualites';

/**
 * Generated class for the DetailactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailact',
  templateUrl: 'detailact.html',
})
export class DetailactPage {
  id_actualite:any;
  actualite:Actualite = new Actualite();
  imgurl:string="./assets/imgs/";

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public http:Http,
     public serviceact: ActualiteService
    ) {
   this.id_actualite= navParams.data.id
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailactPage');
    this.serviceact.getoneact(this.id_actualite)
    .subscribe(data=>{
      this.actualite=data;
    // this.actualite.id=this.id_actualite;
    },error=>{
      console.log(error);
    })
  console.log(this.id_actualite)

  }
back(){
  this.navCtrl.push(ActualitesPage);
}
}
