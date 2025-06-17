import { Routes } from '@angular/router';
import { Certificados } from './pages/certificados/certificados';
import { CertificadoComponent } from './pages/certificado/certificado';
import { Form } from './pages/form/form';

export const routes: Routes = [
  {
    path: '',
    component: Certificados,
  },
  {
    path: 'certificados/novo',
    component: Form,
  },
  {
    path: 'certificados/:id',
    component: CertificadoComponent,
  },
];
