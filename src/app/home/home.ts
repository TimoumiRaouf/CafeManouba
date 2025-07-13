import { Component } from '@angular/core';
import { Provider } from '../../models';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  providers:Provider[]=[
    {
      id:1, name:"Samsung",email:"samsung@gmail.com",address:"Koré"},

    { id:2, name:"HP",email:"hp@gmail.com",address:"USA"},

    { id:3, name:"Toshiba",email:"toshiba@gmail.com",address:"Japon"}
  ];

}
