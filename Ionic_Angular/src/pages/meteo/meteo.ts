import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{Http} from '@angular/http';
import{LoadingController} from 'ionic-angular';
import{DetailmeteoPage} from '../detailmeteo/detailmeteo';

/**
 * Generated class for the MeteoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meteo',
  templateUrl: 'meteo.html',
})
export class MeteoPage {
meteo:any;
meteos:any
url="assets/imgs"
url1="assets/meteo"
mode=0;
//ville:string="";
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http:Http,
    public loadctrl: LoadingController
  
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeteoPage');
  }


  getMeteo(dataForm){
let loading = this.loadctrl.create({
  content: dataForm.ville
});
loading.present()
    this.http.
    get("http://api.openweathermap.org/data/2.5/forecast?q="+dataForm.ville+"&appid=8e45562a381fc01998f0b123226c8f50")
    .map(resp=>resp.json()).
    subscribe(data=>{
this.meteo=data;
this.meteos=this.meteo;
data=dataForm.ville;
this.mode=1;
console.log(dataForm.ville)
loading.dismiss();
    },error=>{
      console.log(error)
      console.log(dataForm.ville +": not found!!!!! try again")
      loading.dismiss();
      
    })
   
  }
  back(mt){
    this.navCtrl.push(DetailmeteoPage, {Mymeteo:mt});
  }
  newsearch(){
    this.navCtrl.push(MeteoPage);
  }

}
