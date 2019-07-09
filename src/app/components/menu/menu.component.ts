import {Component, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {CountryService} from "../../services/country/country.service";
import {ICountryDropdown} from "../../models/ICountryDropdown";

@Component({
  selector: 'menu-control',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {

  private titleCountry: string = 'Paises';
  private isCountries: boolean = true;
  private flagLoadingBase = location.origin + "/assets/public/imgs/loader.gif";
  public country = '';
  public flagCountry = this.flagLoadingBase;
  public countriesDropdown: ICountryDropdown[] = [];
  public isLoadingCountries = false;
  public hasError = false;
  constructor(private countryService: CountryService) { }

  ngOnInit() {
    let titleCountry = 'Paises';
    let isCountries = true;
    this.countryService.changeViewComponent(titleCountry, isCountries);
  }

  searchCountryDropdown(object){
    if(object.target.value !== "")
      this.getCountries(object.target.value);
    else
      this.flagCountry = this.flagLoadingBase;
  }

  clearCountryDropdown(){
    let component = this;
    this.hasError = false;
    this.flagCountry = this.flagLoadingBase;
    setTimeout(function(){
      component.countriesDropdown = [];
    }, 500);
  }

  searchCountries(object){
    this.countriesDropdown = [];
    if(object.target.value !== "")
      this.getCountries(object.target.value);
    else{
      this.flagCountry = this.flagLoadingBase;
      this.countryService.changeViewComponent(this.titleCountry, this.isCountries);
    }
  }

  changeComponent(isCountries: boolean, country?: ICountryDropdown){
    this.country = isCountries ? '' : country.name;
    this.countryService.changeViewComponent(isCountries ? 'Paises' : country.name, isCountries);
    this.flagCountry = country.flag;
    this.countriesDropdown = [];
  }

  private getCountries(nameCountry: string){
    this.isLoadingCountries = true;
    this.hasError = false;
    this.countryService.getCountriesFindByName(nameCountry).then(
      (success) => {
        this.countriesDropdown = success.slice(0, 15);
        this.isLoadingCountries = false;
      },
      (error) => {
        this.countriesDropdown = [];
        this.isLoadingCountries = false;
        this.hasError = true;
        this.flagCountry = this.flagLoadingBase;
      });
  }

}
