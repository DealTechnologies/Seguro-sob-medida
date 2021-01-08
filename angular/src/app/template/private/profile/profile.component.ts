import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HomeService } from '../home/home.service';
import { Post } from '../../../shared/models/post.interface';
import { User } from '../../../shared/models/user.interface';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    firstTimeLinePostUserImage = 'https://i.ibb.co/PrHM9bC/background-1.jpg';
    loading = true;
    posts: Post[] = [];
    editMode = false;
    user: User = {name: '', profileDescription: '', profileImage: ''};

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
    @ViewChild('inputUser', {static: false}) input: ElementRef;

    constructor(private translate: TranslateService,
                private router: Router,
                private homeService: HomeService) {
    }


    ngOnInit(): void {
        this.homeService.getUser().subscribe(res => {
            this.user = res;
        });

        this.homeService.getPosts().subscribe(res => {
            this.posts = res;
        });

        setTimeout(() => {
            this.loading = false;
        }, 500);
    }

    useLanguage(language: string): void {
        this.translate.use(language);
    }


    onSwipeLeft(): void {
        this.router.navigate(['/']);
    }

    changeEditMode(): void {
        this.editMode = !this.editMode;
        if (this.editMode) {
            setTimeout(() => this.input.nativeElement.focus());
        }
    }

    navigateTo(): void {
        this.router.navigate(['profile/dw_hoff']);
    }

}
