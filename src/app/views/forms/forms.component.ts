import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
  });
  constructor(private snackbar: MatSnackBar) {}

  ngOnInit(): void {}
  onFormSubmit() {
    console.log(this.myForm.value);
    this.snackbar.open('Form Submitted Successfully', 'Close');
  }
  get name() {
    return this.myForm.get('name');
  }
  get age() {
    return this.myForm.get('age');
  }
}
