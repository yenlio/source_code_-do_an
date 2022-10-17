import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-post-tour',
  templateUrl: './post-tour.component.html',
  styleUrls: ['./post-tour.component.scss']
})
export class PostTourComponent implements OnInit {
  model!: NgbDateStruct;
  constructor() { }

  ngOnInit(): void {
  }
  postTourForm = new FormGroup({
    title: new FormControl(""),
    description: new FormControl(""),
    timeStart: new FormControl<Date | null>(null),

  });

  postTour(){

  }

}
