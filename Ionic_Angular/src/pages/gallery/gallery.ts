import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
import{LoadingController} from 'ionic-angular';
import "rxjs/add/operator/map";
import {GalleryService} from '../../services/gallery.service';
import{DetailgalleryPage} from '../detailgallery/detailgallery';
import { ToastController } from 'ionic-angular';


/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
motcle:string;
size:number=5;
page:number;
totalpages:number;
images:any={hits:[]};
currentPage:number=1;


  constructor(public navCtrl: NavController, public navParams: NavParams,
      public http:Http,
      private loading: LoadingController,
      public service:GalleryService,
      public toastCtrl: ToastController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
    
  }
  dosearch(){
   
    
    this.images.hits=[];
    this.search();
    
  }
  search(){
      let toast = this.toastCtrl.create({
        message: "ville choisit: "+this.motcle,
        duration: 100000000
      });
      toast.present();
    
    
    let loading= this.loading.create({
      content:"loading..."
    })
loading.present();

   /*return this.service.chercher(this.motcle)*/
   return this
   .service.chercher(this.motcle, this.size,this.currentPage)
  

   .subscribe(data=>{
     this.totalpages=data.totalHits / this.size;
     if(this.totalpages % this.size !=0) ++this.totalpages;
     data.hits.forEach(h => {
      this.images.hits.push(h);
      console.log("les pages:" +this.totalpages);
      
     });loading.dismiss();
     toast.dismiss()
    // this.images=data;

    }, error=>{
      console.log(error)
      loading.dismiss();
      
       })

    }
    doInfinte(infinite){
     // console.log(this.currentPage)
if(this.currentPage<this.totalpages){
  console.log(this.currentPage+ "/" +this.totalpages)
  ++this.currentPage;
 // console.log(this.currentPage)
  this.search()
  infinite.complete();
}


    }
    detail(img){
      console.log("test")
      this.navCtrl.push(DetailgalleryPage, {Myimage:img})
    }
   
    }
  

