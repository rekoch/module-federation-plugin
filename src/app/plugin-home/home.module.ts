import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from "@angular/router";
import {PLUGIN_ROUTES} from "./home-routes";
import {PluginHomeComponent} from "./plugin-home.component";

@NgModule({
  declarations: [
    PluginHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PLUGIN_ROUTES)
  ]
})
export class HomeModule { }
