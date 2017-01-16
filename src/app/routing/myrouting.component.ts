import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { MyDynamicRoutingComponent } from './mydynamicrouting.component';

@Component({
    selector: 'app-myrouting', 
    template: ''
})
export class MyRoutingComponent implements OnInit{
    constructor(private cfr: ComponentFactoryResolver, private vcr: ViewContainerRef) { }

    ngOnInit(): void {
        const factory = this.cfr.resolveComponentFactory(MyDynamicRoutingComponent);
        const ref = this.vcr.createComponent(factory);
        ref.changeDetectorRef.detectChanges();
    }
}
