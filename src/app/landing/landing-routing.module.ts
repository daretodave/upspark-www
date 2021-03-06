import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {LandingComponent} from "./landing.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: LandingComponent,

                data: {
                    meta: {
                        title: 'Upspark - The programmable desktop command runner.',
                    }
                }
            },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class LandingRoutingModule { }