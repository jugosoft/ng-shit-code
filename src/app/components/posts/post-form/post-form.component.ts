import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { IPost } from 'src/app/app.component';
import { createForbiddenUsersValidator, createPasswordStrengthValidator } from 'src/app/validators/custom.validator';

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
      email: new FormControl('sample@mylo.com', [Validators.email, Validators.required], [createForbiddenUsersValidator()]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      address: new FormGroup({
        country: new FormControl('by', Validators.required),
        city: new FormControl('', [Validators.required, createPasswordStrengthValidator()]),
        address: new FormControl('', Validators.required),
      }),
      rateForm: new FormControl('', Validators.required),
      reasons: new FormArray([
        new FormControl('Первая причина это - ты', [Validators.required, Validators.minLength(5)]),
        new FormControl('А вторая - все твои мечты...', [Validators.required, Validators.minLength(5)]),
        new FormControl('', [Validators.required, Validators.minLength(5)]),
      ]),
    });
  }

  changeCountry(): void {
    const cityControl = this.form.get('address')?.get('city') as FormControl;
    cityControl?.setValue('');
    cityControl.markAsUntouched();
    const adressControl = this.form.get('address')?.get('address') as FormControl;
    adressControl?.setValue('');
    adressControl.markAsUntouched();
  }

  resetForm(): void{
    this.form.reset();
  }

  submit() {
    if (!this.form || this.form.invalid) {
      return;
    }

    console.log({... this.form.value});
    this.resetForm();
  }

  getReasons(): AbstractControl[] {
    return (this.form.get('reasons') as FormArray)?.controls;
  }

  addReason() {
    const newReason = new FormControl('', [Validators.required, Validators.minLength(5)]);
    (this.form.get('reasons') as FormArray).push(newReason);
    console.log(this.form);
  }

  deleteReason(idx: number): boolean {
   (this.form.get('reasons') as FormArray).removeAt(idx);
   return true;
  }
}
