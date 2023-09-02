import { Component } from '@angular/core';

@Component({
  selector: 'app-childskill',
  templateUrl: './childskill.component.html',
  styleUrls: ['./childskill.component.css']
})
export class ChildskillComponent {
  skillarray : any =[
    { name: 'Html', id: 1, width: "85%" },
    { name: 'css', id: 2, width: "25%"},
    { name: 'java', id: 3, width: "30%"},
    { name: 'ang', id: 4, width: "60%" }
  ]
}
