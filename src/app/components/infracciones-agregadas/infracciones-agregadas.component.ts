import { Component } from '@angular/core';

interface Card {
  title: string;
  article: string;
  uma: string;
}

@Component({
  selector: 'app-infracciones-agregadas',
  templateUrl: './infracciones-agregadas.component.html',
  styleUrls: ['./infracciones-agregadas.component.css']
})
export class InfraccionesAgregadasComponent {
  cards: Card[] = [
    { title: 'Sin permiso', article: 'Artículo 43 Fracción I', uma: 'UMA: 20 a 30' }
  ];

  newCard: Card = { title: '', article: '', uma: '' };

  addCard() {
    if (this.newCard.title && this.newCard.article && this.newCard.uma) {
      this.cards.push({ ...this.newCard });
      this.newCard = { title: '', article: '', uma: '' }; // Reset form
    }
  }

  removeCard(index: number) {
    this.cards.splice(index, 1);
  }
}


