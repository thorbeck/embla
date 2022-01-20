import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent {
  elements: any[] | null = null;
  components: any[] | null = null;

  constructor(private dataService: DataService) {
    // Get elements
    dataService.getCollection('elements').then((data: any) => {
      this.elements = data;
    });
    // Get components
    dataService.getCollection('components').then((data: any) => {
      this.components = data;
    });
  }
}
