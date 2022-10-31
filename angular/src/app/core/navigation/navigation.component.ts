import { Component } from '@angular/core';
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

    // Get nav items
    dataService.getNavItems().then((dataNav: any[]) => {
      // Get elements
      dataService.getCollection('elements').then((dataElements: any) => {
        // Iterate navItems
        dataNav.forEach((dataNavItem: any) => {
          let navItem: INavigationItem = {
            title: dataNavItem.title,
            slug: dataNavItem.slug,
            children: dataElements.filter(
              (dataElement: any) => dataElement.type === dataNavItem.slug
            ),
          };
          this.navigationItems.push(navItem);
        });
      });
    });
  }
}
