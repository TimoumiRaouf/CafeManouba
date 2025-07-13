import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Provider } from '../../models';
import { ProviderService } from '../services/provider-service';

@Component({
  selector: 'app-list-providers',
  standalone: false,
  templateUrl: './list-providers.html',
  styleUrl: './list-providers.css'
})
export class ListProviders implements OnInit {
  listProviders = new BehaviorSubject<Provider[] | null>(null);
  constructor(private providerService: ProviderService) { // injection de la dépendance:le service Users
  }
  ngOnInit(): void {
    //console.log("ngOnInit ...")
    this.providerService.getProviders().subscribe({
      next: (data: any) => {
        console.log(data)
        this.listProviders.next(data);

      },
      error: (err) => {
        console.error('Erreur récupération providers', err);

      }
    });
  }
}
