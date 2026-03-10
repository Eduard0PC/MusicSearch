import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Search } from './components/search/search';

const routes: Routes = [
  {
    path: '',
    component: Search
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

