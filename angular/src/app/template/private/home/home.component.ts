import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service';
import { Post } from '../../../shared/models/post.interface';
import { MatDialog } from '@angular/material/dialog';
import { ModalRespostaComponent } from '../../../shared/components/modal-resposta/modal-resposta.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  firstTimeLinePostUserImage = 'https://i.ibb.co/PrHM9bC/background-1.jpg';
  dropdownState = 'closed';
  loading = true;
  posts: Post[];

  skeletonStory = {
    'border-radius': '25px',
    height: '150px',
    width: '90px',
    'background-color': '#e1e1e1',
    margin: '0',
    border: '1px solid #d1d1d1'
  };

  skeletonCardHeader = {
    height: '50px',
    width: '50px',
    'background-color': '#e1e1e1',
    margin: '0',
    border: '1px solid #d1d1d1'
  };

  constructor(private translate: TranslateService,
              private router: Router,
              private homeService: HomeService,
              public dialog: MatDialog) {
  }

  @HostListener('document:click', ['$event']) clickedOutside(): void {
    this.dropdownState = 'closed';
  }

  ngOnInit(): void {

    this.homeService.getPosts().subscribe(res => {
      this.posts = res;
    });

    setTimeout(() => {
      this.loading = false;
    }, 500);
  }

  openNews(): void {
    window.open('https://seguros.sompo.com.br/seguro-auto-porque-contratar', '_blank');
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }


  onSwipeLeft(): void {
    this.router.navigate(['messages']);
  }

  onSwipeRight(): void {
    this.router.navigate(['profile/dw_hoff']);
  }

  openQuestions(): void {
    this.homeService
      .getQuestions()
      .subscribe(resp => {
        console.log('RESP', resp);
        this.openModalRespota(resp.data);
      }, error => {
        console.log(error);
      });
  }

  openModalRespota(questions): void {
    const dialogRef = this.dialog.open(ModalRespostaComponent,
      {
        disableClose: true,
        hasBackdrop: true,
        data: questions
      }
    );
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }



}
