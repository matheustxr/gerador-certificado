import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimaryButton } from './_components/primary-button/primary-button';
import { CommonModule } from '@angular/common';
import { Navbar } from './_components/navbar/navbar';
import { SecondaryButton } from "./_components/secondary-button/secondary-button";
import { CertifiedItem } from "./_components/certified-item/certified-item";
import { BaseUI } from "./_components/base-ui/base-ui";
import { Certificados } from "./pages/certificados/certificados";
import { Form } from "./pages/form/form";
import { Certificado } from "./pages/certificado/certificado";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, CommonModule, PrimaryButton, SecondaryButton, CertifiedItem, BaseUI, Certificados, Form, Certificado],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'gerador-certificado';
  exibeNavbar: boolean = false;
}
