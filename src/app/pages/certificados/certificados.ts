import { Component } from '@angular/core';
import { BaseUI } from "../../_components/base-ui/base-ui";

import { CertifiedItem } from '../../_components/certified-item/certified-item';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-certificados',
  imports: [CertifiedItem, SecondaryButton, RouterLink],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css'
})
export class Certificados {

}
