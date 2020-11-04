import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



import { arrRouting } from './app.routing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import { SkillComponent } from './skill/skill.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    ProjectComponent,
    SkillComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,RouterModule,arrRouting,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
