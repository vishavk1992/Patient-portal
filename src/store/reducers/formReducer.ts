import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

interface CounterState{
    formStage: number;
    subFormStage :any;

}

const initialState : CounterState ={
    formStage : 1,
    subFormStage: {createProfile: 1}
};

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setFormStage : (state, action)=>{
            state.formStage = action.payload;
        },

        setSubformStage :(state, action)=>{
            state.subFormStage = action.payload;
        },

    },
});

export const {setFormStage , setSubformStage} = formSlice.actions;
export default formSlice.reducer;
export const selectCount = (state: RootState) => state.form;