import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from 'primeng/api';
import { PrimengModule } from './shared/primeng/primeng.module';
import { HttpClientModule } from '@angular/common/http';
import { DomainModule } from './domain/domain.module';
import { InfraestructureModule } from './infraestructure/infraestructure.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApplicationModule } from './application/application.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ApplicationModule,
    InfraestructureModule,
    DomainModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    PrimengModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
