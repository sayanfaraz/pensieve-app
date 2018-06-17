import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-journal-input',
  templateUrl: './journal-input.component.html',
  styleUrls: ['./journal-input.component.css']
})
export class JournalInputComponent implements OnInit {

    journalInput: String;

    constructor() {
     }

    ngOnInit() {
    }

    // ngOnChanges(changes: SimpleChanges) {
    //     // let shuffledJournal: String[] = this.shuffle(this.journalInput.split(" "));
    //     // this.journalOutput = shuffledJournal.join(" ");
    //     // this.journalOutput = this.journalInput;
    //     console.log("Change detected!")
    // }

    shuffle(strArr: String[]): String[] {
        let retArr: String[];
        let boundary: number = strArr.length;
        let randId: number = 0;
        let randStr: String;

        while (boundary != 0) {
            randId = Math.floor(Math.random() * boundary);

            randStr = strArr[randId]
            strArr[randId] = strArr[boundary];
            strArr[boundary] = randStr;

            retArr.push(randStr)
        }
        return retArr;
    }
}
