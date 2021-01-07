import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './loader/loader.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderFrameComponent } from './header-frame/header-frame.component';
import { AboutFrameComponent } from './about-frame/about-frame.component';
import { SkillsFrameComponent } from './skills-frame/skills-frame.component';
import { EducationFrameComponent } from './education-frame/education-frame.component';
import { ProjectsFrameComponent } from './projects-frame/projects-frame.component';
import { BgImageWrapperComponent } from './bg-image-wrapper/bg-image-wrapper.component';
import { ShadowboxComponent } from './shadowbox/shadowbox.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    NavigationComponent,
    HeaderFrameComponent,
    AboutFrameComponent,
    SkillsFrameComponent,
    EducationFrameComponent,
    ProjectsFrameComponent,
    BgImageWrapperComponent,
    ShadowboxComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
