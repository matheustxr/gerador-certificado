import { Component, OnInit, ElementRef, ViewChild  } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CertificadoService } from '../../_services/certificado.service';
import { Certificado } from '../../interfaces/certificado';
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-certificado',
  imports: [SecondaryButton, RouterLink],
  templateUrl: './certificado.html',
  styleUrl: './certificado.css'
})
export class CertificadoComponent  implements OnInit {
  id: string | null = null;
  certificado: Certificado | undefined;

   @ViewChild('certificadoContainer') certificadoElement!: ElementRef;

  constructor(
    private CertificadoService: CertificadoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.certificado  = this.CertificadoService.certificados.find(
        (item) => item.id == this.id
      );
    });
  }

  downloadCertificado() {
    if (this.certificado == undefined) {
      return;
    }
    html2canvas(this.certificadoElement.nativeElement, { scale: 2 }).then(
      (canvas) => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download =
          'certificado_' + this.certificado?.nome.replaceAll(' ', '_') + '.png';
        link.click();
      }
    );
  }
}
