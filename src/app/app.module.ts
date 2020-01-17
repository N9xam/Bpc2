import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPageModule } from '../pages/login/login.module';
import { MenuPageModule } from '../pages/menu/menu.module';
import { TablePageModule } from '../pages/table/table.module';
import { GraphPageModule } from '../pages/graph/graph.module';
import { MaidPageModule } from '../pages/maid/maid.module';
import { ReportPageModule } from '../pages/report/report.module';
import { IssuePageModule } from '../pages/issue/issue.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    MenuPageModule,
    TablePageModule,
    GraphPageModule,
    MaidPageModule,
    ReportPageModule,
    IssuePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
