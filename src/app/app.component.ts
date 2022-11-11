import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnChanges, OnInit {
  title: string = 'ng-shit-code';
  users: string[] = ['Alex', 'John', 'Jane'];
  isRed: boolean = false;
  img_url!: string;
  input_val: string = '';

  constructor() {
    setTimeout(() => {
      this.img_url = 'https://picsum.photos/200';
    }, 5000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.input_val);
  }

  ngOnInit(): void {
    // alert('Initialized');
  }

  onInput(event: any) {
    this.input_val = event.target.value;
  }

  onClick(){
    this.isRed = !this.isRed;
  }
}
