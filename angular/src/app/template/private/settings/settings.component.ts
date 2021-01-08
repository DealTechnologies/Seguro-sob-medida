import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
    title = 'Settings';
    showOutlet = false;

    constructor(private router: Router) {
    }

    ngOnInit(): void {
        this.router.navigate(['/settings/user']);
        this.getUserSettings();
    }

    changeTitle(title): void {
        this.title = title;
        this.changeOutlet();
    }

    changeOutlet(): void {
        this.showOutlet = !this.showOutlet;
    }

    navigateTo(): void {
        this.router.navigate(['/']);
    }

    getUserSettings(): void {

    }

}
