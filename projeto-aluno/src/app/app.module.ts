import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AlunoInserirComponent } from './alunos/aluno-inserir/aluno-inserir.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';

import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { AlunoListaComponent } from './alunos/aluno-lista/aluno-lista.component';

import { AlunoService } from './alunos/aluno.service';

@NgModule({
  declarations: [
    AppComponent,
    AlunoInserirComponent,
    CabecalhoComponent,
    AlunoListaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatDialogModule,
  ],
  providers: [AlunoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
