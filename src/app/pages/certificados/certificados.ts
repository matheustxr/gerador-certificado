import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CertificadoService } from '../../_services/certificado.service';
import { Certificado } from '../../interfaces/certificado';
import { CertifiedItem } from '../../_components/certified-item/certified-item';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
@Component({
  selector: 'app-certificados',
  imports: [CertifiedItem, SecondaryButton, RouterLink],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css'
})
export class Certificados implements OnInit {
  certificados: Certificado[] = [];

  constructor(private CertificadoService: CertificadoService) {}

  ngOnInit(): void {
    this.certificados = this.CertificadoService.certificados;
  }
}
