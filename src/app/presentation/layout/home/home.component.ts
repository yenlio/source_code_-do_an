import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/data/service/admin.service';
import { UserServiceService } from 'src/app/data/service/user-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dataTour!: any
  constructor(private AdminService: AdminService, private UserService: UserServiceService) { }

  ngOnInit(): void {
    this.getPostTour()
  }
  getPostTour() {
    this.AdminService.getTour().subscribe((res) => {
      this.dataTour = res.data
      console.log(res.data, "data");
    })
  }

  getPostTourById(id: any) {
    this.UserService.getTourById(id).subscribe((res) => {
      console.log(res, " du lieu id");
    })
  }

}
