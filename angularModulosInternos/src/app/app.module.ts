import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PrimeNGModule} from './shared/prime-ng/prime-ng.module'
//external module
import { ToastrModule } from 'ngx-toastr';
import { NavigationComponent } from './navigation/components/navigation/navigation.component';
import { MainAppComponent } from './mainApp/main-app/main-app.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainAppComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PrimeNGModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
