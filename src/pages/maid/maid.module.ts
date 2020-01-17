import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaidPage } from './maid';

@NgModule({
  declarations: [
    MaidPage,
  ],
  imports: [
    IonicPageModule.forChild(MaidPage),
  ],
})
export class MaidPageModule {}
