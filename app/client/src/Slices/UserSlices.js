import { createSlice } from "@reduxjs/toolkit";
import { defaultUserImg } from "../helpers/GlobalVariables";

const UserSlice = createSlice({
    name: 'user',
    initialState: {
        userid: "",
        name: "",
        email: "",
        role: [],
        gender: "",
        phone: "",
        avatar: defaultUserImg,
        joinedin: "",
        isAuthenticated:false,

    },
    reducers: {
        setId: (state, action) => {
            state.userid = action.payload;
        },
        setName: (state, action) => {
            state.name = action.payload;
        },
        SETMAIL: (state, action) => {
            state.email = action.payload;
        },
        setRole: (state, action) => {
            state.role = action.payload;
        },
        setGender: (state, action) => {
            state.gender = action.payload;
        },
        setAvatar: (state, action) => {
            state.avatar = action.payload;
        },
        setJoinedIn: (state, action) => {
            state.joinedin = action.payload;
        },
        setPHONE: (state, action) => {
            state.phone = action.payload
        },
        setAuth:(state,action)=>{
            state.isAuthenticated=action.payload
        },
        ClearAll: (state) => {
            state.isAuthenticated = false;
            state.avatar = defaultUserImg;
            state.joinedin = "";
            state.role = [];
            state.phone = "";
            state.email = "";
            state.gender = "";
            state.userid = "";
            state.name = "";
        }
    }
});

export const { setId, setName, SETMAIL,  setGender, setAvatar, setJoinedIn, setPHONE ,setAuth,setRole,ClearAll} = UserSlice.actions;
export default UserSlice.reducer;
