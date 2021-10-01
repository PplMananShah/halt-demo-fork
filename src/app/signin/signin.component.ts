import { Component, ChangeDetectorRef,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
import { Auth } from 'aws-amplify';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  title = 'ionic-angular-auth';
  user: CognitoUserInterface | undefined;

  authState: AuthState;

  constructor(private ref: ChangeDetectorRef, private router: Router) {}

  async ngOnInit() {
    onAuthUIStateChange(async (authState, authData) => {
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      if (!this.ref['destroyed']) {
        this.ref.detectChanges();
      }
      if (this.authState === AuthState.SignedIn) {
        console.log('Sending token');
        let token = await Auth.currentSession();

        console.log(token.getIdToken());
        this.router.navigate(['/auth']);
      }
    });
  }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }
}