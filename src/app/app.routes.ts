import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InspiracaoComponent } from './components/inspiracao/inspiracao.component';
import { ProgramacaoComponent } from './components/programacao/programacao.component';
import { GiftsComponent } from './components/gifts/gifts.component';
import { ParceirosComponent } from './components/parceiros/parceiros.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inspiracao', component: InspiracaoComponent },
  { path: 'programacao', component: ProgramacaoComponent },
  { path: 'gifts', component: GiftsComponent },
  { path: 'parceiros', component: ParceirosComponent },
];
