import {PluginHomeComponent} from "./plugin-home.component";
import {Routes} from "@angular/router";

export const PLUGIN_ROUTES: Routes = [
  { path: '', component: PluginHomeComponent, pathMatch: 'full'}
];
