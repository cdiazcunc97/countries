import {Observable} from "rxjs";
import {ICountryViewModel} from "./ICountryViewModel";

export class CountryContentViewModel{
  title: string;
  isCountries: boolean;
  country: ICountryViewModel;
  countries: ICountryViewModel[];
}
