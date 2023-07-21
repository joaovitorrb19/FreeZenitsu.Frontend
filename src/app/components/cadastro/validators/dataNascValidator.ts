import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function dataNascValidator () : ValidatorFn{
        return (control : AbstractControl) : ValidationErrors | null => {
            const valorControl : string = control.value
            const anoNasc =  Number.parseInt(valorControl.substring(0,4))
            const diferenca = 2023 - anoNasc
            if(diferenca > 130){
                return {anoNasc:true}
            }

            return null
        }
}