import { Routes } from '@angular/router';
import {HomeComponent} from "./core/home/home.component";
import {AboutComponent} from "./core/about/about.component";
import {ProjectsComponent} from "./core/projects/projects.component";
import {PersonalDevelopmentComponent} from "./core/personal-development/personal-development.component";
import {ProjectWeekComponent} from "./core/project-week/project-week.component";
import {HackathonForGoodComponent} from "./core/hackathon-for-good/hackathon-for-good.component";
import {HacktopiaComponent} from "./core/hacktopia/hacktopia.component";
import {SeminarsComponent} from "./core/seminars/seminars.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'personal-development', component: PersonalDevelopmentComponent },
  { path: 'project-week', component: ProjectWeekComponent },
  { path: 'hfg', component: HackathonForGoodComponent },
  { path: 'hacktopia', component: HacktopiaComponent },
  { path: 'seminars', component: SeminarsComponent },



  { path: '**', redirectTo: '' },
];
