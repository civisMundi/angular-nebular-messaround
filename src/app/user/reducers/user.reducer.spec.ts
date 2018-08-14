import { userReducer, initialUserState } from './user.reducer';

describe('User Reducer', () => {
    describe('unknown action', () => {
        it('should return the initial state', () => {
            const action = {} as any;
            const result = userReducer(initialUserState, action);

            expect(result).toBe(initialUserState);
        });
    });
});
