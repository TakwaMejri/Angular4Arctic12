import { Component } from '@angular/core';

@Component({
  selector: 'app-suggestion-list',
  templateUrl: './suggestion-list.component.html',
  styleUrls: ['./suggestion-list.component.css']
})
export class SuggestionListComponent {

  suggestions = [
    { id: 1, title: 'Suggestion 1', description: 'Description 1' },
    { id: 2, title: 'Suggestion 2', description: 'Description 2' },
    { id: 3, title: 'Suggestion 3', description: 'Description 3' }
  ];

}
