import{Injectable} from '@angular/core';
import{Http} from '@angular/http';
import "rxjs/add/operator/map";
import{Actualite} from '../pages/actualites/Actualite';
@Injectable()
export class ActualiteService{
     pages:number
     size:number;
     url:string="http://localhost:9097";
actualite:Actualite=new Actualite();
constructor(private http:Http){


}
getactualite(pages:number,size:number){
   return this.http
    .get(this.url+"/actualites?page="+pages+"&size="+size)
    .map(resp=>resp.json());
}
getoneact(id:number){
return this.http.get(this.url+"/actualite/"+id)
.map(resp=>resp.json());
}
addact(actualite:Actualite){
    return this.http.post(this.url+"/actualite",actualite).map(resp=>resp.json())
}
}