import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [PageComponent],
  imports: [CommonModule],
  exports: [PageComponent],
  providers: [DataService],
})
export class SharedModule {}
