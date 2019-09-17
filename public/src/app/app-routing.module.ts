import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LightModeComponent } from './components/light-mode/light-mode.component';
import { DarkModeComponent } from './components/dark-mode/dark-mode.component';
import { BlogComponent } from './components/blog/blog/blog.component';

const routes: Routes = [
    {
        path: '',
        component: LightModeComponent
    },
    {
        path: 'dark',
        component: DarkModeComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
