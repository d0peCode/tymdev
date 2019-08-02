import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LightModeComponent} from './components/light-mode/light-mode.component';
import {DarkModeComponent} from './components/dark-mode/dark-mode.component';

const routes: Routes = [
  {
    path: '',
    component: LightModeComponent
  },
  {
    path: 'dark',
    component: DarkModeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
