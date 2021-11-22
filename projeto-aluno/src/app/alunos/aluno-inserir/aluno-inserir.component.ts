import { Component, EventEmitter, Output } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AlunoService } from "../aluno.service";
//import { Aluno } from '../aluno.model';

@Component({

  selector: 'app-aluno-inserir', //seletor que vai trabalhar com a parte de inserção
  templateUrl: './aluno-inserir.component.html',
  styleUrls: ['./aluno-inserir.component.css']

})

export class AlunoInserirComponent{

  //@Output() alunoAdd = new EventEmitter<Aluno>();

  /*nome: string;
  ra: string;
  fone: string;
  email: string;

  constructor(){ //construtor apenas para teste inicial
    this.nome = "";
    this.ra = "";
    this.fone = "";
    this.email = "";
  } */

  constructor (public alunoService:AlunoService){}


  //metodo que vai ter uma ação ao pressionar o botão
  onAddAluno(form: NgForm){
    //console.log('inserindo um aluno...');
    if(form.invalid){
      return;
    }
    /*const aluno: Aluno={
      nome: form.value.nome,
      ra: form.value.ra,
      fone: form.value.fone,
      email: form.value.email
    };
    this.alunoAdd.emit(aluno);*/

    this.alunoService.addAluno(
      form.value.nome,
      form.value.ra,
      form.value.fone,
      form.value.email
    );
    form.resetForm();
  }
}
