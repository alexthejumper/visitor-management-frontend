// src/app/shared/app-shared.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignOutComponent } from '../sign-out/sign-out.component';

@NgModule({
  declarations: [
    SignOutComponent, // Declare shared components here
  ],
  imports: [
    CommonModule, // Import Angular common utilities
    ReactiveFormsModule, // Import forms if needed by shared components
  ],
  exports: [
    SignOutComponent, // Export components to make them available in AppModule or other modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule, // Export forms if needed by shared components
  ],
})
export class AppSharedModule { }
