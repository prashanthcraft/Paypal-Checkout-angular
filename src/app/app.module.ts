import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PayPalModule } from '@wizdm/paypal';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PayPalModule.init({
      clientId: 'sb',
      currency: 'EUR'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
