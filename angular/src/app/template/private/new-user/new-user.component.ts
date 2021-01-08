import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onFinish(): void {
    this.router.navigate(['/']);
  }

}
