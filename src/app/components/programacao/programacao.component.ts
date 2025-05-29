// programacao.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverBorderDirective } from '../../hover-border.directive';
import { EventoCardComponent } from '../../evento-card/evento-card.component';
import { Evento } from '../../interfaces/Evento';

@Component({
  selector: 'app-programacao',
  standalone: true,
  imports: [CommonModule, HoverBorderDirective, EventoCardComponent],
  templateUrl: './programacao.component.html',
  styleUrls: ['./programacao.component.css']
})
export class ProgramacaoComponent {
  eventos: Evento[] = [
    {
      id: 1,
      titulo: 'Inteligência Artificial na Prática',
      data: '26 de maio',
      horario: '09:00 - 10:30',
      local: 'Auditório Principal',
      corDestaque: '#FF5100',
      icone: '🤖',
      inscrito: false
    },
    {
      id: 2,
      titulo: 'Blockchain Revolution',
      data: '26 de maio',
      horario: '10:45 - 12:15',
      local: 'Sala 203',
      corDestaque: '#3A86FF',
      icone: '⛓️',
      inscrito: false
    },
    {
      id: 3,
      titulo: 'Cloud Computing Avançado',
      data: '26 de maio',
      horario: '13:30 - 15:00',
      local: 'Sala 305',
      corDestaque: '#2EC4B6',
      icone: '☁️',
      inscrito: false
    },
    {
      id: 4,
      titulo: 'UX/UI na Era Digital',
      data: '26 de maio',
      horario: '15:15 - 16:45',
      local: 'Auditório Secundário',
      corDestaque: '#E71D36',
      icone: '🎨',
      inscrito: false
    },
    {
      id: 5,
      titulo: 'Segurança Cibernética',
      data: '26 de maio',
      horario: '17:00 - 18:30',
      local: 'Sala 401',
      corDestaque: '#FF9F1C',
      icone: '🔒',
      inscrito: false
    },
    {
      id: 6,
      titulo: 'Kick-off do Evento',
      data: '26 de maio',
      horario: '19:00 - 20:30',
      local: 'ONLINE',
      corDestaque: '#FF5100',
      icone: '🚀',
      inscrito: false
    },
    {
      id: 7,
      titulo: 'Workshop de IoT',
      data: '27 de maio',
      horario: '09:00 - 12:00',
      local: 'Laboratório de Inovação',
      corDestaque: '#8338EC',
      icone: '🌐',
      inscrito: false
    },
    {
      id: 8,
      titulo: 'Painel: Futuro da Tecnologia',
      data: '27 de maio',
      horario: '14:00 - 16:00',
      local: 'Auditório Principal',
      corDestaque: '#06D6A0',
      icone: '🔮',
      inscrito: false
    }
  ];

  participarEvento(evento: any) {
    evento.inscrito = true;
    console.log(`Inscrito no evento: ${evento.titulo}`);
  }
}
