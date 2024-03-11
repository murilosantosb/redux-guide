import UserActionTypes from "./action-types"

export const login = (payload) => ({
    type: UserActionTypes.LOGIN,
    payload
})

export const logoutUser = () => ({
    type: UserActionTypes.LOGOUT,
})