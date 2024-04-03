import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { annonce } from '../model/annonce';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnnonceServiceService {

  constructor(private http: HttpClient) {}

  getAnnonce(): Observable<annonce[]> {
    return this.http.get<annonce[]>("assets/data.json")
  }
}

