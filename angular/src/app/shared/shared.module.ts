import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './data.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [DataService],
  providers: [DataService],
})
export class SharedModule {}
