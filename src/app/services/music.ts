import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Music {

  private api = '/api/search?q=';

  constructor(private http: HttpClient) {}

  searchMusic(term: string) {
    return this.http.get(this.api + term);
  }

}