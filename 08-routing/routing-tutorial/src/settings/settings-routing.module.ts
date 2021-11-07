
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'user', component: UserPageComponent}
    ])
  ],
  exports: [RouterModule]
})
export class SettingsRoutingModule {

}
