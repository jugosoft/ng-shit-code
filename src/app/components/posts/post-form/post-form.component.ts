import { ChangeDetectionStrategy, Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('sample@mylo.com', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      address: new FormGroup({
        country: new FormControl('by', Validators.required),
        city: new FormControl('', Validators.required),
        address: new FormControl('', Validators.required),
      })
    });
  }

  changeCountry(): void {
    const cityControl = this.form.get('address')?.get('city') as FormControl;
    cityControl?.setValue('');
    cityControl.markAsUntouched();
  }

  submit() {
    if (!this.form || this.form.invalid) {
      return;
    }

    Object.entries(this.form.value).forEach(
      (element) => console.log(`Form element: ${element[0]} with value ${element[1]}`)
    );
  }
}
