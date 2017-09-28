import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuickInfoComponent } from '../quickinfo/quickinfo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [   
    QuickInfoComponent
  ],
  exports: [
    QuickInfoComponent
  ]
})
export class QuickInfoModule {}