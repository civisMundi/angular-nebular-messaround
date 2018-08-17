import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromNavbar from './reducers/navbar.reducer';
import { EffectsModule } from '@ngrx/effects';
import { NavbarEffects } from './effects/navbar.effects';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('navbar', fromNavbar.reducer),
        EffectsModule.forFeature([NavbarEffects])
    ],
    declarations: []
})
export class NavbarModule { }
