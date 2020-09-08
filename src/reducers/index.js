export const pingReducer = (state = { isPinging: false, user: null }, action) => {
    switch (action.type) {
        case 'FETCH_USER':
            return { ...state, isPinging: true }

        case 'FETCH_USER_FULFILLED':
            return { ...state, isPinging: false, user: action.payload }

        default:
            return state;
    }
}
