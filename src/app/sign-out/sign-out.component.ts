import { Component } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-out',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-out.component.html',
  styleUrl: './sign-out.component.css'
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

  /**
   * Formats the selected time into 'YYYY-MM-DD HH:mm:ss.SSSSSS'.
   * Combines the selected time with the current date.
   * @returns {string | null} - The formatted datetime string or null if departureTime is empty.
   */
  private getFormattedDepartureTime(): string | null {
    const time = this.signOutForm.get('departureTime')?.value; // e.g., "10:22"
    if (time) {
      const today = new Date(); // Use current date
      return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}T${time}:00`; // Adjust format
    }
    return null;
  }
  

  onSubmit(): void {
    if (this.signOutForm.valid) {
      const formattedDepartureTime = this.getFormattedDepartureTime();
      if (formattedDepartureTime) {
        const signOutData = {
          fName: this.signOutForm.value.fName,
          lName: this.signOutForm.value.lName,
          departureTime: formattedDepartureTime
        };

        this.http.post('http://localhost:8080/api/sign-out', signOutData).subscribe(
          response => {
            console.log('Sign out successful', response);
          },
          error => {
            console.error('Sign out failed', error);
          }
        );
      } else {
        console.error('Departure time is not properly formatted.');
      }
    }
  }
}
