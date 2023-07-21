import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function nomeCompletoValidator () : ValidatorFn {

    return (control : AbstractControl) : ValidationErrors | null => {
        const regex = /^\w{3,}(?:\s+\w{3,})+$/

        if(regex.test(control.value)){
            return null
        }

        return {nomeCompleto:true}
       
    }
}