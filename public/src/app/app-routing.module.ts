import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LightModeComponent } from './components/landing/light-mode.component';
import { BlogComponent } from './components/blog/blog.component';

const routes: Routes = [
    {
        path: '',
        component: LightModeComponent
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
