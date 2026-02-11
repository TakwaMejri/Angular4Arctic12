//import { NgModule } from '@angular/core';
//import { RouterModule, Routes } from '@angular/router';

//const routes: Routes = [];

//@NgModule({
  //imports: [RouterModule.forRoot(routes)],
  //exports: [RouterModule]
//})
//export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { NotfoundComponent } from './core/notfound/notfound.component';
//import { ListSuggestionComponent } from './suggestions/list-suggestion/list-suggestion.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // route par défaut
  { path: 'home', component: HomeComponent },
  { path: 'suggestions', loadChildren: () => import('./features/suggestions/suggestions.module').then(m => m.SuggestionsModule) },
  { path: 'users', loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule) },
  //{ path: 'listSuggestion', component: ListSuggestionComponent },
  { path: '**', component: NotfoundComponent } // wildcard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

