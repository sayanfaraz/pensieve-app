import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-journal-input',
  templateUrl: './journal-input.component.html',
  styleUrls: ['./journal-input.component.css']
})
export class JournalInputComponent implements OnInit {

    private journal: String;

    constructor() { }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges) {

    }

}
