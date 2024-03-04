import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/services/cards/cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  cards: any[] = [];
  filteredCards: any[] = []; 

  constructor(private cardsService: CardsService) {}

  ngOnInit(): void {
    this.cardsService.getCards().subscribe(data => {
      this.cards = data;
      this.filteredCards = [...this.cards]; 
    });
  }

  deleteCard(index: number): void {
    this.cards.splice(index, 1);
    this.filterCards('');
  } 

  
  filterCards(searchTerm: string): void {
    if (!searchTerm) {
      this.filteredCards = [...this.cards];
    } else {
      this.filteredCards = this.cards.filter(card => 
        card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.description.toLowerCase().includes(searchTerm.toLowerCase())

      );
    }
  }
}
