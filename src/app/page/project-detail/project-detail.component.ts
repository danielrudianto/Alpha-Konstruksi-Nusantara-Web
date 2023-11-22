import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotkey, HotkeysService } from 'angular2-hotkeys';

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
export class ProjectDetailComponent {
  constructor(
    private dialog: MatDialogRef<ProjectDetailComponent>,
    private router: Router,
    private route: ActivatedRoute,
    private _hotkeysService: HotkeysService
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
      title: 'Alpha Konstruksi Nusantara',
    });
  }
}
