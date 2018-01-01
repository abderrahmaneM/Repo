import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
import { Observable } from "rxjs/Observable"
import { Contact } from '../module/module.contact';


@Injectable()
export class ContactsService {

  constructor(public http:Http) {
   
   }
   getContacts(motCle:string,page:number,size:number){
    return this.http.get("http://localhost:8080/chercherContacts?mc="+motCle+"&size="+size+"&page="+page)
    .map(response=>response.json());
   }

   getContact(id:Number){
    return this.http.get("http://localhost:8080/contacts/"+id)
    .map(response=>response.json());
   }

   saveContact(contact:Contact){
    return this.http.post("http://localhost:8080/contacts",contact)
    .map(response=>response.json());
   }

   updateContact(contact:Contact){
    return this.http.put("http://localhost:8080/contacts/"+contact.id,contact)
    .map(response=>response.json());
   }

   deleteContact(id:number){
    return this.http.delete("http://localhost:8080/contacts/"+id)
    .map(response=>response.json());
   }

}
