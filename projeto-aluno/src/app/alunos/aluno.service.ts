import { Injectable } from '@angular/core';
import { Aluno } from './aluno.model'
import { Subject } from 'rxjs';

@Injectable({providedIn:'root'})
export class AlunoService{
  private alunos: Aluno[] =[];
  private listaAlunosAtualizada = new Subject<Aluno[]>();

  getAlunos(): Aluno[]{
    return[...this.alunos];
  }
  addAluno(nome:string, ra: string, fone:string, email: string){
    const aluno: Aluno={
      nome:nome,
      ra: ra,
      fone: fone,
      email: email,
    };
    this.alunos.push(aluno);
    this.listaAlunosAtualizada.next([...this.alunos]);
  }

  getListaDeAlunosAtualizadaObservable(){
    return this.listaAlunosAtualizada.asObservable();
  }

  atualizar(nome:string, ra: string, fone:string, email: string){
    const aluno: Aluno={
      nome:nome,
      ra: ra,
      fone: fone,
      email: email,
    };

    let objIndex = this.alunos.findIndex((obj => obj.nome == nome));
    this.alunos[objIndex] = aluno;

    this.listaAlunosAtualizada.next([...this.alunos]);

  }

}
