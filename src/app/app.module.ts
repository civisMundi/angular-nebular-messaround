import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { NbLayoutModule, NbSidebarModule, NbThemeService, NbThemeModule, NbSidebarService } from '@nebular/theme';

import { reducers, metaReducers } from './reducers';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppEffects } from './app.effects';
import { UserModule } from './user/user.module';
import { NavbarModule } from './navbar/navbar.module';
import { AppRoutingModule } from './router/routing.module';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        EffectsModule.forRoot([AppEffects]),
        NbThemeModule.forRoot({ name: 'default' }),
        AppRoutingModule,
        UserModule,
        NavbarModule,
        NbLayoutModule,
        NbSidebarModule,
    ],
    providers: [
        NbThemeService,
        NbSidebarService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
