import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'td-loader-spinner',
    templateUrl: './loader-spinner.component.html',
    styleUrls: ['./loader-spinner.component.css'],
    standalone: false
})
export class LoaderSpinnerComponent implements OnInit {
  @Input() active = false;

  constructor() {}

  ngOnInit() {}
}
