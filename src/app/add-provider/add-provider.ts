import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../services/provider-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-provider',
  standalone: false,
  templateUrl: './add-provider.html',
  styleUrl: './add-provider.css'
})
export class AddProvider implements OnInit {

  constructor(private providerService: ProviderService, private router:Router) { // injection de la dépendance:le service Users
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  saveProvider(provider: any) {
    this.providerService.saveProvider(provider).subscribe(
      data => 
        {
          //console.log(data)
          this.router.navigate(['/providers']);
        },
      error => console.log(error)
    );
  }

}
