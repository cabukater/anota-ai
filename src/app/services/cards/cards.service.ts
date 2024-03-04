import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private apiUrl = 'http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com/cardlist.json';

  constructor(private http: HttpClient) {}

  getCards(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  deleteCard(cardId: number): void {
  }
}
