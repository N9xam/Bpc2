import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TablePage } from '../table/table';
import { GraphPage } from '../graph/graph';
import { MaidPage } from '../maid/maid';
import { ReportPage } from '../report/report';
import { IssuePage } from '../issue/issue';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  goToTable() {
    this.navCtrl.push(TablePage);
  }
  goToGraph() {
    this.navCtrl.push(GraphPage);
  }
  goToMaid() {
    this.navCtrl.push(MaidPage);
  }
  goToReport() {
    this.navCtrl.push(ReportPage);
  }
  goToIssue() {
    this.navCtrl.push(IssuePage);
  }

}
