import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ThemeService } from '../shared/themes/theme.service';
import { slideInAnimation } from '../shared/animations/animationTransition';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../shared/auth/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './public/login/login.component';


@Component({
  selector: 'app-template',
  animations: [
    slideInAnimation,
    trigger('openCloseMenu', [
      // ...
      state('open', style({ marginLeft: 0 })),
      state('closed', style({ marginLeft: -300 })),
      transition('open <=> closed', [
        animate('300ms')
      ]),
    ]),
    trigger('openCloseMenuUser', [
      // ...
      state('open', style({ opacity: 1 })),
      state('closed', style({ opacity: 0 })),
      transition('open <=> closed', [
        animate('1ms')
      ]),
    ]),
    trigger('focus', [
      // ...
      state('on', style({ opacity: 0.2, display: 'block' })),
      state('off', style({ opacity: 0, display: 'none' })),
      transition('open <=> closed', [
        animate('1ms')
      ]),
    ]),
  ],
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss',]
})
export class TemplateComponent implements OnInit {
  menuState = 'closed';
  menuUserState = 'closed';
  focusState = 'off';
  themes = ['light', 'dark'];
  languages = [{
    name: 'English',
    value: 'en'
  },
  {
    name: 'Português Brasil',
    value: 'pt-br'
  }];
  navItems = [
    { route: '/', icon: 'home' },
    { route: '/settings', icon: 'settings' },
    { route: '/', icon: 'home' }
  ];
  user;

  constructor(private translate: TranslateService,
    public authService: AuthService,
    private router: Router,
    public dialog: MatDialog,
    private themeService: ThemeService) {
    this.translate.setDefaultLang('formal');
  }

  // fecha menu se tiver clicado fora dele
  @HostListener('document:click', ['$event']) clickedOutside(): void {
    this.menuState = 'closed';
    this.closeAll();
  }

  ngOnInit(): void {
    this.user = this.authService.getUser();
    console.log('user', this.user);
  }

  prepareRoute(outlet: RouterOutlet): any {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }


  useLanguage(language: string): void {
    this.translate.use(language);
  }

  useTheme(theme: string): void {
    this.themeService.setActiveThem(theme);
  }


  clickOpenCloseMenu(event): void {
    event.stopPropagation();
    if (this.menuState === 'closed') {
      this.menuState = 'open';
      this.focusState = 'on';
    } else {
      this.menuState = 'closed';
      this.focusState = 'off';

    }
  }

  clickOpenCloseMenuUser(event): void {

    if (!this.authService.isLogged()) {
      this.router.navigate(['/']);
    } else {
      event.stopPropagation();
      if (this.menuUserState === 'closed') {
        this.menuUserState = 'open';
        this.focusState = 'on';
      } else {
        this.menuUserState = 'closed';
        this.focusState = 'off';
      }
    }

  }

  closeAll(): void {
    this.menuUserState = 'closed';
    this.menuState = 'closed';
    this.focusState = 'off';
  }

  doLogout(): void {
    this.closeAll();
    this.authService.doLogout();
  }

  // dialog do login

  openDialog(): void {
    this.dialog.open(LoginComponent, {
      minWidth: '400px'
    });
  }

  navegar() {
    if (this.authService.isLogged) {
      this.router.navigate(['/']);

    } else {
      this.router.navigate(['/tela-inicio']);

    }

  }
}
