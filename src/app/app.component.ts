import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form!: FormGroup;

  model: any;

    constructor(private fb: FormBuilder) {
      
    }

    ngOnInit(): void {
      this.form = this.fb.group({
        options: []
      });

    }
}
