//import { Component, OnInit, Input } from '@angular/core';
//import { Aluno } from '../aluno.model';
import { Component, OnInit, OnDestroy} from '@angular/core';
import { Aluno } from '../aluno.model';
import { NgForm } from "@angular/forms";
import { AlunoService } from '../aluno.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-aluno-lista',
  templateUrl: './aluno-lista.component.html',
  styleUrls: ['./aluno-lista.component.css']
})

export class AlunoListaComponent implements OnInit, OnDestroy {

  //@Input() alunos: Aluno[] = [];
  alunos: Aluno[] = [];
  private alunosSubscription: Subscription = new Subscription;

  /*alunos = [
    {
      nome: "Lissa",
      ra: "88880000",
      fone:"988888888",
      email:"email@email.com"
    },
    {
      nome: "Vinicius",
      ra: "82223333",
      fone:"988888888",
      email:"email@email.com"
    }
  ];*/

  constructor(public alunoService: AlunoService) { }

  ngOnInit(): void {
    this.alunos = this.alunoService.getAlunos();
    this.alunosSubscription = this.alunoService
    .getListaDeAlunosAtualizadaObservable()
    .subscribe((alunos:Aluno[])=>{
      this.alunos = alunos;
    });
  }

  ngOnDestroy():void{
    this.alunosSubscription.unsubscribe();
  }

  editar=true;
  btn=true;

  edit(){
    this.editar=false;
    this.btn=false;
  }

  save(){
    this.editar=true;
    this.btn=true;
  }

  atAluno(form: NgForm, nome: string){
    if(form.invalid){
      return;
    }
    this.alunoService.atualizar(
      nome,
      form.value.ra,
      form.value.fone,
      form.value.email
    );
    form.resetForm();
  }
}
