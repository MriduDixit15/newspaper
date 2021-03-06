import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { GalleryComponent } from './component/gallery/gallery.component';


const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
  	{ path: 'home', component: HomeComponent },
  	{ path: 'about', component: AboutComponent },
  	{ path: 'gallery', component: GalleryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
