import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CardComponent } from './component/card/card.component';
import { FolderComponent } from './component/folder/folder.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardComponent,
    FolderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
