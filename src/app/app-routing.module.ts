import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PluginHomeComponent} from "./plugin-home/plugin-home.component";

const routes: Routes = [
  { path: '', component: PluginHomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
