import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../data.service';

import { IPage } from './page.interface';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent {
  item: IPage | null = null;
  constructor(private dataService: DataService, private router: Router) {
    dataService.getPage(router.url.replace('/', '')).then((data: any) => {
      this.item = {
        title: data.title,
        content: data.content,
      };
    });
  }
}
