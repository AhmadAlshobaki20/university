import { createSlice } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    token: "",
    userId: ""
}

interface UserInfo {
    first_name: String,
    last_name: String,
    email: String,
    username: String,
    token: String
}


const _storeUserData = async (userInfo: UserInfo) => {
    try {
        await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
    } catch (error) {
        console.log(error);
    }
};

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setuserInfo: (state, action) => {
            _storeUserData(action.payload);
            return state = action.payload
        }
    }
})

export const {
    setuserInfo
} = userSlice.actions

export default userSlice.reducer