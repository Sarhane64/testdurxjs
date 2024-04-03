import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
@Input() name :string = ""
@Input() prix : number = 0
@Input() codepostale :number =  0
@Input() ville : string =  ""
@Input() rue : string = ""
}
