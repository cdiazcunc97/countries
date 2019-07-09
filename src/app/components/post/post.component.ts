import { Component, OnInit } from '@angular/core';
import { PostService } from "../../services/post/post.service";
import {UnitOfWorkService} from "../../services/unitOfWork/unit-of-work.service";
import {IPostViewModel} from "../../models/IPostViewModel";


@Component({
  selector: 'post-control',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public posts: IPostViewModel[] = [];
  public isLoading: boolean = true;
  constructor(private postService: PostService) {

  }

  ngOnInit() {
    this.postService.getPosts().subscribe(data => {
      this.isLoading = false;
      this.posts = data
    });
  }

  doQuery(){

  }

}
