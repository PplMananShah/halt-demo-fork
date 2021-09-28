import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashComponent } from './dash/dash.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { path: 'auth', component: DashComponent },
  { path: '**', component: SigninComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
