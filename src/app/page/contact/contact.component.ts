import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  constructor(private http: HttpClient) {}

  isLoading: boolean = false;

  contactFormGroup: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required),
  });

  submit() {
    this.isLoading = true;
    if (this.contactFormGroup.valid) {
      this.http
        .post('https://alphakonstruksi.id/api/Contact', {
          name: this.contactFormGroup.value.name,
          email: this.contactFormGroup.value.email,
          message: this.contactFormGroup.value.message,
        })
        .subscribe({
          next: (data) => {
            this.contactFormGroup.reset();
            alert('Your message has been sent!');
          },
          error: (error) => {
            alert('There was an error sending your message.');
            this.isLoading = false;
          },
        })
        .add(() => {
          this.isLoading = false;
        });
    }
  }
}
