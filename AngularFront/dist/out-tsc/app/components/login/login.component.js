var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
/*import { FlashMessagesService } from 'angular2-flash-messages';*/
import { Router } from '@angular/router';
let LoginComponent = class LoginComponent {
    constructor(
        /*private flashMessage:FlashMessagesService,*/
        route, authService) {
        this.route = route;
        this.authService = authService;
    }
    ngOnInit() {
    }
    loginSubmit() {
        const user = {
            email: this.email,
            password: this.password
        };
        /*  this.authService.loginUser(user).subscribe(data =>{
        
            if(data.success){
              this.authService.storeData(data.token,data.user);
              /!*this.flashMessage.show("Logged in",{cssClass:'alert-success',timeout:5000});*!/
              this.route.navigate(['/profile']);
            }else{
        
              /!*this.flashMessage.show(data.msg,{cssClass:'alert-danger',timeout:5000});*!/
              this.route.navigate(['login']);
        
            }
          })*/
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    }),
    __metadata("design:paramtypes", [Router,
        AuthService])
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=E:/3rd Year Project/webapp/TravelwithMe/AngularFront/src/app/components/login/login.component.js.map