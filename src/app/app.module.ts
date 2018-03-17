import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HttpClient, HttpParams } from "@angular/common/http";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { LedCommanderComponent } from "./led-commander/led-commander.component";
import { LedServiceService } from "./led-service.service";
import { FadeInputComponent } from "./fade-input/fade-input.component";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LedCommanderComponent,
    FadeInputComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: "",
        component: LedCommanderComponent
      }
    ])
  ],
  providers: [LedServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
