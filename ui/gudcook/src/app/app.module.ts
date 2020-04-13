import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CompanyComponent } from './company/company.component';
import { BlogComponent } from './blog/blog.component';
import { CoachhomeComponent } from './coachhome/coachhome.component';
import { SeekerhomeComponent } from './seekerhome/seekerhome.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductComponent,
    CompanyComponent,
    BlogComponent,
    CoachhomeComponent,
    SeekerhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
