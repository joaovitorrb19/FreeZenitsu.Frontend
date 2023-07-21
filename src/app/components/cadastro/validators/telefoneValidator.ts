import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function telefoneValidator () : ValidatorFn{
    return (control : AbstractControl) : ValidationErrors | null => {

        const regex = /^(?:\d{2,3}\s?)?(?:\(\d{2,3}\)\s?)?\d{4,5}[-\s]?\d{4}$/

        if(regex.test(control.value)){
            return null
        }

        return {telefone:true}
    }
}