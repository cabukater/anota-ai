import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { ReactiveFormsModule } from '@angular/forms'; // Importe ReactiveFormsModule
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [ ReactiveFormsModule ], 
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a form with searchTerm field', () => {
    expect(component.searchForm).toBeTruthy();
    expect(component.searchForm.get('searchTerm')).toBeTruthy();
  });

  it('should emit search term on value change', () => {
    const spy = spyOn(component.searchEmitter, 'emit');
    const input = component.searchForm.get('searchTerm');
    input?.setValue('test');
    expect(spy).toHaveBeenCalledWith('test');
  });
});
