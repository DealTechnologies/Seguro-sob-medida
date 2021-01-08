import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as Hammer from 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './shared/auth/auth.service';
// import ngx-translate and the http loader
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { RouteReuseStrategy } from '@angular/router';
import { RouteReuseService } from './services/RouteReuseService';
import { ComponentsModule } from './shared/components/components.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NgxPermissionsModule } from 'ngx-permissions';
import { TokenInterceptor } from './services/http.interceptor';
import { SeguradoraService } from "./services/seguradora.service";


export class HammerConfig extends HammerGestureConfig {
    overrides = {
        swipe: { direction: Hammer.DIRECTION_ALL }
    };
}
@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HammerModule,
        ComponentsModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        MatSelectModule,
        MatDialogModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            },
            isolate: false
        }),
        ComponentsModule,
        NgxPermissionsModule.forRoot(),
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [
        AuthService,
        SeguradoraService,
        HttpClientModule,
        {
            provide: HAMMER_GESTURE_CONFIG,
            useClass: HammerConfig
        },
        {
            provide: RouteReuseStrategy,
            useClass: RouteReuseService
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}


export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http);
}
