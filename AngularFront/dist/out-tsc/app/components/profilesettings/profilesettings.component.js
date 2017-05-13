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
export let ProfilesettingsComponent = class ProfilesettingsComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        this.authService.getProfile().subscribe(profile => {
            this.user = profile.user;
            console.log(this.user);
        }, err => {
            console.log(err);
            return false;
        });
    }
};
ProfilesettingsComponent = __decorate([
    Component({
        selector: 'app-profilesettings',
        templateUrl: './profilesettings.component.html',
        styleUrls: ['./profilesettings.component.css']
    }), 
    __metadata('design:paramtypes', [AuthService])
], ProfilesettingsComponent);
//# sourceMappingURL=E:/3rd Year Project/webapp/TravelwithMe/AngularFront/src/app/components/profilesettings/profilesettings.component.js.map