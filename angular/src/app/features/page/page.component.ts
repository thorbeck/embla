import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../../shared/data.service';

import { IPage } from './page.interface';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
})
export class PageComponent {
  item: IPage | null = null;

  constructor(private dataService: DataService, private router: Router) {
    let route = router.url.replace('/', '');
    if (route.length === 0) {
      route = 'home';
    }

    dataService.getPage(route).then((data: any) => {
      this.item = {
        title: data.title,
        content: data.content,
      };
    });
  }
}
