import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from 'src/app/data/service/user-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private route :ActivatedRoute, private UserService: UserServiceService) { }

  tour!:any
  ngOnInit(): void {
    this.route.params.subscribe(res => this.getPostTourById(res['id']));
    // this.route.params.subscribe(params=>this.getPostTourById(params[':id']))
  }
  getPostTourById(id: number) {
    this.UserService.getTourById(id).subscribe((res) => {
     this.tour=res
     console.log(this.tour,"tour detail");
     
    })
  }

}
