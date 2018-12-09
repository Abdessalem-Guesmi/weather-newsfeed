import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailgalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailgallery',
  templateUrl: 'detailgallery.html',
})
export class DetailgalleryPage {
image:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.image=this.navParams.data.Myimage; 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailgalleryPage');
  }

}
