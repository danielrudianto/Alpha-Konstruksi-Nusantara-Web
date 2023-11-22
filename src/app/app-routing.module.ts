import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './page/blog/blog.component';
import { LandingComponent } from './page/landing/landing.component';
import {
  DialogEntryComponent,
  ProjectDetailComponent,
} from './page/project-detail/project-detail.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: 'Project/:id',
        component: DialogEntryComponent,
      },
    ],
  },
  {
    path: 'Blog',
    component: BlogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
