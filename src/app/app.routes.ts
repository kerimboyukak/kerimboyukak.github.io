import { Routes } from '@angular/router';
import {HomeComponent} from "./core/home/home.component";
import {AboutComponent} from "./core/about/about.component";
import {ProjectsComponent} from "./core/projects/projects.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '**', redirectTo: '' },
];
