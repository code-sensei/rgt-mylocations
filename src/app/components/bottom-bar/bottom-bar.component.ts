import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss']
})
export class BottomBarComponent implements OnInit {

  currentRoute: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = this.router.url;
      }
    })
  }

  routeChange(route: string) {
    this.router.navigate([`${route}`]);
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    $(".nav li").on('click', () => {
      $(this).addClass("is-active").siblings().removeClass("is-active");
    });
  }
 
}
