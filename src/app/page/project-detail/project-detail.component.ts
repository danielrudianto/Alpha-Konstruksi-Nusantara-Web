import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotkey, HotkeysService } from 'angular2-hotkeys';
import { SafePipe } from 'src/pipes/safe.pipe';

@Component({
  template: '',
})
export class DialogEntryComponent {
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.openDialog();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ProjectDetailComponent, {
      height: 'calc(100% - 30px)',
      width: 'calc(100% - 30px)',
      maxWidth: '100%',
      maxHeight: '100%',
      enterAnimationDuration: 150,
      exitAnimationDuration: 150,
      data: {
        id: this.route.snapshot.url[1],
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }
}

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
})
export class ProjectDetailComponent implements OnInit {
  title: string = '';
  location: string = '';
  url: any = '';

  constructor(
    private dialog: MatDialogRef<ProjectDetailComponent>,
    private router: Router,
    private route: ActivatedRoute,
    private _hotkeysService: HotkeysService,
    private safe: SafePipe,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private metaService: Meta,
    private titleService: Title
  ) {
    this._hotkeysService.add(
      new Hotkey('esc', (event: KeyboardEvent): boolean => {
        this.close();
        return false;
      })
    );
  }

  close() {
    this.dialog.close();
    this.router.navigate(['/']);
  }

  share() {
    navigator.share({
      title: 'Alpha Konstruksi Nusantara | Project | ' + this.title,
      url: window.location.href,
      text: 'Check out this project from Alpha Konstruksi Nusantara!',
    });
  }

  projects = [
    {
      id: '088',
      name: 'Indah Kiat Pulp & Paper',
      location: 'Tangerang, Indonesia',
      img: '/assets/images/ikpp.jpg',
      url: 'https://youtube.com/embed/XqCqAU1vWoM?autoplay=1',
    },
    {
      id: '041',
      name: 'Jakarta Biopharmaceutical Industry',
      location: 'Cikande, Indonesia',
      img: '/assets/images/jbio.jpg',
      url: 'https://youtube.com/embed/NghnjO8NyUo?autoplay=1',
    },
    {
      id: '091',
      name: 'Australian Independent School',
      location: 'Jakarta, Indonesia',
      img: '/assets/images/ais.jpg',
      url: 'https://youtube.com/embed/M-i118mV8ls?autoplay=1',
    },
    {
      id: '104',
      name: 'Sekolah Citra Kasih Semarang',
      location: 'Semarang, Indonesia',
      img: '/assets/images/sck-semarang.jpg',
      url: 'https://youtube.com/embed/rpC46uLyMYY?autoplay=1',
    },
  ];

  ngOnInit() {
    this.title = this.projects.find((x) => x.id == this.data.id.path)!.name;
    this.location = this.projects.find(
      (x) => x.id == this.data.id.path
    )!.location;
    this.url = this.safe.transform(
      this.projects.find((x) => x.id == this.data.id.path)!.url,
      'url'
    );

    this.metaService.updateTag({
      name: 'description',
      content:
        'Alpha Konstruksi Nusantara | Project | ' +
        this.title +
        ' | ' +
        this.location,
    });

    this.titleService.setTitle(
      'Alpha Konstruksi Nusantara | Project | ' +
        this.title +
        ' | ' +
        this.location
    );
  }
}
