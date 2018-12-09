import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ActualiteService} from'../../services/actualites.service';
import{Actualite} from '../actualites/Actualite'
import{ActualitesPage} from '../actualites/actualites';

/**
 * Generated class for the AjouactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajouact',
  templateUrl: 'ajouact.html',
})
export class AjouactPage {
  act:Actualite = new Actualite()
mode=0
  constructor(public navCtrl: NavController, public navParams: NavParams,

    public serviceact: ActualiteService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjouactPage');
  }
 

  ajout(){
 
    this.serviceact.addact(this.act).subscribe(data=>{
      this.act=data;
      this.mode=1
      console.log(this.act.nomAuteur)
     // this.navCtrl.push(ActualitesPage)
    },error=>{
      console.log(error)
    })
  }
}
