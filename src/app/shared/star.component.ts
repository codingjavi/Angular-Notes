import { Component, OnChanges, Input, EventEmitter, Output } from "@angular/core";



@Component({ //component decorater (this makes this class a component)
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'] //dont forget style sheet and brackets
})



export class StarComponent implements OnChanges{
  //properties for property binding ([title] & [style.width])
  @Input() rating: number = 0; //star.component GETS product-list.component(container) to PASS THE rating
  cropWidth: number = 75; //for 75 px for 5 stars (so need smaller if rating less than 5 stars)
  //creating event STRING obj
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>(); //@Output() decorator SO container responds to this event


    //need re-calculate cropWidth everytime  rating changes: S0 USE OnChanges(DO SOMETHING AFTER CHANGE in INPUT properties) lifecycle hook (have to implement it)
  ngOnChanges(): void {
    this.cropWidth = this.rating * 75/5 //this. bc calling from own class (if rating changes IT DOES SOMETHING AFTEr THAT change)
  }

  onClick(): void {
    //emitting message to container (use EVENT BINDING so container can LISTEN)
    this.ratingClicked.emit(`The Rating ${this.rating} was clicked!`);
  }

}
