import 'zone.js/dist/zone';
import { Component, ElementRef, OnInit, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { from, of } from 'rxjs';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    
    <div> <input type="text" #userInput> </div>
    <button type="submit" (click)="submit(userInput.value)"> click</button>
    
  `,
})
export class App implements OnInit {
  signUpForm: any;

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      userInput: new FormControl(null),
    });
  }

  submit(val: string) {
    alert(val);
    of(String(this.signUpForm.get('userInput').value)).subscribe((x) =>
      console.log(x)
    );
  }
}

bootstrapApplication(App);
