import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActualitesPage } from './actualites';

@NgModule({
  declarations: [
    ActualitesPage,
  ],
  imports: [
    IonicPageModule.forChild(ActualitesPage),
  ],
})
export class ActualitesPageModule {}
