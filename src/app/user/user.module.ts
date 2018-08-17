import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NbInputDirective } from '@nebular/theme';

import { userReducer } from './reducers/user.reducer';
import { UserEffects } from './effects/user.effects';
import { LoginComponent } from './pages/login/login.component';
@NgModule({
    declarations: [
        LoginComponent,
        NbInputDirective
    ],
    imports: [
        CommonModule,
        StoreModule.forFeature('user', userReducer),
        EffectsModule.forFeature([UserEffects])
    ],
})
export class UserModule { }
