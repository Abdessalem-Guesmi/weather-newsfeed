import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailmeteoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailmeteo',
  templateUrl: 'detailmeteo.html',
})
export class DetailmeteoPage {
meteo:any=[];
meteos:any;
url="assets/imgs"
url1="assets/meteo"
  constructor(public navCtrl: NavController, public navParams: NavParams) {
this.meteo=navParams.data.Mymeteo;
  }

  ionViewDidLoad() {
    console.log(this.meteo)
    console.log('ionViewDidLoad DetailmeteoPage');

    
  }


}
