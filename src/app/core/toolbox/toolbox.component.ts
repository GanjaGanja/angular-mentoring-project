import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss']
})
export class ToolboxComponent implements OnInit {
  @Input() public toolboxInput: string;

  constructor() { }

  ngOnInit() {
  }

  public logValue(value: string): void {
    if (value === undefined || value === '') {
      console.log('no value in input field');
    } else {
      console.log(value);
    }
  }
}
