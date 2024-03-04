import { Component, ViewChild } from '@angular/core';
import { CardsComponent } from './components/cards/cards.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'anota-ai';
  @ViewChild(CardsComponent) cardsComponent!: CardsComponent;




  searchCards(searchTerm: string): void {
    if(this.cardsComponent) {
      this.cardsComponent.filterCards(searchTerm);
    }
  }
}
