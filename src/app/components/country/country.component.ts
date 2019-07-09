import { Component, OnInit } from '@angular/core';
import {CountryService} from "../../services/country/country.service";
import {ICountryViewModel} from "../../models/ICountryViewModel";
import {CountryContentViewModel} from "../../models/CountryContentViewModel";

@Component({
  selector: 'country-control',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  public countryContent: CountryContentViewModel;
  public isLoading: boolean = true;

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.countryService.currentCountryContent.subscribe(countryContentViewModel => {
      this.countryContent = countryContentViewModel;
      this.isLoading = false;
    });
  }

}
