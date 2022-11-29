import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/data/service/cart.service';
import { UserServiceService } from 'src/app/data/service/user-service.service';
import { CommentsService } from 'src/app/data/service/comments.service';
import { FormControl, FormGroup } from '@angular/forms';
import SwiperCore, { Pagination, Virtual } from "swiper";


import { timDTO } from 'src/app/core/entity/tim.entity';
SwiperCore.use([Pagination]);
SwiperCore.use([Virtual]);

@Component({
  selector: 'app-details',
  // selector: '[app-details]',

  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {


  constructor(private route: ActivatedRoute, private CommentsService: CommentsService, private UserService: UserServiceService, private cartService: CartService, private el: ElementRef) { }
  like: boolean = false
  tim: boolean = false
  tour!: any
  status!: any
  statusTim!: any
  comment!: any
  dataComment: any[] = []
  idTour!: any
  idAcount!: any
  countLike!: any
  dataTim!:any


  ngOnInit(): void {
    this.idAcount = localStorage.getItem("id")
    this.route.params.subscribe(res => this.getPostTourById(res['id']));
    this.getCmt(this.idTour)
    // console.log(this.tour,"du lieu detail");
    this.dataTim={  
      idAccount:0,
      idTour:0,
      status:false
    }
    // // this.route.params.subscribe(params=>this.getPostTourById(params[':id']))
  }

  
  //   postComment = new FormGroup({
  //     comment: new FormControl(""),
  // });



  getPostTourById(id: number) {
    this.idTour = id
    this.UserService.getTourById(id).subscribe((res) => {
      this.tour = res.data
      console.log(this.tour, "tour detail test");

    })
  }


  addToCart() {
    this.tour.priceItem = 0
    this.tour.valuePeople = 0
    this.cartService.addtoCart(this.tour)
  }
  onKey(event: any) { // without type info
    this.comment = event.target.value
    console.log(this.comment, "comment");

  }
  postCmt() {

    this.CommentsService.postComments({ noiDung: this.comment, idAcount: this.idAcount, idTour: this.idTour }).subscribe((res) => {
      console.log(res.data.id, " id");

      this.CommentsService.getComments(this.idTour).subscribe((res: any) => {
        this.dataComment = res.data
        console.log(this.dataComment, " data cmt");
        this.getCmt(this.idTour)
      })
    })
  }

  getCmt(idTour: any) {
    this.CommentsService.getComments(idTour).subscribe((res: any) => {
      this.dataComment = res.data
      console.log(this.dataComment, " data cmt");

    })
  }
  postLikeCmt(idCmt: any) {
    this.like = !this.like
    if (this.like == true) {
      this.status = 1
    }
    else { this.status = 0 }
    var idUser = JSON.parse(localStorage.getItem("id")!)
    this.CommentsService.postLikeCmt({ idUser: idUser, status: this.status, idCmt: idCmt }).subscribe((res: any) => {
      console.log(res, " res like");
      this.getCmt(this.idTour)

    })

  }

  postTim() {
    this.tim = !this.tim
    if (this.tim == true) {
      this.statusTim = true
    }
    else { this.statusTim = false }
    
    this.dataTim.idAccount=this.idAcount
    this.dataTim.idTour=this.idTour
    this.dataTim.status=this.statusTim

    var formTim= new FormData()
    formTim.append("idAccount",this.dataTim.idAccount),
    formTim.append("idTour",this.dataTim.idTour),
    formTim.append("status",this.dataTim.status)

    this.UserService.postTim(formTim).subscribe((res) => {
      this.UserService.getTourById(this.idTour).subscribe((res)=>{
        console.log(res," du lieuej");
        
        this.tour = res.data
      })

    })
  }

  

}
