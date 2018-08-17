import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './reducers/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './effects/user.effects';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('user', userReducer),
        EffectsModule.forFeature([UserEffects])
    ],
    declarations: []
})
export class UserModule { }
