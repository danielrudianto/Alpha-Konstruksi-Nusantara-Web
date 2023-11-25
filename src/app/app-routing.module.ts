import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './page/blog/blog.component';
import { LandingComponent } from './page/landing/landing.component';
import {
  DialogEntryComponent,
  ProjectDetailComponent,
} from './page/project-detail/project-detail.component';
import { BlogDetailComponent } from './page/blog-detail/blog-detail.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: 'Project/088',
        component: DialogEntryComponent,
      },
      {
        path: 'Project/041',
        component: DialogEntryComponent,
      },
      {
        path: 'Project/091',
        component: DialogEntryComponent,
      },
      {
        path: 'Project/104',
        component: DialogEntryComponent,
      },
    ],
  },
  {
    path: 'Blog',
    component: BlogComponent,
  },
  {
    path: 'Blog/:id/:title',
    component: BlogDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
