import { createSlice } from '@reduxjs/toolkit';
import data from "../../fakeData2.json";
const initialState = {
  list: [...data],
  label:'카리나',
  id:'1',
};

const appSlice = createSlice({
  name:'app',
  initialState,
  reducers: { 
    updateName:(state,action)=>{
      state.name = action.payload;
    },
    updateContent:(state,action)=>{
      state.content = action.payload;
    },
    updatePostSelect:(state,action)=>{
      state.postSelect = action.payload;
    },
    updateList:(state,action)=>{
      state.list = action.payload;
    },
  },
});

export const {updateName,updateContent,updatePostSelect,updateList,updateLocalDate} = appSlice.actions;

export default appSlice.reducer;