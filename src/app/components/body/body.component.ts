import { Component, OnInit, Input, Output } from '@angular/core';
import { Cliente } from './../../models/cliente.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  cliente:Cliente = {};
  nomeDoBotaoSalvar:string = "btnBotaoSalvar";
  @Input() nomeDoFormulario:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.cliente);
  }

  onSubmit2(form:NgForm){
    console.log(form.value);
  }

}
