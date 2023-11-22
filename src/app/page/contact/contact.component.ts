import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  get scrollPosition(): number {
    let contactSection = document.getElementById('contact');
    let contactSectionPosition = contactSection!.offsetTop;
    let contactSectionHeight = contactSection!.offsetHeight;
    let scrollPosition = window.pageYOffset;
    let windowHeight = window.innerHeight;
    let scrollPositionPercent =
      (scrollPosition - contactSectionPosition + windowHeight) /
      contactSectionHeight;
    return scrollPositionPercent;
  }

  contactFormGroup: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required),
  });
}
