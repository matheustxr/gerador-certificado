import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CertificadoService } from './_services/certificado.service';
import { Navbar } from './_components/navbar/navbar';
import { BaseUI } from "./_components/base-ui/base-ui";




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, CommonModule, BaseUI, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  title = 'gerador-certificado';
  exibeNavbar: boolean = false;

  constructor(private certificadoService: CertificadoService) {}

  ngOnInit(): void {
    const certificados = localStorage.getItem('certificados');
    this.certificadoService.certificados = certificados
      ? JSON.parse(certificados)
      : [];
  }
}
