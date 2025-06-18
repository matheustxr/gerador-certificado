import { Component, Input } from '@angular/core';
import { SecondaryButton } from "../secondary-button/secondary-button";
import { Router  } from '@angular/router';

@Component({
  selector: 'app-certified-item',
  imports: [SecondaryButton],
  templateUrl: './certified-item.html',
  styleUrl: './certified-item.css'
})
export class CertifiedItem {
  @Input() nomeAluno: string = '';
  @Input() dataEmissao: string = '';
  @Input() id: string = '';

  constructor(private router: Router) {}

  redirecionaCertificado() {
    this.router.navigate(['/certificados', this.id]);
  }
}
