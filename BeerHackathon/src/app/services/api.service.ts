import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBeer } from '../ibeer';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BeersUrl = 'https://api.punkapi.com/v2/beers';
  constructor(private httpClient: HttpClient) { }

  async get(): Promise<IBeer[]> {
    return this.httpClient.get<IBeer[]>('https://api.punkapi.com/v2/beers').toPromise();
  }
}
