// evento-card.component.ts
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HoverBorderDirective } from '../hover-border.directive';

@Component({
  selector: 'app-evento-card',
  standalone: true,
  imports: [CommonModule, HoverBorderDirective],
  templateUrl: './evento-card.component.html',
  styleUrls: ['./evento-card.component.css']
})
export class EventoCardComponent {
  @Input() titulo: string = '';
  @Input() data: string = '';
  @Input() horario: string = '';
  @Input() local: string = '';
  @Input() corDestaque: string = '#FF5100'; // Valor padrão
  @Input() icone: string = ''; // Tornado obrigatório
}
