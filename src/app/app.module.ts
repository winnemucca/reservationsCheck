import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CampSpotComponent } from './camp-spot/camp-spot.component';

import {CampSpotService} from './camp-spot-service.service';

@NgModule({
  declarations: [
    AppComponent,
    CampSpotComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CampSpotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
