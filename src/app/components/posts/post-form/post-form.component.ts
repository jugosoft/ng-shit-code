import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IPost } from 'src/app/app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostFormComponent implements OnInit {
  @Output() onAdd: EventEmitter<IPost> = new EventEmitter<IPost>();

  form: FormGroup;
  focus = {
    email: true,
    password: false,
  };

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('sample@mylo.com', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
  }

  submit() {
    if (!this.form) {
      return;
    }

    Object.entries(this.form.value).forEach(
      (element) => console.log(`Form element: ${element[0]} with value ${element[1]}`)
    );
  }
}
