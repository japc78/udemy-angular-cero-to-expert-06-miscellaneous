import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APPROUTING } from './app.routes';


import { AppComponent } from './app.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { CssComponent } from './components/css/css.component';
import { ClassComponent } from './components/class/class.component';
import { HighlightedDirective } from './directives/highlighted.directive';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { UserNewComponent } from './components/user/user-new.component';
import { UserDetailsComponent } from './components/user/user-details.component';
import { UserEditComponent } from './components/user/user-edit.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    CssComponent,
    ClassComponent,
    HighlightedDirective,
    NgSwitchComponent,
    HomeComponent,
    UserComponent,
    UserNewComponent,
    UserDetailsComponent,
    UserEditComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    APPROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
