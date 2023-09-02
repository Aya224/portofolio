import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-porto',
  templateUrl: './child-porto.component.html',
  styleUrls: ['./child-porto.component.css']
})
export class ChildPortoComponent {
@Input() cardDetails:any;
card : any = [
  { name: 'Book-A', id: 1, trig: true },
    { name: 'Book-B', id: 2, trig: true },
    { name: 'Item-C', id: 3, trig: true },
    { name: 'Item-D', id: 4, trig: true },
    { name: 'Item-C', id: 3, trig: true },
    { name: 'Item-D', id: 4, trig: true }
]
}
