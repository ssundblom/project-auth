import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  login: {
    accessToken: null, 
    userId: 0, 
    statusMessage: '',
    secret: null,
  },
}

export const user = createSlice({
  name: 'user', 
  initialState: initialState,
  reducers: {
    setAccessToken: (state, action) => {
      const {accessToken} = action.payload
      console.log(`Access Token: ${accessToken}`)
      state.login.accessToken = accessToken
    },
    setUserId: (state, action) => {
      const {userId} = action.payload
      console.log(`User Id: ${userId}`)
      state.login.userId = userId
    },
    setStatusMessage: (state, action) =>{
      const {statusMessage} = action.payload
      console.log(`Status Message: ${statusMessage}`)
      state.login.statusMessage = statusMessage
    },
    setSecret: (state, action) => {
      const { secret } = action.payload
      console.log(`Secret: ${secret}`)
      state.login.secret = secret
    }
  }
})