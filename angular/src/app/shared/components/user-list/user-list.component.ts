import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
    @Input() list = [];
    @Input() loading = true;

    constructor(private translate: TranslateService) {
    }

    ngOnInit(): void {
    }

    howLongDoes(): string {
        let str = '';
        this.translate.get('HOME.MINS-AGO', {time: 50}).subscribe(res => {
          str = res;
        });
        return str;
    }
}
