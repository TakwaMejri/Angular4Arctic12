import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuggestionsRoutingModule } from './suggestions-routing.module';
import { SuggestionsComponent } from './suggestions.component';
import { SuggestionListComponent } from './suggestion-list/suggestion-list.component';
import { SuggestionDetailComponent } from './suggestion-detail/suggestion-detail.component';


@NgModule({
  declarations: [
    SuggestionsComponent,
    SuggestionListComponent,
    SuggestionDetailComponent
  ],
  imports: [
    CommonModule,
    SuggestionsRoutingModule
  ]
})
export class SuggestionsModule { }
