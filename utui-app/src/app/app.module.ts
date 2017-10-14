import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FunctionComponent } from './components/function/function.component';
import { TestResultComponent } from './components/test-result/test-result.component';

@NgModule({
  declarations: [
    AppComponent,
    FunctionComponent,
    TestResultComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
