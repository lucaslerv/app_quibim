import { RestService } from './services/rest.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from 'src/material-modulte';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './services/message.service';
import { TodayComponent } from './grid/today/today.component';
import { HeaderComponent } from './grid/header/header.component';
import { CardComponent } from './grid/card/card.component';
import { DetailService } from './services/detail.service';
import { ModalComponent } from './grid/modal/modal.component';
import { PostDetailComponent } from './grid/post-detail/post-detail.component';
import { HomeComponent } from './grid/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    TodayComponent,
    HeaderComponent,
    CardComponent,
    ModalComponent,
    PostDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule, 
    MaterialExampleModule
  ],
  providers: [MessageService, RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
