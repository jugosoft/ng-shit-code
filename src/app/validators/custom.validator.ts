import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

const forbiddenCitiesArray = ['Киев', 'Гомель', 'Вашингтон'];

export function createPasswordStrengthValidator(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {
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
