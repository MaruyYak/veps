import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  phoneValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      const isValid = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){7,}(\s*)?$/.test(value);
      return isValid ? null : { invalidPhone: true };
    };
  }

  emailValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      return isValid ? null : { invalidEmail: true };
    };
  }
}
