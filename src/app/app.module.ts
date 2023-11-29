import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './page/contact/contact.component';
import { LandingComponent } from './page/landing/landing.component';
import { ProjectComponent } from './page/project/project.component';
import { BlogComponent } from './page/blog/blog.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { StatsComponent } from './components/stats/stats.component';
import { CountUpModule } from 'ngx-countup';
import { StatCardComponent } from './components/stats/stat-card/stat-card.component';
import { AboutComponent } from './page/about/about.component';
import { HeroComponent } from './page/hero/hero.component';
import { SlidePaginationComponent } from './components/slide-pagination/slide-pagination.component';
import { TechStackComponent } from './page/about/tech-stack/tech-stack.component';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ProjectDetailComponent } from './page/project-detail/project-detail.component';
import { HotkeyModule } from 'angular2-hotkeys';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './page/footer/footer.component';
import { ServicesComponent } from './page/services/services.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';

import { MatPaginatorModule } from '@angular/material/paginator';
import { BlogDetailComponent } from './page/blog-detail/blog-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { SafePipe } from 'src/pipes/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    LandingComponent,
    ProjectComponent,
    BlogComponent,
    StatsComponent,
    StatCardComponent,
    AboutComponent,
    HeroComponent,
    SlidePaginationComponent,
    TechStackComponent,
    HeaderSectionComponent,
    ProjectDetailComponent,
    FooterComponent,
    ServicesComponent,
    BlogDetailComponent,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    CountUpModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    HotkeyModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatChipsModule,
    MatPaginatorModule,
    MatSelectModule,
    HttpClientModule,
  ],
  providers: [SafePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
