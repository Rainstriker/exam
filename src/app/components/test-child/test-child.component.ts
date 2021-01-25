import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TestChildComponent),
      multi: true
    }
  ]
})
export class TestChildComponent implements OnInit, OnChanges, ControlValueAccessor {

  testProps : any
  changeProps : any
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes:SimpleChanges){
    console.log(changes)
  }

  thisFunc() {
    this.testProps = "ggggggg"
    this.changeProps(this.testProps)
  }

  writeValue(value:any) {
    if (value) this.testProps = value;
  }

  registerOnChange(fn:any) {
    this.changeProps = fn;
  }

  registerOnTouched(fn:any) {

  }
}
