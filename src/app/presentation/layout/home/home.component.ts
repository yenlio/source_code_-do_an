import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/data/service/admin.service';
import { UserServiceService } from 'src/app/data/service/user-service.service';
import * as moment from 'moment';
import 'moment/locale/pt-br';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dataTour!: any
  timeResult!:any
  constructor(private AdminService: AdminService, private UserService: UserServiceService) { }
  timeStart!:any
  ngOnInit(): void {
    this.getPostTour()
  }
  getPostTour() {
    this.AdminService.getTour().subscribe((res) => {
      this.dataTour = res.data
     for (let i = 0; i <= this.dataTour.length; i++) {
      const element = this.dataTour[i];
      this.test(element)

      console.log(this.dataTour.timeStart," time start");
      
   
     }
      
    })
  }

  getPostTourById(id: any) {
    this.UserService.getTourById(id).subscribe((res) => {
      console.log(res, "du lieu id");
    })
  }

   formatDate(time:any) {
    var d = new Date(time),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) 
      month = '0' + month;
    if (day.length < 2) 
      day = '0' + day;

    const timeResult= [year, month, day].join('-');
    console.log(timeResult,' time');
    
    return timeResult
  }

  test(a:any) { 
  const an=  moment(a).utc().format('DD-MM-YYYY')
  this.dataTour.timeStart=an
  console.log(this.dataTour.timeStart," log innn");
  

}

// localeTest() {
//     console.log(moment.locale()); // en
//     moment.locale('fr');
//     console.log(moment.locale()); // en
//     moment.locale('pt-BR');
//     console.log(moment.locale()); // pt-BR
// }
  
}
