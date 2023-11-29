import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BlogDetailComponent implements OnInit {
  isLoading: boolean = true;
  next: any = null;
  prev: any = null;
  blog: any = null;
  content: string = '';
  keywords: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private metaService: Meta,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.metaService.removeTag('name="description"');
    this.metaService.removeTag('name="keywords"');

    this.metaService.removeTag('name="og:url"');
    this.metaService.removeTag('name="og:type"');
    this.metaService.removeTag('name="og:title"');
    this.metaService.removeTag('name="og:image"');

    this.metaService.removeTag('name="twitter:card"');
    this.metaService.removeTag('name="twitter:domain"');
    this.metaService.removeTag('name="twitter:url"');
    this.metaService.removeTag('name="twitter:title"');
    this.metaService.removeTag('name="twitter:description"');
    this.metaService.removeTag('name="twitter:image"');

    const id = this.route.snapshot.params['id'];
    this.http
      .get('https://alphakonstruksi.id/api/Blog/' + id)
      .subscribe({
        next: (data: any) => {
          this.blog = data.blog;
          this.next = data.after;
          this.prev = data.before;
          this.content = data.content;

          this.metaService.addTags([
            {
              name: 'description',
              content: this.blog.description,
            },
            {
              name: 'keywords',
              content: this.blog.keywords.join(', '),
            },
            {
              name: 'og:title',
              content: this.blog.title,
            },
            {
              name: 'og:description',
              content: this.blog.description,
            },
            {
              name: 'og:image',
              content: 'https://alphakonstruksi.id/' + this.blog.id + '.png',
            },
            {
              name: 'og:url',
              content: window.location.href,
            },
            {
              name: 'og:type',
              content: 'article',
            },
            {
              name: 'twitter:card',
              content: 'summary_large_image',
            },
            {
              name: 'twitter:domain',
              content: 'alphakonstruksi.id',
            },
            {
              name: 'twitter:title',
              content: this.blog.title,
            },
            {
              name: 'twitter:description',
              content: this.blog.description,
            },
            {
              name: 'twitter:image',
              content: 'https://alphakonstruksi.id/' + this.blog.id + '.png',
            },
            {
              name: 'twitter:url',
              content: window.location.href,
            },
          ]);

          this.titleService.setTitle(
            `PT Alpha Konstruksi Nusantara | Blog | ${this.blog.title}`
          );
        },
        error: (error) => {
          this.router.navigate(['/Blog']);
        },
      })
      .add(() => {
        this.isLoading = false;
      });

    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.http
        .get('https://alphakonstruksi.id/api/Blog/' + id)
        .subscribe({
          next: (data: any) => {
            this.blog = data.blog;
            this.next = data.after;
            this.prev = data.before;
            this.content = data.content;
            this.keywords = data.keywords;

            this.blog = data.blog;
            this.next = data.after;
            this.prev = data.before;
            this.content = data.content;

            this.metaService.removeTag('name="description"');
            this.metaService.removeTag('name="keywords"');

            this.metaService.removeTag('name="og:url"');
            this.metaService.removeTag('name="og:type"');
            this.metaService.removeTag('name="og:title"');
            this.metaService.removeTag('name="og:image"');

            this.metaService.removeTag('name="twitter:card"');
            this.metaService.removeTag('name="twitter:domain"');
            this.metaService.removeTag('name="twitter:url"');
            this.metaService.removeTag('name="twitter:title"');
            this.metaService.removeTag('name="twitter:description"');
            this.metaService.removeTag('name="twitter:image"');

            this.metaService.addTags([
              {
                name: 'description',
                content: this.blog.description,
              },
              {
                name: 'keywords',
                content: this.blog.keywords.join(', '),
              },
              {
                name: 'og:title',
                content: this.blog.title,
              },
              {
                name: 'og:description',
                content: this.blog.description,
              },
              {
                name: 'og:image',
                content: 'https://alphakonstruksi.id/' + this.blog.id + '.png',
              },
              {
                name: 'og:url',
                content: window.location.href,
              },
              {
                name: 'og:type',
                content: 'article',
              },
              {
                name: 'twitter:card',
                content: 'summary_large_image',
              },
              {
                name: 'twitter:domain',
                content: 'alphakonstruksi.id',
              },
              {
                name: 'twitter:title',
                content: this.blog.title,
              },
              {
                name: 'twitter:description',
                content: this.blog.description,
              },
              {
                name: 'twitter:image',
                content: 'https://alphakonstruksi.id/' + this.blog.id + '.png',
              },
              {
                name: 'twitter:url',
                content: window.location.href,
              },
            ]);

            this.titleService.setTitle(
              `PT Alpha Konstruksi Nusantara | Blog | ${this.blog.title}`
            );
          },
          error: (error) => {
            console.error(error);
            this.router.navigate(['/Blog']);
          },
        })
        .add(() => {
          this.isLoading = false;
        });
    });
  }

  encode(url: string) {
    return encodeURIComponent(url.replaceAll(' ', '-'));
  }
}
