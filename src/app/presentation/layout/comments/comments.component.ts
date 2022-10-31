import { Component, Input, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/data/service/comments.service';
import { commentDto } from 'src/app/core/entity/comment.entity';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  @Input() CurrentUserId!: string;
  comments: any[] = [];
  constructor(private commentService: CommentsService) {}

  ngOnInit(): void {
    this.commentService.getComments().subscribe((res: any) => {
      this.comments = res;
    });
  }
  addComment({
    text,
    parentId,
  }: {
    text: string;
    parentId: null | string;
  }): void {
    console.log('add comment', text, parentId);
    this.commentService.postComments(text,parentId).subscribe((res:any[])=>{
   this.comments=[...this.comments,res]
   console.log(this.comments," comment");
   
      
    })
  }
}
