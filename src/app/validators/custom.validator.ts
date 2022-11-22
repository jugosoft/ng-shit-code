import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';

const forbiddenCitiesArray = ['Киев', 'Гомель', 'Вашингтон'];
const forbiddenUsersArray = ['sample1@mylo.com', 'sample2@mylo.com'];

export function createPasswordStrengthValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value.trim();

        if (!value) {
            return null;
        }

        if (forbiddenCitiesArray.includes(value)) {
            return {forbiddenCity: true};
        }
        return null;
    }
}

export function createForbiddenUsersValidator(): AsyncValidatorFn  {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
        const value = control.value;

        return new Promise(resolve => {
            setTimeout(() => {
                if (forbiddenUsersArray.includes(value)) {
                    resolve({userForbidden: true});
                } else {
                    resolve(null);
                }
            }, 4500);
        });
    }
}
