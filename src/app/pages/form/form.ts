import { Component } from '@angular/core';
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { PrimaryButton } from "../../_components/primary-button/primary-button";
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CertificadoService } from '../../_services/certificado.service';
import { Certificado } from '../../interfaces/certificado';


@Component({
  selector: 'app-form',
  imports: [SecondaryButton, PrimaryButton, FormsModule, CommonModule],
  templateUrl: './form.html',
  styleUrl: './form.css'
})

export class Form {
  constructor(private certificadoService: CertificadoService) {}

  certificado: Certificado = {
    atividades: [],
    nome: '',
    dataEmissao: '',
  };
  atividade: string = '';

  campoInvalido(control: NgModel) {
    return control.invalid && control.touched;
  }

  formValido() {
    return this.certificado.atividades.length > 0 && this.certificado.nome.length > 0;
  }

  adicionarAtividade() {
    this.certificado.atividades.push(this.atividade);
    this.atividade = '';
  }

  excluirAtividade(index: number) {
    this.certificado.atividades.splice(index, 1);
  }

  submit() {
    if (!this.formValido()) {
      return;
    }
    this.certificado.dataEmissao = this.dataAtual();
    this.certificadoService.adicionarCertificado(this.certificado);
  }

  dataAtual() {
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const ano = dataAtual.getFullYear();

    const dataFormatada = `${dia}/${mes}/${ano}`;
    return dataFormatada;
  }
}
