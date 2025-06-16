import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { Navbar } from './_components/navbar/navbar';


import { BaseUI } from "./_components/base-ui/base-ui";




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, CommonModule, BaseUI, ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'gerador-certificado';
  exibeNavbar: boolean = false;
}
