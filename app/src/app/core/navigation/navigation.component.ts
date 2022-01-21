import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { CustomRoutes } from '../routes';
import { INavigationItem } from './navigation.interface';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent {
  elements: any[] | null = null;
  components: any[] | null = null;
  navigationItems: INavigationItem[];
  routes: string = CustomRoutes.elements;

  constructor(private dataService: DataService) {
    this.navigationItems = [];
    // Elements section
    let navElements: INavigationItem = {
      title: 'Elements',
      slug: CustomRoutes.elements,
    };
    // Get elements
    dataService.getCollection('elements').then((data: any) => {
      navElements.children = data;
      this.navigationItems.push(navElements);
    });
    // Components section
    let navComponents: INavigationItem = {
      title: 'Components',
      slug: CustomRoutes.components,
    };
    // Get components
    dataService.getCollection('components').then((data: any) => {
      navComponents.children = data;
      this.navigationItems.push(navComponents);
    });
  }
}
