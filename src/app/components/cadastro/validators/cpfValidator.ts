import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function cpfValidator () : ValidatorFn{
    
    return (control : AbstractControl) : ValidationErrors | null => {
        const cpfRegex = /^(?:\d{11}|\d{3}-\d{3}-\d{3}\.\d{2})$/
        let resultadoRegex = cpfRegex.test(control.value)

       if(resultadoRegex){
        return null
       }    

       return {cpf:true}

    }

}