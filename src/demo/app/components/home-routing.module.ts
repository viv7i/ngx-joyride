import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { NgModule, Component } from "@angular/core";

@Component({
    selector: 'sel-a',
    template: '<div joyrideStep="myStep">Route A</div><div>Route A subtitle</div>'
})
export class PageAComponent { }

@Component({
    selector: 'sel-b',
    template:`<div joyrideStep="myStep2" [stepContent]="somecontent" [stepContentParams]="somecontentparams">Route B</div>
    <ng-template #somecontent let-name="name">Hello {{name}} from dynamic template</ng-template>`
})
export class PageBComponent { }


const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    { path: 'routeA', component: PageAComponent },
    { path: 'routeB', component: PageBComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }