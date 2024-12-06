import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignOutComponent } from './sign-out/sign-out.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SignOutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'visitor-management';
}
