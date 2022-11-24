import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => StarsComponent),
    multi: true,
  }]
})
export class StarsComponent implements OnInit, ControlValueAccessor {
  @Input() label: string;
  starControl: FormControl = new FormControl('');
  onChangeRate = (value: number) => {};
  onTouchRate = () => {};

  constructor() { }
  
  writeValue(star: number): void {
    this.starControl.setValue(star);
  }

  registerOnChange(fn: any): void {
    this.onChangeRate = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchRate = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.starControl.setValue(0);
  }

  ngOnInit(): void {
    this.starControl.valueChanges.subscribe((value) => { 
      this.onChangeRate(<number>value);
    });
  }
}
