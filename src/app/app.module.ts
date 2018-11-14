import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { JWTAuthService } from './jwt-auth.service';
import { JwtModule} from '@auth0/angular-jwt';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function  tokenGetter() {
          return     localStorage.getItem('access_token');
          },
        whitelistedDomains: ['localhost:3000'],  // allowed to receive the JWT token
        blacklistedRoutes: ['http://localhost:3000/auth/login']  // not allowed to receive the JWT token
      }
    })
  ],
  providers: [JWTAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
