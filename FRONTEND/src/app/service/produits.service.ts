import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../modele/produit';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  constructor(private httpClient: HttpClient) { }

  public getProduits(): Observable<Array<Produit>> {
    return this.httpClient.get<Array<Produit>>(environment.baseUrl);
  }
}
