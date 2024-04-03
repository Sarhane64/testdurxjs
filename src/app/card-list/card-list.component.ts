import { annonce } from './../model/annonce';
import { AnnonceServiceService } from './../service/annonce-service.service';
import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CardComponent,CommonModule],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {
annonce : annonce[] = []

constructor(private AnnonceServiceService : AnnonceServiceService ) {}

ngOnInit() :void {
  this.AnnonceServiceService.getAnnonce().subscribe((e) => {
    this.annonce = e
    console.log(this.annonce)
  })
}
}
