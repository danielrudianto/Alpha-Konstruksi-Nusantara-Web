import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './page/blog/blog.component';
import { LandingComponent } from './page/landing/landing.component';
import { DialogEntryComponent } from './page/project-detail/project-detail.component';
import { BlogDetailComponent } from './page/blog-detail/blog-detail.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    data: { animation: 'Home' },
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
    data: { animation: 'Blog' },
    component: BlogComponent,
  },
  {
    path: 'Blog/:id/:title',
    data: { animation: 'BlogDetail' },
    component: BlogDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
