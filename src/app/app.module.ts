import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { AboutComponent } from './component/about/about.component';
import { GalleryModule } from '@ngx-gallery/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { LoginComponent } from './component/header/login/login.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  
  imports: [
    
    MatSnackBarModule,
    GalleryModule,
    LightboxModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

  ],

  entryComponents: [LoginComponent],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    GalleryComponent,
    AboutComponent,
    LoginComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
