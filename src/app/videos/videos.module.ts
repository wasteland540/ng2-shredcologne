import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoComponent }   from './videos.component';
import { videoRouting } from './videos.routing';

@NgModule({
  imports: [
    CommonModule,
    videoRouting
  ],
  declarations: [VideoComponent]
})
export class VideoModule {}