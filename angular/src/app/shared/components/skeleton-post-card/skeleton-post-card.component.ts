import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton-post-card',
  templateUrl: './skeleton-post-card.component.html',
  styleUrls: ['./skeleton-post-card.component.scss']
})
export class SkeletonPostCardComponent implements OnInit {
  skeletonCardHeader = {
    height: '50px',
    width: '50px',
    'background-color': '#e1e1e1',
    margin: '0',
    border: '1px solid #d1d1d1'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
