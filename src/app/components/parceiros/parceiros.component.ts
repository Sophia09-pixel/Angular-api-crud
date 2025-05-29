import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parceiros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parceiros.component.html',
  styleUrls: ['./parceiros.component.css']
})
export class ParceirosComponent {
  // Defina a variável com o caminho direto
  logoIBM = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png';
  descricaoIBM = 'Parceira em soluções de inteligência artificial';
}
