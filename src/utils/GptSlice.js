import { createSlice } from '@reduxjs/toolkit';

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showgptSearch:false
    },
    reducers:{
        toggleGptSearch :(state)=>{
            console.log("toggling gpt search, current state: ",state.showgptSearch);
            state.showgptSearch = !state.showgptSearch;
            console.log("toggling gpt search, current state: ",state.showgptSearch);
        },
    },
})

export default gptSlice.reducer;
export const {toggleGptSearch} = gptSlice.actions;