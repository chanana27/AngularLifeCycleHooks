import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from "./components/child/child.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'angularHooksLifeCycle';

  private num:number = 456
  
  public get counter() : number {
    return this.num
  }
  
  public set counter(number : number) {
    this.num = number;
  }

  increment(){
    this.counter++;
  }

  decrement(){
    this.counter--;
  }
  
}
