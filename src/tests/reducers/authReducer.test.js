import authReducer from '../../reducers/authReducer'

const uid = 'asd45WnmdfuionDVwef'

test('should setup default', () => {
    const state = authReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({})
})

test('should set uid', () => {
    const action = {
        type: 'LOGIN',
        uid
    }
    const state = authReducer(undefined, action)

    expect(state.uid).toBe(action.uid)
})

test('should unset uid', () => {
    const state = authReducer({ uid }, { type: 'LOGOUT' })
    expect(state).toEqual({})
})