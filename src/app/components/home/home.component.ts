// home.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  titulo = 'Global Tech Summit 2025';
  mostrarDescricao = true;
  descricao = 'O maior evento de tecnologia da América Latina com palestrantes internacionais e workshops práticos';
  dataEvento = '15-17 de Novembro de 2025 | Centro de Convenções, São Paulo';
  destaques = [
    '30+ palestrantes internacionais',
    'Workshops hands-on',
    'Networking com especialistas',
    'Lançamento de novas tecnologias',
    'Oportunidades de carreira'
  ];
}
