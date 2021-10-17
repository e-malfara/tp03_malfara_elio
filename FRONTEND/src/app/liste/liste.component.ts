import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../modele/produit';
import { ProduitsService } from '../service/produits.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  constructor(private produitsService: ProduitsService) { }

  public listeProduits?: Observable<Array<Produit>>;

  ngOnInit(): void {
    this.listeProduits = this.produitsService.getProduits();
  }

}
