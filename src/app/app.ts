import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimaryButton } from './_components/primary-button/primary-button';
import { CommonModule } from '@angular/common';
import { Navbar } from './_components/navbar/navbar';
import { SecondaryButton } from "./_components/secondary-button/secondary-button";
import { CertifiedItem } from "./_components/certified-item/certified-item";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, CommonModule, PrimaryButton, SecondaryButton, CertifiedItem],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'gerador-certificado';
  exibeNavbar: boolean = false;
}
