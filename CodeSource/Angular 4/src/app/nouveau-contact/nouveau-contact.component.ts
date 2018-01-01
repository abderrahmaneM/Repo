import { Component, OnInit } from '@angular/core';
import {Contact} from '../module/module.contact';
import { ContactsService } from '../service/contacts.service';
@Component({
  selector: 'app-nouveau-contact',
  templateUrl: './nouveau-contact.component.html',
  styleUrls: ['./nouveau-contact.component.css']
})
export class NouveauContactComponent implements OnInit {
  contact:Contact=new Contact();
  mode:number=1;
  constructor(public contactService:ContactsService) { }

  ngOnInit() {
  }

  saveContact(){
    this.contactService.saveContact(this.contact)
    .subscribe(data=>{
      this.contact=data
      this.mode=2;
      console.log(data)
    },err=>{
      console.log(err);
    })
  }

}
