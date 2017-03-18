import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {DownloadsComponent} from "./downloads.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'downloads',
                component: DownloadsComponent
            },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class DownloadsRoutingModule { }