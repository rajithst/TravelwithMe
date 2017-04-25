import { Component, OnInit } from '@angular/core';
/*import { FlashMessagesService } from 'angular2-flash-messages';*/
import { Router } from '@angular/router';
import {Auth0Service} from '../../services/auth0.service'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  profile: any;
  actoken: any;
  userid:any;
  constructor(
    /*private flashMessage:FlashMessagesService,*/
    private route:Router,
    private auth: Auth0Service
  ) { }

  ngOnInit() {
    this.profile = JSON.parse(localStorage.getItem('profile'));
    const data = {
      id: this.profile.identities[0].user_id,
      provider: this.profile.identities[0].provider,
      userid: this.profile.user_id
    };
  }

  logoutClick(){

    console.log("ss")
    this.auth.logout();
    this.route.navigate([""]);
    return false;

    }
    /*this.flashMessage.show(" Youre logged Out",{cssClass:'alert-success',timeout:5000});*/




}
