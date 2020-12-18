import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FormsModule } from '@angular/forms';
import { HighLightDirective } from './shared/directives/high-light.directive';

const appConfig = {serviceURL: "http://localhost/"};
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    HighLightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {provide: "APP_CONFIG", useValue: appConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
