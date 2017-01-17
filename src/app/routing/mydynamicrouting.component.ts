import { Component, OnInit } from '@angular/core';
import { LoginService } from '../_services/login.service';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
    selector: 'app-dyn',
    templateUrl: './mydynamicrouting.component.html'
})
export class MyDynamicRoutingComponent implements OnInit {
    appRoutes: Routes;
    constructor(private _router: Router, private loginServices: LoginService) { }
    ngOnInit(): void {
        let userid = localStorage.getItem('userid');
        this.appRoutes = <Routes>this.loginServices.getRoutes(userid);
        RouterModule.forRoot(this.appRoutes);
    }
}
