import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  formation:string="FullStack Spring Angular & Devops";

  nom:string  ="Mohamed Amine mezghich";
  email:string ="amine.mezghich@gmail.com";

  noms:string[]=["aMINE","taHa","abdeSAtar","raniA","iNes"]
}
