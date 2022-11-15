import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
    imports: [BrowserModule, BrowserAnimationsModule,
      RouterModule.forRoot([
        { path: 'admin', loadChildren: () =>
            import('@angular/admin').then(m => m.AdminModule) },
          { path: 'visitor', loadChildren: () =>
              import('@angular/visitor').then(m =>
                m.VisitorModule) },{ path: '', pathMatch: 'full', redirectTo:
            'tour' }
      ])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
