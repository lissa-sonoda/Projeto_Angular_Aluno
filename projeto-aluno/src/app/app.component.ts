import { Component } from '@angular/core';
import { Aluno } from './alunos/aluno.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-aluno';
  alunos: Aluno[]=[];

  onAlunoAdd(aluno: any){
    //console.log(aluno);
    this.alunos=[...this.alunos, aluno];
  }
}
