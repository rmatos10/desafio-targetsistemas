import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ToastrModule } from 'ngx-toastr';
import { RespostasModule } from './respostas/respostas.module';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ToastrModule.forRoot(
            {
                timeOut: 5000,
                positionClass: 'toast-top-right',
                preventDuplicates: true
            }
        ),
        RespostasModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
