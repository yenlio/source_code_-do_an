import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/data/service/admin.service';
import { UserServiceService } from 'src/app/data/service/user-service.service';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import { FormControl, FormGroup } from '@angular/forms';
import { searchDto } from 'src/app/core/entity/search.entity';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  dataTour: any
  images=["../../../../assets/images/Đà nẵng.jpg","../../../../assets/images/Đà nẵng.jpg","../../../../assets/images/Đà nẵng.jpg"]
  dataTourHot: any
  dataImage: any[] = []
  timeResult!: any
  searchData: searchDto = {
    searchByPlace: '',
    searchByPrice: 0
  }
	
  
  constructor(private AdminService: AdminService, private UserService: UserServiceService) { }
  timeStart!: any
  // searchData!:any
  ngOnInit(): void {
    this.getPostTour()
    this.getTourHot()
    
  }

  searchForm = new FormGroup({
    searchByPlace: new FormControl(''),
    searchByPrice: new FormControl(0)
  })

  getTourHot() {
    this.AdminService.getTourhot().subscribe((res) => {
      this.dataTourHot = res
      for (let i = 0; i <= this.dataTourHot.length; i++) {
        this.dataTourHot[i].price = this.formatNumber(this.dataTourHot[i].price)
      }
      console.log(this.dataTourHot, "hot");
    })
  }

  getPostTour() {
    this.AdminService.getTour().subscribe((res) => {
      this.dataTour = res.data
      for (let i = 0; i < res.data.length; i++) {
        this.dataImage.push(res.data[i].image)
      }
      for (let i = 0; i <= this.dataTour.length; i++) {
        const element = this.dataTour[i];
        const an = moment(element).utc().format('DD-MM-YYYY')
        this.dataTour[i].timeStart = an
        // this.test(element)
        this.dataTour[i].price = this.formatNumber(this.dataTour[i].price)
        console.log(this.dataTour, " du lieu data tour");


      }
    })
  }

  getPostTourById(id: any) {
    this.UserService.getTourById(id).subscribe((res) => {
      console.log(res, "du lieu id");
    })
  }



  formatDate(time: any) {
    var d = new Date(time),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    const timeResult = [year, month, day].join('-');
    console.log(timeResult, ' time');
    return timeResult
  }

  test(a: any) {

    console.log(this.dataTour.timeStart, " log innn");


  }
  search() {
    console.log("j");

    if (this.searchForm) {
      this.searchData.searchByPlace = this.searchForm.value.searchByPlace!,
        this.searchData.searchByPrice = this.searchForm.value.searchByPrice!
    }
    console.log(this.searchData, " du lieu chuan bi search");
    this.AdminService.searchTour(this.searchData).subscribe((res: any) => {
      this.dataTour = res

    })





  }
  formatNumber(num: any) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  }

  // localeTest() {
  //     console.log(moment.locale()); // en
  //     moment.locale('fr');
  //     console.log(moment.locale()); // en
  //     moment.locale('pt-BR');
  //     console.log(moment.locale()); // pt-BR
  // }

}
