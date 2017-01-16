import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { Observable } from 'rxjs';

// import { AuthGuard } from '../routing/auth.guard';

import { VehiclesComponent } from '../vehicles/vehicles.component';
import { HomeComponent } from '../home/home.component';
import { ManojComponent } from '../manoj/manoj.component';
import { ShahidComponent } from '../shahid/shahid.component';
import { PrabhuComponent } from '../prabhu/prabhu.component';
import { TerryComponent } from '../terry/terry.component';


@Injectable()
export class LoginService {
    appRoutes: Routes = [{ path: 'home', component: HomeComponent },
    { path: 'vehicles', component: VehiclesComponent }];

    // this would be method to get the routes array depending on loggedIn user. 
    canActive(_path: string): boolean {
        console.log(_path);
        let filter = this.appRoutes.filter(item => _path.indexOf(item.path) !== -1);
        return (filter.length > 0);
    }

    getRoutes(userId: string): Observable<Routes> | Routes {

        if (userId === 'mj@qa.com') {
            this.appRoutes.push(
                { path: 'manoj', component: ManojComponent });
        }
        if (userId === 'sa@qa.com') {
            this.appRoutes.push(
                { path: 'shahid', component: ShahidComponent });
        }
        if (userId === 'pm@qa.com') {
            this.appRoutes.push(
                { path: 'prabhu', component: PrabhuComponent });
        }
        if (userId === 'tb@qa.com') {
            this.appRoutes.push({ path: 'terry', component: TerryComponent });
        }
        return this.appRoutes;
    }

}
