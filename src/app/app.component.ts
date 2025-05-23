import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Categorias } from './interfaces/Categorias';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CategoriaService } from './services/categoria.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  categorias: Categorias[] = [];
  categoriaIdEdicao: string | null = null;
  categoriaForm: FormGroup = new FormGroup({});
  constructor(
    private categoriaService: CategoriaService,
    private formBuilder: FormBuilder
  ) {
    this.categoriaForm = formBuilder.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      quantidade: [''],
    });
  }

  ngOnInit() {
    this.list();
  }

  list(): void {
    this.categoriaService
      .list()
      .subscribe((response) => (this.categorias = response));
  }

  save(): void {
    if (this.categoriaForm.valid) {
      const formData = this.categoriaForm.value;

      const categoria: Categorias = {
        id: this.categoriaIdEdicao ?? this.generateRandomString(6),
        nome: formData.nome,
        descricao: formData.descricao,
        quantidade: formData.quantidade,
      };

      if (this.categoriaIdEdicao) {
        // ATUALIZAR
        this.categoriaService
          .update(this.categoriaIdEdicao, categoria)
          .subscribe(() => {
            alert('Categoria atualizada com sucesso!');
            this.categoriaIdEdicao = null;
            this.categoriaForm.reset();
            this.list();
          });
      } else {
        // INSERIR
        this.categoriaService.add(categoria).subscribe(() => {
          alert('Categoria inserida com sucesso!');
          this.categoriaForm.reset();
          this.list();
        });
      }
    } else {
      alert('Formulário inválido!');
    }
  }

  update(id: string) {
    this.categoriaService.list().subscribe((clientes) => {
      const categoria = clientes.find((cat) => cat.id === id);
      if (categoria) {
        this.categoriaIdEdicao = categoria.id;
        this.categoriaForm.patchValue({
          nome: categoria.nome,
          descricao: categoria.descricao,
          quantidade: categoria.quantidade,
        });
      }
    });
  }

  remove(id: string) {
    this.categoriaService.remove(id).subscribe(() => {
      this.list();
    });
  }

  generateRandomString(length: number): string {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
