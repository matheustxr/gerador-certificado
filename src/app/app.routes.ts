import { Routes } from '@angular/router';
import { Certificados } from './pages/certificados/certificados';
import { CertifiedItem } from './_components/certified-item/certified-item';
import { Certificado } from './pages/certificado/certificado';
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
    component: Certificado,
  },
];
