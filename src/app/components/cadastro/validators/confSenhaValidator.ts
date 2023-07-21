import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function confSenhaValidator(control1 : string) : ValidatorFn{

    return (control :AbstractControl) : ValidationErrors | null => {

        const valorSenha = control.value

        if(control1 !== valorSenha ){
            return {confPass:true}
        }

        return null
        
    }
}