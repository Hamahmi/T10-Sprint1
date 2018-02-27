import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeModule } from './@theme/theme.module';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {NbEmailPassAuthProvider, NbAuthModule, NbAuthService} from '@nebular/auth';
import { OrderService } from './orders/order.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    AppRoutingModule,
    NbAuthModule.forRoot({
  providers: {
        email: {
          service: NbEmailPassAuthProvider,
          config: {
            baseEndpoint: 'http://localhost:3000/'
          },
        },
      },
      forms:  {
        login: {
          redirectDelay: 0,
        },
        register: {
          redirectDelay: 0,
        },
        requestPassword: {
          redirectDelay: 0,
        },
        resetPassword: {
          redirectDelay: 0,
        },
        logout: {
          redirectDelay: 0,
        },
      },
    })
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }, NbAuthService, OrderService]
})
export class AppModule {}
