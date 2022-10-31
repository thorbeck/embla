import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { DetailRoutingModule } from './detail-routing.module';

@NgModule({
  declarations: [DetailComponent],
  imports: [CommonModule, DetailRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DetailModule {}
