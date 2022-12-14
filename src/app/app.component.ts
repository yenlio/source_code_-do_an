import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private modalService: NgbModal) {
  }
  title = 'sourcecode-shop';
  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
