import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnChanges{
  @Input() myCounter!: number

  ngOnChanges(){
    console.log(this)
  }
}
