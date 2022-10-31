import { Component, Input, OnInit } from '@angular/core';
import { commentDto } from 'src/app/core/entity/comment.entity';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  canReply:boolean=false;
  canEdit:boolean=false;
  canDelete:boolean=false;


  @Input() currentUserId!:string
  @Input() comment!:commentDto
  constructor() { }

  ngOnInit(): void {
    this.canReply=Boolean(this.currentUserId)
  }

}
