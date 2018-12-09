
import {Injectable } from '@angular/core';
import{Http} from '@angular/http';
@Injectable()
export class GalleryService{
    url:string="https://pixabay.com/api/?key=6851086-cdca0b531b149860a50681fb4&q=tunis&per_page=10&page=1";
    query:string;
    size:number; page:number
    constructor(private http:Http){
//query:string, size:number,page: number
    }
    chercher(query:string, size:number, page:number){
       return this.http
        .get("https://pixabay.com/api/?key=6851086-cdca0b531b149860a50681fb4&q="
        +query+"&per_page="+size+"&page"+page)
        .map(resp=>resp.json());

        }

}