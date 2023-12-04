import { createSlice } from "@reduxjs/toolkit";

const initialState={
    id:localStorage.getItem('userId'),
    nickname:localStorage.getItem('nickname'),
    avatar:localStorage.getItem('아바타'),   
}



const userSlice =createSlice({
    name:'user',
    initialState,
    reducers:{
    idinfo:(state,action)=> {
                state.id=action.payload},
    nicknameinfo:(state,action)=> {
                    state.nickname=action.payload},
    avatarinfo:(state,action)=> {
                        state.avatar=action.payload},
    logininfo:(state,action)=> {
                            state.login=action.payload},

},
});

export const { idinfo,nicknameinfo,avatarinfo } = userSlice.actions;
export default userSlice.reducer;