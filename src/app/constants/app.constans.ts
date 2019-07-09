import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AppConstans{
  public countryURLBase : string = 'https://restcountries.eu/rest/v2/';
  public countryAllURLBase : string = 'https://restcountries.eu/rest/v2/all';
  public postsURLBase: string = 'https://jsonplaceholder.typicode.com/posts/';
}

