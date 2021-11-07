import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  // /
  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  {
    path: 'settings',
    loadChildren: async () => {
      const module = await import('../settings/settings.module');
      return module.SettingsModule;
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
