import { Component, signal } from '@angular/core';
import { ZardCardComponent } from '../card';
import { ZardSkeletonComponent } from "../skeleton";
import { ArrowRightIcon, LucideAngularModule } from 'lucide-angular';

type Info = {
  id: string
  title: string
  imageUrl: string
  link: string
}


@Component({
  selector: 'app-news-card',
  imports: [ZardSkeletonComponent, LucideAngularModule],
  templateUrl: './news-card.html',
})
export class NewsCard {
  arrow   = ArrowRightIcon;
  loading = signal(true);
  active  = signal(0);

  readonly data: Info[] = [
    {
      id: 'n1',
      title: "Unifip divulga resultado final para Estagiário do Elabore - Edital 0101/2025",
      imageUrl: "https://unifip.edu.br/imagens/postagens/34-1755888699.webp",
      link: "https://unifip.edu.br/postagem/7659"
    },
    {
      id: 'n2',
      title: 'Confira o resultado final da seleção para Preceptor do curso de Educação Física - Edital 00110',
      imageUrl: "https://unifip.edu.br/imagens/postagens/4-1758218697.webp",
      link: "https://unifip.edu.br/postagem/7683"
    }
  ]

  onLoad() {
    this.loading.set(false);
  }

  onError() {
    this.loading.set(false);
  }

}
