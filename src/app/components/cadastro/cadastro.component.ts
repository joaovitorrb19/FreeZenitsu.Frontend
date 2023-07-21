import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { confSenhaValidator } from './validators/confSenhaValidator';
import { cpfValidator } from './validators/cpfValidator';
import { nomeCompletoValidator } from './validators/nomeCompletoValidator';
import { telefoneValidator } from './validators/telefoneValidator';
import { dataNascValidator } from './validators/dataNascValidator';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit{

  form = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.email]),
    nomeCompleto : new FormControl('',[Validators.required,nomeCompletoValidator()]),
    telefone : new FormControl('',[Validators.required,telefoneValidator()]),
    cpf : new FormControl('',[Validators.required,cpfValidator()]),
    dataNascimento : new FormControl('',[Validators.required,dataNascValidator()]),
    senha : new FormControl('',[Validators.required]),
    confirmacaoSenha : new FormControl('',Validators.required)
  })

  constructor(private service : UsuarioService){}

  ngOnInit() : void {

  }

  ConfirmarCadastro(){
    
    let usuario : Usuario = {
      email : this.form.get('email')?.value || '',
      nomeCompleto : this.form.get('nomeCompleto')?.value || '',
      telefone : this.form.get('telefone')?.value || '',
      dataNascimento : this.form.get('dataNascimento')?.value || '',
      cpf : this.form.get('cpf')?.value || '',
      senha : this.form.get('senha')?.value || '',
      confirmacaoSenha : this.form.get('confirmacaoSenha')?.value || ''
    }

    this.service.Post(usuario).subscribe()
  }

  AdicionarValidator() {
    this.form.get('confirmacaoSenha')?.addValidators(confSenhaValidator(this.form.get('senha')?.value!))
  }
  
  VerificarErroTouched(nomePropriedade : string,nomeErro:string):boolean{
    if(this.form.get(nomePropriedade)?.hasError(nomeErro) && this.form.get(nomePropriedade)?.touched){
      return true
    }
    
    return false
  }

  VerificarErroSujo(nomePropriedade : string,nomeErro:string):boolean{
    if(this.form.get(nomePropriedade)?.hasError(nomeErro) && this.form.get(nomePropriedade)?.value !== ''){
      return true
    }
    
    return false

  }

}
