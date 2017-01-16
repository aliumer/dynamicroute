import { NgModule } from '@angular/core';
import { LoginService } from '../_services/login.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

// ************ user components ***************************
import { MyRoutingComponent } from './myrouting.component';
import { MyDynamicRoutingComponent } from './mydynamicrouting.component';
import { HomeComponent } from '../home/home.component';
import { VehiclesComponent } from '../vehicles/vehicles.component';
import { ManojComponent } from '../manoj/manoj.component';
import { ShahidComponent } from '../shahid/shahid.component';
import { PrabhuComponent } from '../prabhu/prabhu.component';
import { TerryComponent } from '../terry/terry.component';


@NgModule({
    declarations: [
        MyRoutingComponent,
        MyDynamicRoutingComponent,
        HomeComponent,
        VehiclesComponent,
        ManojComponent,
        ShahidComponent,
        PrabhuComponent,
        TerryComponent],

    imports: [BrowserModule,
        CommonModule,
        RouterModule.forRoot([
            { path: 'home', component: HomeComponent },
            { path: 'vehicles', component: VehiclesComponent },
            { path: 'manoj', component: ManojComponent, canActivate: [AuthGuard] },
            { path: 'shahid', component: ShahidComponent, canActivate: [AuthGuard] },
            { path: 'prabhu', component: PrabhuComponent, canActivate: [AuthGuard] },
            { path: 'terry', component: TerryComponent, canActivate: [AuthGuard] },
            { path: '', redirectTo: 'home', pathMatch: 'full'},
            { path: '**', redirectTo: '' }
        ])
    ],

    exports: [MyRoutingComponent],
    providers: [LoginService, AuthGuard],
    entryComponents: [MyDynamicRoutingComponent]
})
export class MyRoutingModule {
}