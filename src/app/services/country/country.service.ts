import { Injectable } from '@angular/core';
import {UnitOfWorkService} from "../unitOfWork/unit-of-work.service";
import {AppConstans} from "../../constants/app.constans";
import {BehaviorSubject, Observable} from "rxjs";
import {ICountryViewModel} from "../../models/ICountryViewModel";
import {CountryContentViewModel} from "../../models/CountryContentViewModel";
import {ICountryDropdown} from "../../models/ICountryDropdown";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private countryContentViewModel = new BehaviorSubject<CountryContentViewModel>(new CountryContentViewModel());
  currentCountryContent = this.countryContentViewModel.asObservable();

  constructor(private unitOfWork: UnitOfWorkService, private constantURLs: AppConstans) { }

  getAllCountries(): Observable<ICountryViewModel[]>{
    return this.unitOfWork.getQueryable<ICountryViewModel[]>(this.constantURLs.countryAllURLBase);
  }

  getCountriesFindByName(countryName: string): Promise<ICountryDropdown[]>{
    let urlQuery = `${this.constantURLs.countryURLBase}name/${countryName}?fields=name;nativeName;flag`;
    return this.unitOfWork.getQueryable<ICountryDropdown[]>(urlQuery).toPromise();
  }

  getCountryFindByName(countryName: string): Observable<ICountryViewModel>{
    let urlQuery = `${this.constantURLs.countryURLBase}name/${countryName}?fullText=trueSe`;
    return this.unitOfWork.getQueryable<ICountryViewModel>(urlQuery);
  }

  changeViewComponent(nameCountry: string, isCountries: boolean) {
    let countryContentViewModel: CountryContentViewModel = new CountryContentViewModel();
    countryContentViewModel.isCountries = isCountries;
    if(isCountries){
      countryContentViewModel.title = nameCountry;
      this.getAllCountries().subscribe(countries => countryContentViewModel.countries = countries);
    }else{
      this.getCountryFindByName(nameCountry).subscribe(country =>{
        countryContentViewModel.title = country[0].name;
        countryContentViewModel.country = country[0];
      });
    }
    this.countryContentViewModel.next(countryContentViewModel);
  }

}
