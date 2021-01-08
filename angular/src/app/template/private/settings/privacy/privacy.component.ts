import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-privacy',
    templateUrl: './privacy.component.html',
    styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {

    form = {
        viewers: new FormControl(false),
        faceId: new FormControl(false),
        global: new FormControl(false),
        region: new FormControl(false),
        ads: new FormControl(false),
        overnight: new FormControl(false),
        preview: new FormControl(false),
        images: new FormControl(false),
        age: new FormControl(false),
        distance: new FormControl(false),
        mostLikes: new FormControl(false),
        customized: new FormControl(false),
        discoverFeed: new FormControl('global'),
    };

    checkboxLabelPosition = 'after';

    constructor() {
    }

    ngOnInit(): void {
    }

}
