
import { RouterModule, Routes } from '@angular/router';


import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import { SkillComponent } from './skill/skill.component';
import { AboutComponent } from './about/about.component';


const arr: Routes=[
  { path: '', component:HomeComponent},
{ path: 'contact', component:ContactComponent},
{ path: 'project', component:ProjectComponent},
{ path: 'skill', component:SkillComponent},
{ path: 'about', component:AboutComponent},

];

export const arrRouting= RouterModule.forRoot(arr);
