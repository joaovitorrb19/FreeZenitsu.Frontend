import { isPlatformBrowser } from "@angular/common";
import { AbstractControl, FormControl, FormGroupDirective, NgForm } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

export class Addcategoriainputvalidator implements ErrorStateMatcher {

    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted))
    }

}
