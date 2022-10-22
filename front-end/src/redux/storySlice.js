import {createSlice} from "@reduxjs/toolkit";

const storySlice = createSlice({
    name:"stories",
    initialState:{
        //state
        stories:{
            allStory:null, //store all the stories
            isFetching: false,
            error:false
        },
        msg:"",
    },

    reducers:{
        getStoriesStart:(state)=>{
            state.stories.isFetching = true;
        }, //will be called when you just get all story from api data
        getStoriesSuccess:(state,action)=>{ 
            state.stories.isFetching = false;
            state.stories.allStory = action.payload;
        },
        getStoriesFailed:(state)=>{
            state.stories.isFetching = false;
            state.stories.error = true;

        }
    }    
})

export const {
    getStoriesStart,
    getStoriesSuccess,
    getStoriesFailed,
} = storySlice.actions;
export default storySlice.reducer;























