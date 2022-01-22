import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PrimeNGModule} from './shared/prime-ng/prime-ng.module'
import { interceptorProvider } from './services/interceptors/interceptors.service';

//external module
import { ToastrModule } from 'ngx-toastr';
import { NavigationComponent } from './navigation/components/navigation/navigation.component';
import { MainAppComponent } from './mainApp/main-app/main-app.component';
import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from './components/index/index.component';
import { RegistroComponent } from './components/registro/registro.component';




@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainAppComponent,
    LoginComponent,
    IndexComponent,
    RegistroComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PrimeNGModule,
    ToastrModule.forRoot(),
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
