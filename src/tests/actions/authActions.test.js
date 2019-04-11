import { login, logout } from '../../actions/authActions'

test('should generate login action object', () => {
    const uid = 'asd45WnmdfuionDVwef'
    const action = login(uid)

    expect(action).toEqual({
        type: 'LOGIN',
        uid
    })
})

test('should generate logout action object', () => {
    const action = logout()

    expect(action).toEqual({
        type: 'LOGOUT'
    })
})