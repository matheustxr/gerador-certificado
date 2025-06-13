import { Component } from '@angular/core';
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { PrimaryButton } from "../../_components/primary-button/primary-button";

@Component({
  selector: 'app-form',
  imports: [SecondaryButton, PrimaryButton],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class Form {

}
