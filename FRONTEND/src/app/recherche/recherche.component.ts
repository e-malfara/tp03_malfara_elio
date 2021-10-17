import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../modele/produit';
import { ProduitsService } from '../service/produits.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  
  search = "";
  
  constructor(private produitsService: ProduitsService) { }


  public listeProduits?: Observable<Array<Produit>>;

  ngOnInit(): void {
    this.listeProduits = this.produitsService.getProduits();
  }

}
