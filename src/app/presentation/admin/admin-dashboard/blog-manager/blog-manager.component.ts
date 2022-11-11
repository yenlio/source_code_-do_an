import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AsyncSubject, Subject } from 'rxjs';
import { BlogService } from 'src/app/data/service/blog.service';
// import { TinyMceService } from 'src/app/data/service/tiny-mce.service';
@Component({
  selector: 'app-blog-manager',
  templateUrl: './blog-manager.component.html',
  styleUrls: ['./blog-manager.component.scss']
})
export class BlogManagerComponent implements OnInit {
  source!:any;
  tinymceInit!:any
  dataBlog!:any
 
  constructor(private blogService: BlogService) { }
  ngOnInit(): void {
   
    // this.tinyMceService.initDefaultEditor('editorTinyMCE');
  }
  private editorSubject: Subject<any> = new AsyncSubject();
  public myForm = new FormGroup({
    title: new FormControl("", Validators.required),
    body: new FormControl(
      "",
      Validators.required,
      // maxLength(this.editorSubject, 10)
    )
  });

  
 

  

  handleEditorInit(e: any) {
    this.editorSubject.next(e.editor);
    this.editorSubject.complete();
  }


  public onSubmit() {
    var formData: any = new FormData();
    formData.append('title', this.myForm.value.title);
    formData.append('content', this.myForm.value.body);

  
    this.blogService.postBlog(formData).subscribe((item)=>{
      console.log(item," du lieu sau khi post");
    })

    


    
  }
}


