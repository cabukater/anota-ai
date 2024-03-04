import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardsComponent } from './cards.component';
import { CardsService } from 'src/app/services/cards/cards.service';
import { of } from 'rxjs';
import { TypeLabelPipe } from 'src/app/pipes/type-label.pipe';

// Criar um mock para o CardsService
class MockCardsService {
  getCards() {
    return of([
      { title: 'Card 1', description: 'Description 1' }, 
      { title: 'Card 2', description: 'Description 2' }
    ]);
  }
}

describe('CardsComponent', () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;
  let service: CardsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsComponent, TypeLabelPipe ],
      providers: [ { provide: CardsService, useClass: MockCardsService } ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(CardsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get cards on init', () => {
    component.ngOnInit();
    expect(component.cards.length).toBe(2);
    expect(component.filteredCards.length).toBe(2);
  });

  it('should filter cards by searchTerm', () => {
    const searchTerm = 'Card 1';
    component.cards = [
      { title: 'Card 1', description: 'Description 1' },
      { title: 'Card 2', description: 'Description 2' }
    ];
    component.filterCards(searchTerm);
    expect(component.filteredCards.length).toBe(1);
    expect(component.filteredCards[0].title).toContain(searchTerm);
  });

  it('should delete a card', () => {
    component.cards = [
      { title: 'Card 1', description: 'Description 1' },
      { title: 'Card 2', description: 'Description 2' }
    ];
    const originalLength = component.cards.length;
    component.deleteCard(0);
    expect(component.cards.length).toBe(originalLength - 1);
    expect(component.cards.find(card => card.title === 'Card 1')).toBeUndefined();
  });
});
