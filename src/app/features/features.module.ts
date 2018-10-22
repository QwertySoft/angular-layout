import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureOneModule } from './feature-one/feature-one.module';

@NgModule({
  imports: [
    CommonModule,
    FeatureOneModule.forRoot()
  ],
  declarations: []
})
export class FeaturesModule { }
