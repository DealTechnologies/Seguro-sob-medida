import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-card-post',
    templateUrl: './card-post.component.html',
    animations: [
        trigger('dropdown', [
            // ...
            state('open', style({display: 'block'})),
            state('closed', style({display: 'none'})),
            transition('open <=> closed', [
                animate('10ms')
            ]),
        ])
    ],
    styleUrls: ['./card-post.component.scss']
})
export class CardPostComponent implements OnInit {
    @Input() post = null;
    dropdownState = 'closed';
    emojis = [];
    favorite = false;

    constructor(private router: Router, private translate: TranslateService) {
    }

    ngOnInit(): void {
        console.log('POST', this.post);
    }

    openCloseDrop(event): void {
        event.stopPropagation();
        if (this.dropdownState === 'closed') {
            this.dropdownState = 'open';
        } else {
            this.dropdownState = 'closed';
        }
    }
    howLongDoes(): string {
        let str = '';
        this.translate.get('HOME.MINS-AGO', {time: 50}).subscribe(res => {
            str = res;
        });
        return str;
    }

}
