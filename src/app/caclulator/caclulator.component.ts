import { Component } from '@angular/core';

@Component({
  selector: 'app-caclulator',
  templateUrl: './caclulator.component.html',
  styleUrls: ['./caclulator.component.scss']
})

export class CaclulatorComponent {
    public first:number =1
    public second: number=1
    public defaultOption: string='+'
    public calcElement: string[] =['+','-','*','/']
    public result?: number 
    public calc(){
    switch(this.defaultOption){
      case "+":
      this.result = this.first + this.second
      break;
      case'-':
      this.result = this.first - this.second
      break;
      case '*':
        this.result = this.first * this.second
        break;
        case '/':
          this.result = this.first / this.second
    }
}
}
