import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { BacklogPageComponent } from '@app/modules/backlog/pages';

const routes: Routes = [
    { path: 'default', component: BacklogPageComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class BacklogRoutingModule { }
