import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsService } from './cards/cards.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule 
   ],
  providers: [CardsService]
})
export class ServicesModule { }
