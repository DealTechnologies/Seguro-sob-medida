import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

    form = {
        name: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email])
    };

    constructor() {
    }

    ngOnInit(): void {
    }


    getErrorMessage(): string {
        if (this.form.email.hasError('required')) {
            return 'You must enter a value';
        }
        return this.form.email.hasError('email') ? 'Not a valid email' : '';
    }

}
