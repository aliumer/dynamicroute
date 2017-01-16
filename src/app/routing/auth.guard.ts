import { LoginService } from '../_services/login.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRoute, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class AuthGuard implements CanActivate {
    private sub: Subscription;

    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        private _loginService: LoginService) { }

    canActivate(): boolean {
        this.activatedRoute.url.subscribe((x) => {
            console.log(x);
        });

        let retValue: boolean = true;

        this.sub = this.router.events.subscribe(event => {
            console.log(event.constructor.name);
            if (event instanceof NavigationStart) {
                retValue = this._loginService.canActive(event.url);
                console.log('inner:', retValue, event.url);
            }
        });
        console.log('outer', retValue);
        setTimeout(() => {
            this.sub.unsubscribe();
        }, 2000);
        return retValue;

        // If not, they redirect them to the home page
        // this.router.navigate(['/home']);
    }


}​