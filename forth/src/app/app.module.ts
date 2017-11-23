import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Route } from '@angular/router';
import { LeftOneComponent } from './left/left-one/left-one.component';
import { LeftTwoComponent } from './left/left-two/left-two.component';

var routes: Route[] = [
  {
    path: "route1",
    component: LeftComponent
  }
  , {
    path: "route2",
    component: RightComponent
  }
  , {
    path: "route3",
    component: LeftOneComponent
  },
  {
    path: "route4",
    component: LeftTwoComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    LeftComponent,
    RightComponent,
    MenuComponent,
    LeftOneComponent,
    LeftTwoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
