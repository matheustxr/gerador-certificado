import { Component } from '@angular/core';
import { BaseUI } from "../../_components/base-ui/base-ui";
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { CertifiedItem } from '../../_components/certified-item/certified-item';

@Component({
  selector: 'app-certificados',
  imports: [CertifiedItem, SecondaryButton],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css'
})
export class Certificados {

}
