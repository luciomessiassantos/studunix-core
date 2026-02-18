import { Component, signal } from '@angular/core';
import { ZardCardComponent } from '../card';
import { ZardSkeletonComponent } from "../skeleton";

type Info = {
  id: string
  title: string
  imageUrl: string
  link: string
}


@Component({
  selector: 'app-news-card',
  imports: [ZardCardComponent, ZardSkeletonComponent],
  templateUrl: './news-card.html',
  styleUrl: './news-card.css',
})
export class NewsCard {

  readonly data: Info[] = [
    {
      id: 'n1',
      title: "Unifip divulga resultado final para Estagiário do Elabore - Edital 0101/2025",
      imageUrl: "https://unifip.edu.br/imagens/postagens/34-1755888699.webp",
      link: "https://unifip.edu.br/postagem/7659"
    }
  ]

  loading = signal(true);

  onLoad() {
    this.loading.set(false);
  }

  onError() {
    this.loading.set(false);
  }

}
