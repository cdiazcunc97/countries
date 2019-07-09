import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {IPostViewModel} from "../../models/IPostViewModel";
import {UnitOfWorkService} from "../unitOfWork/unit-of-work.service";
import {AppConstans} from "../../constants/app.constans";


@Injectable({
  providedIn: 'root'
})
export class PostService{

  constructor(private unitOfWork: UnitOfWorkService, private constansURL: AppConstans) { }

  getPosts(): Observable<IPostViewModel[]>{
    return this.unitOfWork.getQueryable<IPostViewModel[]>(this.constansURL.postsURLBase);
  }
}
