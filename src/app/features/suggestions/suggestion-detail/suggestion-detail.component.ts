import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-suggestion-detail',
  templateUrl: './suggestion-detail.component.html',
  styleUrls: ['./suggestion-detail.component.css']
})
export class SuggestionDetailComponent implements OnInit {

  suggestions = [
    { id: 1, title: 'Suggestion 1', description: 'Description 1' },
    { id: 2, title: 'Suggestion 2', description: 'Description 2' },
    { id: 3, title: 'Suggestion 3', description: 'Description 3' }
  ];

  selectedSuggestion: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.selectedSuggestion = this.suggestions.find(s => s.id === id);
  }

}
