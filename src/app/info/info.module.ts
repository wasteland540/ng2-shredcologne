import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoComponent }   from './info.component';
import { infoRouting } from './info.routing';
import { QuickInfoModule } from '../quickinfo/quickinfo.module';

@NgModule({
  imports: [
    CommonModule,
    infoRouting,
    QuickInfoModule
  ],
  declarations: [
    InfoComponent,
  ]
})
export class InfoModule {}