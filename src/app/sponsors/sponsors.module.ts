import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SponsorComponent }   from './sponsors.component';
import { sponsorRouting } from './sponsors.routing';

@NgModule({
  imports: [
    CommonModule,
    sponsorRouting
  ],
  declarations: [SponsorComponent]
})
export class SponsorModule {}