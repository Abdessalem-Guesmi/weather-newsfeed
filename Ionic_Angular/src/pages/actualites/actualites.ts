import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import{ActualiteService} from'../../services/actualites.service';
import { ToastController } from 'ionic-angular';
import {DetailactPage} from'../../pages/detailact/detailact';
import{AjouactPage} from '../../pages/ajouact/ajouact';


/**
 * Generated class for the ActualitesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-actualites',
  templateUrl: 'actualites.html',
})
export class ActualitesPage {
    pageAct={};
    imgurl:string="./assets/imgs/"
    listActualites=[];
    currentpage=0;
    size=5;
   pagecount=0;
   totalpages:number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public serviceact: ActualiteService,
    public toastCtrl: ToastController,
    public modal:ModalController
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActualitesPage');
    console.log("actualites!!!!!")
    this.go();
    }
    go(){
      this.serviceact.getactualite(this.currentpage, this.size)
      .subscribe(data=>{
        this.totalpages=data.totalPages
        data.content.forEach(act => {
          this.pagecount=data.totalPages;
          this.listActualites.push(act);
    
        });
      }, error=>{
    console.log(error);
      });
    }
  doInfinte(infinite){
    console.log(this.currentpage)
if(this.currentpage<this.totalpages){
  ++this.currentpage;
 console.log(this.currentpage+ "/" +this.totalpages)
 this.go();


 infinite.complete();
 


}
}
 
openModal(){
  let modal = this.modal.create(AjouactPage);
  modal.present();
  // refresh data after modal dismissed
  modal.onDidDismiss(() => this.ionViewDidLoad())
}
  goAct(ActId){
    this.navCtrl.push(DetailactPage, {id:ActId});
  }

}
