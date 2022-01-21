import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnsureImportedOnceModule } from './import-guard';
import { NavigationModule } from './navigation/navigation.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, NavigationModule],
  exports: [NavigationModule],
})
export class CoreModule extends EnsureImportedOnceModule {
  public constructor(@SkipSelf() @Optional() parent: CoreModule) {
    super(parent);
  }
}
