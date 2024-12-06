import { Component } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-out',
  standalone: true,  // Ensure the component is standalone
  imports: [ReactiveFormsModule],  // Keep ReactiveFormsModule in imports
  providers: [
    provideHttpClient() // Correctly provide HttpClient in the providers array
  ],
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css']
})
export class SignOutComponent {
  signOutForm: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.signOutForm = this.fb.group({
      fName: ['', Validators.required],
      lName: ['', Validators.required],
      departureTime: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signOutForm.valid) {
      const signOutData = {
        fName: this.signOutForm.value.fName,
        lName: this.signOutForm.value.lName,
        departureTime: this.signOutForm.value.departureTime
      };

      this.http.post('http://localhost:8080./api/sign-out', signOutData).subscribe(response => {
        console.log('Sign out successful', response);
      }, error => {
        console.error('Sign out failed', error);
      });
    }
  }
}
