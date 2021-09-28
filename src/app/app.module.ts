import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import Amplify from '@aws-amplify/auth';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

Amplify.configure({
    Auth: {

        // REQUIRED - Amazon Cognito Region
        region: 'us-east-2',

        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'us-east-2_drQLUBX22',

        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: '59to1e0udom7gbgqnc3jj59v7l',

        // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
        mandatorySignIn: false,

    
         // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
         authenticationFlowType: 'USER_PASSWORD_AUTH',

        //  OPTIONAL - Hosted UI configuration
        oauth: {
            scope: [ 'email', 'openid'],
            redirectSignIn: 'http://localhost:4200/auth',
            redirectSignOut: 'http://localhost:4200/auth/',
            responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
        }
    }
});


import { Hub } from 'aws-amplify';
import { DashComponent } from './dash/dash.component';
import { SigninComponent } from './signin/signin.component';



const listener = (data:any) => {
    // const logger = new Logger('My-Logger');
    switch (data.payload.event) {
        case 'signIn':
            console.log('user signed in');
            break;
        case 'signUp':
            console.log('user signed up');
            break;
        case 'signOut':
            console.log('user signed out');
            break;
        case 'signIn_failure':
            console.error('user sign in failed');
            break;
        case 'tokenRefresh':
            console.log('token refresh succeeded');
            break;
        case 'tokenRefresh_failure':
            console.error('token refresh failed');
            break;
        case 'configured':
            console.log('the Auth module is configured');
    }
}

Hub.listen('auth', listener);
// You can get the current config object
// const currentConfig = Auth.configure();

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyUIAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
