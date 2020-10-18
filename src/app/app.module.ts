import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './first/second/second.component';
import { FirstDirective } from './first/first.directive';
import { WorldComponent } from './hello-world/world/world.component';
import { HeaderComponent } from './wrapper/header/header.component';
import { FooterComponent } from './wrapper/footer/footer.component';
import { NavComponent } from './wrapper/nav/nav.component';
import { ContentComponent } from './wrapper/content/content.component';
import { WrapperModule } from './wrapper/wrapper.module';

@NgModule({
  declarations: [
   AppComponent 
  ],
  imports: [
    BrowserModule,
    WrapperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
