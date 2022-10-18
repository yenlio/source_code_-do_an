import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup-detail',
  templateUrl: './popup-detail.component.html',
  styleUrls: ['./popup-detail.component.scss']
})
export class PopupDetailComponent implements OnInit {
  @Input() showForm = false;
  constructor() { }

  ngOnInit(): void {
    console.log(this.showForm," show form");
    
  }
  save(){

  }
  closeForm(){

  }

}
