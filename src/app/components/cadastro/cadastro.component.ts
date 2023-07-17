import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { customValidator } from './customvalidator';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit{

  form = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.email]),
    nomeCompleto : new FormControl('',[Validators.required]),
    telefone : new FormControl('',[Validators.required]),
    cpf : new FormControl('',Validators.required),
    dataNasc : new FormControl('',Validators.required),
    senha : new FormControl('',[Validators.required]),
    confirmacaoSenha : new FormControl('',[Validators.required])
  })

  constructor(){}

  ngOnInit(): void {
    
    
  }

  AdicionarValidator() {
    this.form.get('confirmacaoSenha')?.setValidators(customValidator(this.form.get('senha')?.value!))
  }
  
}
