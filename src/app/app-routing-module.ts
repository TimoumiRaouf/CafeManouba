import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { ListProviders } from './list-providers/list-providers';
import { AddProvider } from './add-provider/add-provider';

const routes: Routes = [
  {
    path:"users",
    component:Home
  },
  {
     path:"providers",
    component:ListProviders
  },
  {
     path:"addProvider",
    component:AddProvider
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
