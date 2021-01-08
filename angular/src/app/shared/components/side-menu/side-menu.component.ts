import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../themes/theme.service';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../auth/auth.service';

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

    darkMode = false;
    lightMode = this.darkMode ? 'Dark Mode' : 'Light Mode';
    user = {
        route: '/profile/dw_hoff'
    };

    constructor(
        private themeService: ThemeService,
        private authService: AuthService,
        private translate: TranslateService) {
    }

    ngOnInit(): void {
    }

    changeMode(): void {
        this.darkMode = !this.darkMode;
        this.themeService.setActiveThem(this.darkMode ? 'dark' : 'light');
        if (this.darkMode) {
            this.translate.get('TEMPLATE.NAV.MENU.DARK-MODE').subscribe(res => {
                this.lightMode = res;
            });
        } else {
            this.translate.get('TEMPLATE.NAV.MENU.LIGHT-MODE').subscribe(res => {
                this.lightMode = res;
            });
        }
    }

    doLogout(): void {
        this.authService.doLogout();
    }


}
