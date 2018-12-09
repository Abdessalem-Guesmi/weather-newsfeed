import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
contact={
  name:"abdou",
email: "abdou@gmail.com",
photo:"./assets/imgs/Moi.jpg"
}
  constructor(public navCtrl: NavController) {

  }

}
